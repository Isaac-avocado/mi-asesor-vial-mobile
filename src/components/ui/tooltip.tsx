// Tooltip placeholder for React Native
import React from 'react';
import { View, Text } from 'react-native';

export function Tooltip({ children, text }: { children: React.ReactNode; text: string }) {
  // TODO: Implement tooltip for mobile (or use a library)
  return (
    <View>
      {children}
      {/* Tooltip text could appear on long press, etc. */}
      {/* <Text>{text}</Text> */}
    </View>
  );
}
