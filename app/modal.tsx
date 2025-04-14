import React from "react";
import { ScrollView, Text, View } from "react-native";

const HowToPlayModal = () => {
  return (
    <ScrollView className="bg-zinc-700 w-full h-screen px-4 py-6">
      <View className="space-y-6">
        <View className="space-y-2">
          <Text className="text-2xl font-bold text-amber-400 mb-2">
            How to Play King
          </Text>

          <Text className="text-lg font-semibold text-amber-300 mb-1">
            History
          </Text>
          <Text className="text-base text-gray-200 leading-6">
            King is a variant of the French card game Le Barbu, which was
            popular among university students in early 20th-century France. "Le
            Barbu" means "The Bearded One" and refers to the King of Hearts, a
            penalty card in the game. This card corresponds to "Rıfkı" in the
            Turkish version, where the game itself is also known as Barbu.
          </Text>
        </View>

        <View className="space-y-2">
          <Text className="text-lg font-semibold text-amber-300 mb-1">
            Game Setup
          </Text>
          <Text className="text-base text-gray-200 leading-6">
            • 4 players
            {"\n"}• Standard 52-card deck
            {"\n"}• 13 rounds total
            {"\n"}• Each player starts with 0 points
          </Text>
        </View>

        <View className="space-y-2">
          <Text className="text-lg font-semibold text-amber-300 mb-1">
            Basic Rules
          </Text>
          <Text className="text-base text-gray-200 leading-6">
            1. Each round has different objectives
            {"\n"}2. Players must follow suit if possible
            {"\n"}3. Points are typically penalties (lower score is better)
            {"\n"}4. The game ends after all 13 rounds are played
          </Text>
        </View>

        <View className="space-y-2">
          <Text className="text-lg font-semibold text-amber-300 mb-1">
            Scoring
          </Text>
          <Text className="text-base text-gray-200 leading-6">
            Different rounds have different scoring rules. Generally, collecting
            certain cards or tricks will result in penalty points. The player
            with the lowest total score at the end of all rounds wins the game.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HowToPlayModal;
