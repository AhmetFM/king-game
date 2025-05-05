import { GameProvider } from "@/providers/game-provider";
import { AntDesign } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import {
  GestureHandlerRootView,
  Pressable,
} from "react-native-gesture-handler";
import "../global.css";

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
              headerBackTitle: "Geri dön",
              headerTintColor: "orange",
            }}
          />
          <Stack.Screen
            name="game"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "Geri dön",
              headerTintColor: "orange",
              headerRight(props) {
                return (
                  <Pressable onPress={() => router.navigate("/table")}>
                    <AntDesign name="table" size={24} color={props.tintColor} />
                  </Pressable>
                );
              },
            }}
          />
          <Stack.Screen
            name="table"
            options={{
              headerTransparent: true,
              headerTitle: "",
              headerBackTitle: "Geri dön",
              headerTintColor: "orange",
            }}
          />
        </Stack>
      </GameProvider>
    </GestureHandlerRootView>
  );
}
