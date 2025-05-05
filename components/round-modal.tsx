import { View, Text, Pressable, TouchableOpacity, Modal } from "react-native";
import React, { useContext, useState } from "react";
import { GameContext, Player } from "@/providers/game-provider";
import { AntDesign } from "@expo/vector-icons";
import { GAME_CONSTANTS } from "@/utils/gameLogic";
import { SafeAreaView } from "react-native-safe-area-context";

type RoundModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type PlayerScoreProps = {
  player: Player;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  isIncrementDisabled: boolean;
};

const PlayerScore = ({
  player,
  value,
  onIncrement,
  onDecrement,
  isIncrementDisabled,
}: PlayerScoreProps) => (
  <View className="flex flex-row gap-4 items-center justify-between h-12 w-full px-4">
    <Text className="text-white text-lg min-w-20 max-w-24">{player.name}:</Text>
    <Pressable
      disabled={value === 0}
      className="w-16 h-8 rounded disabled:opacity-50 bg-orange-400 flex items-center justify-center"
      onPress={onDecrement}
    >
      <AntDesign name="minus" size={24} />
    </Pressable>
    <Text className="text-white text-xl">{value}</Text>
    <Pressable
      disabled={isIncrementDisabled}
      className="w-16 h-8 rounded disabled:opacity-50 bg-yellow-400 flex items-center justify-center"
      onPress={onIncrement}
    >
      <AntDesign name="plus" size={24} />
    </Pressable>
  </View>
);

const RoundModal = ({ isModalOpen, setIsModalOpen }: RoundModalProps) => {
  const [values, setValues] = useState<number[]>(Array(4).fill(0));
  const {
    players,
    rounds,
    currentRound,
    maxValue,
    updateRoundResults,
    updateCurrentPlayerId,
    setWinnerId,
    setIsGameOver,
    findAndSetWinnerPlayer,
  } = useContext(GameContext);

  const totalValue = values.reduce((acc, curr) => acc + curr, 0);

  const handleValueChange = (playerId: number, increment: boolean) => {
    setValues((prevValues) => {
      const newValues = [...prevValues];
      if (increment) {
        newValues[playerId] += 1;
      } else if (newValues[playerId] > 0) {
        newValues[playerId] -= 1;
      }
      return newValues;
    });
  };

  const handleFinishRound = () => {
    if (!currentRound) return;

    /* const results = values.map((points, index) => ({
      playerId: index,
      points,
    })); */

    if (rounds[currentRound - 1].type === "trump") {
      //If game was a trump game
      let reward = GAME_CONSTANTS.find((g) => g.name == "Koz")?.rewardPerUnit!;

      const results = values.map((points, index) => {
        if (points >= 10) {
          setWinnerId(index);
          setIsGameOver(true);
        }
        return {
          playerId: index,
          points: points * reward,
        };
      });

      players.forEach((p: Player) => {
        p.score += values[p.id] * reward;
      });

      updateRoundResults(currentRound, results);
    } else if (rounds[currentRound - 1].type == "penalty") {
      //If game was a penalty game
      let penalty = GAME_CONSTANTS.find(
        (g) => g.name === rounds[currentRound - 1].gameName
      )?.penaltyPerUnit;

      if (!penalty) {
        return alert("Penaltı yok");
      }

      const results = values.map((points, index) => ({
        playerId: index,
        points: -(points * penalty),
      }));

      players.forEach((p: Player) => {
        p.score -= values[p.id] * penalty;
      });

      updateRoundResults(currentRound, results);
    }

    updateCurrentPlayerId();

    setIsModalOpen(false);
    setValues(Array(4).fill(0)); // Reset values after saving

    if (currentRound == 20) {
      findAndSetWinnerPlayer();
      setIsGameOver(true);
    }
  };

  if (!players) return null;

  return (
    <SafeAreaView>
      <Modal animationType="fade" transparent={true} visible={isModalOpen}>
        <View className="flex items-center justify-center w-full h-full bg-black/60">
          <View className="w-3/4 h-80 bg-zinc-800 shadow rounded-2xl flex items-center gap-1">
            <Text className="text-white font-medium text-2xl py-2 border-b text-center px-12 border-white">
              {currentRound}. El
            </Text>

            {players.map((player: Player) => (
              <PlayerScore
                key={player.id}
                player={player}
                value={values[player.id]}
                onIncrement={() => handleValueChange(player.id, true)}
                onDecrement={() => handleValueChange(player.id, false)}
                isIncrementDisabled={totalValue >= maxValue}
              />
            ))}

            <TouchableOpacity
              className="text-center flex items-center justify-center h-12 bg-amber-600 w-2/3 rounded-md mt-2 disabled:opacity-50"
              onPress={handleFinishRound}
              disabled={totalValue != maxValue}
            >
              <Text className="text-white">Kaydet</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default RoundModal;
