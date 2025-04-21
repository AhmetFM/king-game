import { GAME_CONSTANTS } from "@/utils/gameLogic";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const GameBoard = () => {
  const sheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = ["35%"];
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameSelect = (gameName: string) => {
    setSelectedGame(gameName);
  };

  return (
    <SafeAreaView className="w-full h-full flex-1">
      <BottomSheetModalProvider>
        {["Ahmet", "Murat", "Samet", "Mami"].map((i, k) => (
          <View
            className="flex flex-row items-center justify-between w-[100vw] px-4 border-b-2 border-amber-600 h-28"
            key={k}
          >
            <View className="flex flex-row gap-2">
              <View className="flex gap-1 items-center justify-center">
                <Ionicons
                  name="triangle-outline"
                  className="rotate-180"
                  size={20}
                  color="orange"
                />
                <Ionicons
                  name="triangle-outline"
                  className="rotate-180"
                  size={20}
                  color="orange"
                />
                <Ionicons
                  name="triangle-outline"
                  className="rotate-180"
                  size={20}
                  color="orange"
                />
              </View>
              <View className="flex gap-1 items-center justify-center">
                <FontAwesome name="circle-o" size={20} color="orange" />
                <FontAwesome name="circle-o" size={20} color="orange" />
              </View>
            </View>
            <Text className="text-white text-xl">{i}</Text>
            <Text className="text-white text-xl">0</Text>
          </View>
        ))}
        <View className="flex-1">
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
          >
            <BottomSheetView className="bg-zinc-800 h-full">
              <BottomSheetFlatList
                data={GAME_CONSTANTS}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => handleGameSelect(item.name)}
                    className={`w-full h-12 flex items-center justify-center border-b border-amber-500/40 ${
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
                )}
              />
              <Button
                title="Select"
                onPress={() => {
                  if (selectedGame) {
                    sheetRef.current?.dismiss();
                  }
                }}
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
