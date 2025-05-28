// Adaptación móvil: Badge para React Native
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

export function Badge({ children, variant = "default" }: { children: React.ReactNode, variant?: "default" | "secondary" | "destructive" | "outline" }) {
  let style = "bg-primary text-white border-transparent";
  if (variant === "secondary") style = "bg-gray-200 text-gray-800 border-transparent";
  if (variant === "destructive") style = "bg-red-500 text-white border-transparent";
  if (variant === "outline") style = "bg-transparent text-gray-800 border-gray-300";
  return (
    <View style={tw`px-3 py-1 rounded-full border ${style}`}>
      <Text style={tw`text-xs font-semibold`}>{children}</Text>
    </View>
  );
}
