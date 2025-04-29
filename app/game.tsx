import BackgroundContainer from "@/components/background-container";
import GameBoard from "@/components/game-board";
import GameOverModal from "@/components/game-over-modal";
import { GameContext } from "@/providers/game-provider";
import React, { useContext } from "react";

const Game = () => {
  const { isGameOver } = useContext(GameContext);
  return (
    <BackgroundContainer>
      <GameBoard />
      {isGameOver && <GameOverModal />}
    </BackgroundContainer>
  );
};

export default Game;
