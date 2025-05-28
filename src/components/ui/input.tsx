import React from "react";
import { TextInput, TextInputProps } from "react-native";
import tw from "twrnc";

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={tw`flex h-12 w-full rounded-md border border-[#0081A7] bg-white px-3 py-2 text-base`}
      placeholderTextColor="#888"
      {...props}
    />
  );
}
