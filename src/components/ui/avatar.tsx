// Adaptación móvil: Avatar para React Native
import React from "react";
import { View, Image, Text } from "react-native";
import tw from "twrnc";

export function Avatar({ uri, fallback, size = 40 }: { uri?: string, fallback?: string, size?: number }) {
  return (
    <View style={[tw`rounded-full bg-gray-200 justify-center items-center`, { width: size, height: size }]}> 
      {uri ? (
        <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
      ) : (
        <Text style={tw`text-lg text-gray-500`}>{fallback || "👤"}</Text>
      )}
    </View>
  );
}
// Puedes mejorar el fallback para mostrar iniciales.
