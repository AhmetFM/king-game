import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { Stack } from "expo-router";
import { GameProvider } from "@/providers/game-provider";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <GameProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              headerTitle: "How To Play",
              headerStyle: {
                backgroundColor: "#333",
              },
              headerTintColor: "#faa",
            }}
          />
          <Stack.Screen
            name="players"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "Go Back",
              headerTintColor: "orange",
            }}
          />
          <Stack.Screen
            name="game"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "Go Back",
              headerTintColor: "orange",
            }}
          />
        </Stack>
      </GameProvider>
    </GestureHandlerRootView>
  );
}
