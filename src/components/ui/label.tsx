import React from "react";
import { Text, TextProps } from "react-native";
import tw from "twrnc";

export function Label({ children, style, ...props }: TextProps) {
  return (
    <Text style={[tw`text-base font-medium mb-1 text-[#0081A7]`, style]} {...props}>
      {children}
    </Text>
  );
}
