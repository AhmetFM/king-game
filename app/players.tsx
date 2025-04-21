import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackgroundContainer from "@/components/background-container";
import { router } from "expo-router";

const Players = () => {
  const [playerNames, setPlayerNames] = useState(["", "", "", ""]);

  const handleNameChange = (text: string, index: number) => {
    const newNames = [...playerNames];
    newNames[index] = text;
    setPlayerNames(newNames);
  };

  const handleStartGame = () => {
    // TODO: Implement game start logic
    if (playerNames.some((name) => name.trim() === "")) {
      alert("Please enter names for all players.");
      return;
    }
    console.log("Starting game with players:", playerNames);
    router.push("/game");
  };

  return (
    <BackgroundContainer>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-amber-400 text-5xl font-bold mb-2 tracking-wider">
          KING
        </Text>
        <Text className="text-gray-300 text-lg mb-8 font-medium italic">
          Enter Player Names
        </Text>

        <View className="w-full space-y-12 flex flex-col gap-6 mb-8">
          {[0, 1, 2, 3].map((index) => (
            <View key={index} className="relative">
              <View className="absolute -top-3 left-4 bg-zinc-800 px-2 z-10">
                <Text className="text-amber-400 text-sm">
                  Player {index + 1}
                </Text>
              </View>
              <TextInput
                className="min-w-32 max-w-48 min-h-16 bg-orange-800 text-gray-100 rounded-lg px-4 py-3 text-xl border-2 border-amber-500/30 focus:border-amber-500"
                placeholder={`Player ${index + 1}`}
                placeholderTextColor="#9CA3AF"
                value={playerNames[index]}
                maxLength={16}
                onChangeText={(text) => handleNameChange(text, index)}
              />
            </View>
          ))}
        </View>

        <TouchableOpacity
          className="w-full bg-amber-500 py-4 px-6 rounded-lg shadow-lg"
          onPress={handleStartGame}
        >
          <Text className="text-gray-900 text-xl font-bold text-center">
            Start Game
          </Text>
        </TouchableOpacity>
      </View>
    </BackgroundContainer>
  );
};

export default Players;
