import { GameContext, penaltyGames, Player } from "@/providers/game-provider";
import { GAME_CONSTANTS } from "@/utils/gameLogic";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useContext, useRef, useState } from "react";
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RoundModal from "./round-modal";

const GameBoard = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = ["35%"];
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { players, selectTrumpGame, selectPenaltyGame, rounds, playerId } =
    useContext(GameContext);

  const handleGameSelect = (gameName: string) => {
    setSelectedGame(gameName);
  };

  const handleStartGame = () => {
    if (selectedGame === "Koz") {
      selectTrumpGame(playerId, selectedGame);
      setIsModalOpen(true);
      setSelectedGame(null);
    } else {
      selectPenaltyGame(playerId, selectedGame);
      setIsModalOpen(true);
      setSelectedGame(null);
    }
  };

  return (
    <SafeAreaView className="w-full h-full flex-1">
      <BottomSheetModalProvider>
        {players.map((player: Player, k: number) => (
          <View
            className={`flex flex-row items-center justify-between w-[100vw] px-4 border-b-2 border-amber-600 h-28 ${
              player.id === playerId && "bg-white/25"
            } `}
            key={k}
          >
            <View className="flex flex-row gap-2">
              <View className="flex gap-1 items-center justify-center">
                <Ionicons
                  name={
                    player.penaltiesLeft >= 1
                      ? "triangle-sharp"
                      : "triangle-outline"
                  }
                  className="rotate-180"
                  size={20}
                  color="orange"
                />
                <Ionicons
                  name={
                    player.penaltiesLeft >= 2
                      ? "triangle-sharp"
                      : "triangle-outline"
                  }
                  className="rotate-180"
                  size={20}
                  color="orange"
                />
                <Ionicons
                  name={
                    player.penaltiesLeft >= 3
                      ? "triangle-sharp"
                      : "triangle-outline"
                  }
                  className="rotate-180"
                  size={20}
                  color="orange"
                />
              </View>
              <View className="flex gap-1 items-center justify-center">
                <FontAwesome
                  name={player.trumpsLeft >= 1 ? "circle" : "circle-o"}
                  size={20}
                  color="orange"
                />
                <FontAwesome
                  name={player.trumpsLeft >= 2 ? "circle" : "circle-o"}
                  size={20}
                  color="orange"
                />
              </View>
            </View>
            <Text
              className={`text-white text-xl ${
                player.id === playerId && "font-bold"
              } `}
            >
              {player.name}
            </Text>
            <Text className="text-white text-xl">{player.score}</Text>
          </View>
        ))}
        <View className="flex flex-row flex-wrap gap-4 items-center justify-center my-4">
          {penaltyGames.map((p) => (
            <Text className="text-white font-medium" key={p.name}>
              {p.name} - {p.timesPlayed == 0 ? 2 : p.timesPlayed == 1 ? 1 : 0}
            </Text>
          ))}
        </View>
        <View className="flex-1 items-center">
          <TouchableOpacity
            className="flex items-center justify-center"
            onPress={() => sheetRef.current?.present()}
          >
            <Text className="text-amber-400 text-xl">
              {selectedGame || "Oyunu seç"}
            </Text>
          </TouchableOpacity>
          <BottomSheetModal
            snapPoints={snapPoints}
            ref={sheetRef}
            enableDynamicSizing={false}
            handleStyle={{
              backgroundColor: "#27272a",
              borderBottomWidth: 1,
              borderColor: "#999",
            }}
            handleIndicatorStyle={{
              backgroundColor: "orange",
            }}
            backgroundStyle={{
              backgroundColor: "#27272a",
            }}
          >
            <BottomSheetView className="bg-zinc-800 h-full">
              <ScrollView>
                {GAME_CONSTANTS.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => handleGameSelect(item.name)}
                    className={`w-full h-16 flex items-center justify-center border-b border-amber-500/40 ${
                      selectedGame === item.name
                        ? "bg-amber-500/20"
                        : "bg-transparent"
                    }`}
                  >
                    <Text
                      className={`text-xl text-center ${
                        selectedGame === item.name
                          ? "text-amber-400 font-bold"
                          : "text-gray-300"
                      }`}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <Pressable
                className="flex items-center justify-center h-14 border-t border-amber-500 disabled:opacity-25 disabled:"
                onPress={() => {
                  if (selectedGame) {
                    sheetRef.current?.dismiss();
                    handleStartGame();
                  }
                }}
                disabled={!selectedGame}
              >
                <Text className="text-orange-500 text-2xl font-medium disabled:text-orange-900">
                  Seç
                </Text>
              </Pressable>
            </BottomSheetView>
          </BottomSheetModal>
        </View>
        <RoundModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default GameBoard;
