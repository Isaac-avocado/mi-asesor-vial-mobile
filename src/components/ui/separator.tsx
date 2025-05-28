// Separator for React Native
import React from 'react';
import { View } from 'react-native';

export function Separator({ vertical = false, style }: { vertical?: boolean; style?: any }) {
  return <View style={[vertical ? { width: 1, height: '100%' } : { height: 1, width: '100%' }, { backgroundColor: '#E0E0E0' }, style]} />;
}
