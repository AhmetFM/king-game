import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export type Player = {
  id: string;
  name: string;
  penaltiesLeft: number; // Başlangıçta 3
  trumpsLeft: number; // Başlangıçta 2
  score: number; // Başlangıçta 0
};

type GameRound = {
  roundNumber: number;
  selectedBy: string; // Oyunu seçen oyuncunun id'si
  gameName: string;
  type: "penalty" | "trump";
  results: {
    playerId: string;
    points: number;
  }[];
};

type PenaltyGame = {
  name: string; // Örn: "El alma", "Yer alma", vb.
  timesPlayed: number; // Max 2
};

const initialPlayers: Player[] = [
  { id: "1", name: "Ahmet", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
  { id: "2", name: "Zeynep", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
  { id: "3", name: "Ali", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
  { id: "4", name: "Esra", penaltiesLeft: 3, trumpsLeft: 2, score: 0 },
];

const penaltyGames: PenaltyGame[] = [
  { name: "El alma", timesPlayed: 0 },
  { name: "Yer alma", timesPlayed: 0 },
  { name: "Kupa atma", timesPlayed: 0 },
  { name: "Kız alma", timesPlayed: 0 },
  { name: "Son el alma", timesPlayed: 0 },
  { name: "Rıfkı", timesPlayed: 0 },
];

const rounds: GameRound[] = []; // Oyun tur geçmişi

export const GameContext = createContext<any>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [players, setPlayers] = useState<Player[] | undefined>(undefined);

  const setPlayerValues = (players: string[]) => {
    setPlayers(
      players.map((p, i) => ({
        id: i.toString(),
        name: p,
        penaltiesLeft: 3,
        trumpsLeft: 2,
        score: 0,
      }))
    );
  };

  return (
    <GameContext.Provider value={{ players, setPlayerValues }}>
      {children}
    </GameContext.Provider>
  );
};
