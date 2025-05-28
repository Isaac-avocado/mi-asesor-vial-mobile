// Toast placeholder for React Native
import React from 'react';
import { View, Text } from 'react-native';

export function Toast({ message }: { message: string }) {
  // TODO: Integrate with a toast library (e.g. react-native-toast-message)
  return (
    <View style={{ backgroundColor: '#0081A7', padding: 12, borderRadius: 8, margin: 8 }}>
      <Text style={{ color: 'white' }}>{message}</Text>
    </View>
  );
}
