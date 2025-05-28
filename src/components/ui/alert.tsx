// Adaptación móvil: Alert para React Native
import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

export function Alert({ variant = "default", title, description }: { variant?: "default" | "destructive", title: string, description?: string }) {
  return (
    <View style={tw`w-full rounded-lg border p-4 mb-2 ${variant === "destructive" ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"}`}> 
      <Text style={tw`font-medium mb-1 ${variant === "destructive" ? "text-red-600" : "text-gray-800"}`}>{title}</Text>
      {description ? <Text style={tw`text-sm text-gray-600`}>{description}</Text> : null}
    </View>
  );
}
// Puedes agregar íconos o variantes según necesidad.
