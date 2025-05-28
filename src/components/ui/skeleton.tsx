import React from "react";
import { View, ViewProps } from "react-native";
import tw from "twrnc";

export function Skeleton({ style, ...props }: ViewProps) {
  return (
    <View style={[tw`bg-gray-200 rounded-md`, style, { height: 20 }]} {...props} />
  );
}
