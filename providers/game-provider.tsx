import React, { createContext, ReactNode, useState } from "react";
import { GAME_CONSTANTS } from "../utils/gameLogic";
import { router } from "expo-router";

export type Player = {
  id: number;
  name: string;
  penaltiesLeft: number; // Başlangıçta 3
  trumpsLeft: number; // Başlangıçta 2
  score: number; // Başlangıçta 0
};

export type GameRound = {
  roundNumber: number;
  selectedBy: number; // Oyunu seçen oyuncunun id'si
  gameName: string;
  type: "penalty" | "trump";
  results: {
    playerId: string;
    points: number;
  }[];
};

type PenaltyGame = {
  name: string;
  timesPlayed: number; // Max 2
};

/* const initialPlayers: Player[] = [
  { id: 1, name: "Ahmet", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
  { id: 2, name: "Zeynep", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
  { id: 3, name: "Ali", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
  { id: 4, name: "Esra", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
]; */

export const penaltyGames: PenaltyGame[] = [
  { name: "El almaz", timesPlayed: 0 },
  { name: "Kupa almaz", timesPlayed: 0 },
  { name: "Kız almaz", timesPlayed: 0 },
  { name: "Erkek almaz", timesPlayed: 0 },
  { name: "Son iki", timesPlayed: 0 },
  { name: "Rıfkı", timesPlayed: 0 },
];

// Function to get available penalty games
export const getAvailablePenaltyGames = () => {
  return penaltyGames.filter((game) => game.timesPlayed < 2);
};

export const GameContext = createContext<any>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[] | undefined>(undefined);
  const [currentRound, setCurrentRound] = useState<number | undefined>(
    undefined
  );
  const [playerId, setPlayerId] = useState<number>(0);
  const [rounds, setRounds] = useState<GameRound[]>([]);
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winnerId, setWinnerId] = useState<number | undefined>(undefined);

  const setPlayerValues = (players: string[]) => {
    setPlayers(
      players.map((p, i) => ({
        id: i,
        name: p,
        penaltiesLeft: 3,
        trumpsLeft: 2,
        score: 0,
      }))
    );
  };

  function selectPenaltyGame(playerId: number, gameName: string) {
    const game = penaltyGames.find((g) => g.name === gameName);
    const player = players?.find((p: Player) => p.id === playerId);
    const gameConfig = GAME_CONSTANTS.find((g) => g.name === gameName);

    if (!game || game.timesPlayed >= 2) {
      alert("Bu ceza oyunu 2 kez oynandı.");
      return false;
    }
    if (!player || player.penaltiesLeft <= 0) {
      alert("Bu oyuncunun ceza hakkı kalmadı.");
      return false;
    }

    // güncelle
    game.timesPlayed += 1;
    player.penaltiesLeft -= 1;
    setMaxValue(gameConfig?.maxPenalty);

    setCurrentRound(rounds.length + 1);

    rounds.push({
      roundNumber: rounds.length + 1,
      selectedBy: playerId,
      gameName,
      type: "penalty",
      results: [], // sonra girilecek
    });
    return true;
  }

  function selectTrumpGame(playerId: number, gameName: string) {
    const player = players?.find((p: Player) => p.id === playerId);
    const gameConfig = GAME_CONSTANTS.find((g) => g.name === gameName);

    if (!player || player.trumpsLeft <= 0) {
      alert("Bu oyuncunun koz hakkı kalmadı.");
      return false;
    }

    // güncelle
    player.trumpsLeft -= 1;
    setMaxValue(gameConfig?.maxReward);
    setCurrentRound(rounds.length + 1);
    rounds.push({
      roundNumber: rounds.length + 1,
      selectedBy: playerId,
      gameName,
      type: "trump",
      results: [], // sonra girilecek
    });
    return true;
  }

  function updateRoundResults(
    roundNumber: number,
    results: { playerId: number; points: number }[]
  ) {
    const updatedRounds = rounds.map((round) => {
      if (round.roundNumber === roundNumber) {
        return {
          ...round,
          results: results.map((r) => ({
            playerId: r.playerId.toString(),
            points: r.points,
          })),
        };
      }
      return round;
    });
    setRounds(updatedRounds);
  }

  function updateCurrentPlayerId() {
    let tempId = playerId === 3 ? 0 : playerId + 1;
    setPlayerId(tempId);
  }

  function findAndSetWinnerPlayer() {
    const id = players?.sort((a: Player, b: Player) => b.score - a.score)[0].id;
    setWinnerId(id);
  }

  function resetGame() {
    setPlayers(undefined);
    setCurrentRound(undefined);
    setPlayerId(0);
    setRounds([]);
    setMaxValue(undefined);
    setIsGameOver(false);
    setWinnerId(undefined);
    router.replace("/players");
  }

  return (
    <GameContext.Provider
      value={{
        players,
        setPlayerValues,
        rounds,
        selectPenaltyGame,
        selectTrumpGame,
        currentRound,
        maxValue,
        updateRoundResults,
        playerId,
        isGameOver,
        findAndSetWinnerPlayer,
        setIsGameOver,
        winnerId,
        setWinnerId,
        resetGame,
        updateCurrentPlayerId,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
