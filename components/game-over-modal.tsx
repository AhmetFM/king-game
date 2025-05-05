import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useContext, useRef, useState } from "react";
import { GameContext } from "@/providers/game-provider";

const GameOverModal = () => {
  const { winnerId, isGameOver, setIsGameOver, players } =
    useContext(GameContext);

  const [modal, setModal] = useState(true);

  if (winnerId === undefined) {
    setIsGameOver(false);
  }

  return (
    <Modal animationType="fade" transparent={true} visible={modal}>
      <View className="flex items-center justify-center w-full h-full bg-black/50">
        <View className="w-3/4 h-60 bg-zinc-800 shadow rounded-2xl flex items-center justify-center gap-1">
          <Text className="text-white font-medium text-xl py-2 border-b text-center px-12 border-white">
            KAZANAN
          </Text>
          <Text className="text-white h-20 flex items-center justify-center font-bold text-2xl py-2">
            {players[winnerId].name === "Murat"
              ? "Hacı Muro"
              : players[winnerId].name}
          </Text>
          <TouchableOpacity
            className="text-center flex items-center justify-center h-12 bg-amber-600 w-2/3 rounded-md disabled:opacity-50"
            onPress={() => setModal(false)}
          >
            <Text className="text-white">Kapat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GameOverModal;
