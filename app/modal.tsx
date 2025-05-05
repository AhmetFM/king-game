import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HowToPlayModal = () => {
  return (
    <ScrollView className="flex-1 bg-zinc-700 p-4">
      <Text className="text-2xl font-bold mb-4  text-white">
        🃏 Nasıl Oynanır?
      </Text>

      <Text className="text-base  text-white mb-2">
        Oyun, farklı kurallara sahip 7 turdan oluşur. Her turda oyuncular
        belirli bir hedefe ulaşmaya çalışır. Hedefe ulaşıp ulaşmadıklarına göre
        puan kazanılır veya ceza alınır.
      </Text>

      {/* KOZ */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-blue-400">1. Koz</Text>
        <Text className=" text-white">Amaç: En fazla eli almaktır.</Text>
        <Text className="text-green-600">
          +50 puan / el (maksimum 650 puan)
        </Text>
      </View>

      {/* EL ALMAZ */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-orange-400">
          2. El Almaz
        </Text>
        <Text className=" text-white">
          Amaç: Hiç el almamaktır. En büyük kart eli alır.
        </Text>
        <Text className="text-orange-400">
          -50 puan / el (maksimum -650 puan)
        </Text>
      </View>

      {/* KUPA ALMAZ */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-orange-400">
          3. Kupa Almaz
        </Text>
        <Text className=" text-white">
          Amaç: Kupa serisinden hiç kart almamaktır.
        </Text>
        <Text className="text-orange-400">
          -30 puan / kupa (maksimum -390 puan)
        </Text>
      </View>

      {/* KIZ ALMAZ */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-orange-400">
          4. Kız Almaz
        </Text>
        <Text className=" text-white">Amaç: Hiç kız (Q) kartı almamaktır.</Text>
        <Text className="text-orange-400">
          -100 puan / kız (maksimum -400 puan)
        </Text>
      </View>

      {/* ERKEK ALMAZ */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-orange-400">
          5. Erkek Almaz
        </Text>
        <Text className=" text-white">
          Amaç: Papaz (K) ve Vale (J) almamaktır.
        </Text>
        <Text className="text-orange-400">
          -60 puan / erkek (maksimum -480 puan)
        </Text>
      </View>

      {/* SON İKİ */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-orange-400">
          6. Son İki
        </Text>
        <Text className=" text-white">Amaç: Son iki eli almamaktır.</Text>
        <Text className="text-orange-400">
          -180 puan / el (maksimum -360 puan)
        </Text>
      </View>

      {/* RIFKI */}
      <View className="mb-6">
        <Text className="text-xl font-semibold text-orange-400">7. Rıfkı</Text>
        <Text className=" text-white">Amaç: Kupa Papazı’nı almamaktır.</Text>
        <Text className="text-orange-400">-320 puan (tek kart)</Text>
      </View>

      <Text className="text-base  text-white">
        Her turun sonunda oyuncuların puanları hesaplanır. En yüksek toplam
        puanı toplayan oyuncu kazanır.
      </Text>
    </ScrollView>
  );
};

export default HowToPlayModal;
