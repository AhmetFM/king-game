import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Asset } from "expo-asset";

const BackgroundContainer = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const loadBackground = async () => {
      await Asset.fromModule(
        require("../assets/images/background-image.png")
      ).downloadAsync();
      setIsReady(true);
    };
    loadBackground();
  }, []);

  if (!isReady) {
    return (
      <View className="bg-orange-500 flex-1 flex items-center justify-center">
        <ActivityIndicator size="large" color="#" />
      </View>
    );
  }

  return (
    <ImageBackground
      resizeMode="cover"
      fadeDuration={0}
      className="flex-1 flex items-center justify-center w-full h-screen bg-orange-500"
      source={require("../assets/images/background-image.png")}
    >
      <View className="bg-black absolute flex-1 w-full h-full opacity-30" />
      <SafeAreaView className="flex items-center justify-center flex-1">
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BackgroundContainer;
