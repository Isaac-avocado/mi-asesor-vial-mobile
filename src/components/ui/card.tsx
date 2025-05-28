import React from "react";
import { View, ViewProps } from "react-native";
import tw from "twrnc";

export function Card({ children, style, ...props }: ViewProps) {
  return (
    <View style={[tw`rounded-lg border border-gray-200 bg-white shadow-sm p-4`, style]} {...props}>
      {children}
    </View>
  );
}

export function CardHeader({ children, style, ...props }: ViewProps) {
  return (
    <View style={[tw`flex flex-col space-y-2 p-4`, style]} {...props}>
      {children}
    </View>
  );
}

export function CardContent({ children, style, ...props }: ViewProps) {
  return (
    <View style={[tw`p-4 pt-0`, style]} {...props}>
      {children}
    </View>
  );
}
