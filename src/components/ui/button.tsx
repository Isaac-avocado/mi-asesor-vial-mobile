import React from "react";
import { Pressable, Text, ActivityIndicator, ViewStyle, TextStyle } from "react-native";
import tw from "twrnc";

export interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export function Button({ onPress, children, loading, disabled, style, textStyle }: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        tw`h-12 px-6 rounded-full bg-[#0081A7] justify-center items-center`,
        pressed ? tw`opacity-80` : tw`opacity-100`,
        disabled ? tw`opacity-50` : null,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      accessibilityRole="button"
    >
      {loading ? (
        <ActivityIndicator color={textStyle?.color || "#fff"} />
      ) : (
        <Text style={[tw`text-lg font-semibold`, textStyle && textStyle.color ? textStyle : { color: "#fff" }, textStyle]}>{children}</Text>
      )}
    </Pressable>
  );
}
