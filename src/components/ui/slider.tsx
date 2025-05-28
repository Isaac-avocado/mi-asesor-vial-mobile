// Slider for React Native
import React from 'react';
import { View, Text } from 'react-native';
// TODO: Use @react-native-community/slider for real implementation

export function Slider({ value = 0, onValueChange }: { value?: number; onValueChange?: (v: number) => void }) {
  // Placeholder visual
  return (
    <View style={{ width: '100%', padding: 8 }}>
      <Text style={{ color: '#0081A7' }}>Slider (próximamente)</Text>
    </View>
  );
}
