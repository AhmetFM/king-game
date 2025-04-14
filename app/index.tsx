import BackgroundContainer from "@/components/background-container";
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <BackgroundContainer>
      <View>
        <Text className="text-5xl text-white font-bold uppercase border-b pb-4 border-white">
          King Game
        </Text>
        <View className="flex flex-col gap-6 mt-14 items-center justify-center">
          <TouchableOpacity className="border border-white flex items-center justify-center rounded-xl w-[160px] bg-white/25">
            <Text className="text-2xl text-white py-4 px-6 rounded-xl font-medium">
              Play Game
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-white flex items-center justify-center rounded-xl w-[160px] bg-white/25"
            onPress={() => router.push("/modal")}
          >
            <Text className="text-2xl text-white py-4 px-6 rounded-xl font-medium">
              How To Play
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundContainer>
  );
}
