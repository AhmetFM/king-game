import BackgroundContainer from "@/components/background-container";
import { useRouter } from "expo-router";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <BackgroundContainer>
      <View>
        <Text className="text-5xl text-[#e8b923] font-bold uppercase border-b pb-4 border-[#e8b923]">
          King Oyunu
        </Text>
        <View className="flex flex-col gap-6 mt-14 items-center justify-center">
          <TouchableOpacity
            onPress={() => router.push("/players")}
            className="border border-white/25 flex items-center justify-center rounded-xl w-[160px] bg-amber-500/50 shadow-lg"
          >
            <Text className="text-2xl text-orange-900 py-4 px-6 rounded-xl font-medium">
              Oyunu oyna
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border border-amber-300/30 flex items-center justify-center rounded-xl w-[160px] bg-orange-800 shadow-lg"
            onPress={() => router.push("/modal")}
          >
            <Text className="text-xl text-[#e8b923] py-4 px-6 rounded-xl font-medium">
              Nasıl Oynanır
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundContainer>
  );
}
