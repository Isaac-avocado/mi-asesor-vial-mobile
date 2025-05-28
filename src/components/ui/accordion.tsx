// Adaptación móvil: Accordion para React Native
// Puedes usar react-native-collapsible o react-native-animated-accordion
import React from "react";
import { View, Text, TouchableOpacity, LayoutAnimation, Platform, UIManager } from "react-native";
import tw from "twrnc";

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

export function Accordion({ title, children, expanded, onPress }: { title: string, children: React.ReactNode, expanded: boolean, onPress: () => void }) {
  return (
    <View style={tw`mb-2 border-b border-gray-200`}>
      <TouchableOpacity onPress={onPress} style={tw`flex-row justify-between items-center py-4`}>
        <Text style={tw`font-medium text-base`}>{title}</Text>
        <Text style={tw`text-xl`}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>
      {expanded && <View style={tw`py-2`}>{children}</View>}
    </View>
  );
}
// Puedes crear un hook para manejar el estado de expansión en el componente padre.
