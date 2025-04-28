import { View, Text } from "react-native";
import React from "react";
import BackgroundContainer from "@/components/background-container";
import GameTable from "@/components/game-table";

const Table = () => {
  return (
    <BackgroundContainer>
      <GameTable />
    </BackgroundContainer>
  );
};

export default Table;
