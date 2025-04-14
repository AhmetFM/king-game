import { View, Text } from "react-native";
import React from "react";

const GameBoard = () => {
  const playerData = [
    {
      name: "Ahmet",
      totalScore: 0,
    },
  ];

  return (
    <View className="w-full">
      {["A", "A", "A", "A"].map((i, k) => (
        <Text key={k}>{i} </Text>
      ))}
    </View>
  );
};

export default GameBoard;
