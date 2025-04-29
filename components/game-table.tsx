import { GameContext, GameRound, Player } from "@/providers/game-provider";
import React, { useContext } from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";

const GameTable = () => {
  const { rounds, players } = useContext(GameContext);

  /* if (rounds.lenght !== 1) {
    return (
      <View className="px-12">
        <Text className="text-orange-100 text-2xl text-center font-medium">
          Oynanmış eller burada görünecektir.
        </Text>
      </View>
    );
  } */

  return (
    <ScrollView className="flex-1 flex-col mt-10 w-full h-full">
      <View className="w-[100vw] border border-white h-20 flex-row">
        <SingleCard name="Oyuncular" />
        {players.map((p: Player) => (
          <SingleCard key={p.id} name={p.name} />
        ))}
      </View>
      {rounds.map((round: GameRound) => (
        <View
          key={round.roundNumber}
          className="w-[100vw] border border-white h-20 flex-row"
        >
          <SingleCard round={round} />
          {round.results.map((p: any, i: number) => (
            <SingleCard key={i} name={p.points.toString()} />
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default GameTable;

const SingleCard = ({ name, round }: { name?: string; round?: GameRound }) => {
  const width = Dimensions.get("screen").width;

  const { players } = useContext(GameContext);

  return (
    <View
      className={`h-20 border-r border-white flex items-center justify-center`}
      style={{
        width: width / 5,
      }}
    >
      {name && <Text className="text-white text-lg">{name}</Text>}
      {round && (
        <>
          <Text className="text-white font-medium">
            {round.roundNumber.toString()}.el:
          </Text>
          <Text className="text-white font-light">
            {players[round.selectedBy].name}
          </Text>
          <Text className="text-white border-b border-white font-light">
            {round.gameName}
          </Text>
        </>
      )}
    </View>
  );
};
