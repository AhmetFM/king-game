import { GameContext, Player } from "@/providers/game-provider";
import { GAME_CONSTANTS, GAME_TYPE } from "@/utils/gameLogic";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useContext, useRef, useState } from "react";
import { Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const GameBoard = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = ["35%"];
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const { players } = useContext(GameContext);

  const handleGameSelect = (gameName: string) => {
    setSelectedGame(gameName);
    console.log(selectedGame);
  };

  return (
    <SafeAreaView className="w-full h-full flex-1">
      <BottomSheetModalProvider>
        {players.map((player: Player, k: number) => (
          <View
            className="flex flex-row items-center justify-between w-[100vw] px-4 border-b-2 border-amber-600 h-28"
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
            <Text className="text-white text-xl">{player.name}</Text>
            <Text className="text-white text-xl">{player.score}</Text>
          </View>
        ))}
        <View className="flex-1 items-center">
          <Text className="text-white text-2xl">Select Game</Text>
          <TouchableOpacity onPress={() => sheetRef.current?.present()}>
            <Text className="text-amber-400 text-xl">
              {selectedGame || "Choose a game"}
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
                      className={`text-2xl text-center ${
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
              <Button
                title="Select"
                onPress={() => {
                  if (selectedGame) {
                    sheetRef.current?.dismiss();
                  }
                }}
                color={"orange"}
                disabled={!selectedGame}
              />
            </BottomSheetView>
          </BottomSheetModal>
        </View>
      </BottomSheetModalProvider>
    </SafeAreaView>
  );
};

export default GameBoard;
