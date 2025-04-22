import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const BackgroundContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground
      className="flex-1 flex items-center justify-center w-full h-screen"
      source={require("../assets/images/background-image.png")}
    >
      <View className="bg-black absolute flex-1 w-full h-full opacity-25" />
      <SafeAreaView className="flex items-center justify-center flex-1">
        {children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default BackgroundContainer;
