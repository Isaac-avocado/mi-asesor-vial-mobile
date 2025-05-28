// Toaster placeholder for React Native
import React from 'react';
import { View, Text } from 'react-native';

export function Toaster() {
  // TODO: Integrate with a toast provider (e.g. react-native-toast-message)
  return (
    <View style={{ position: 'absolute', top: 40, left: 0, right: 0, alignItems: 'center', zIndex: 9999 }}>
      {/* Toasts will appear here */}
      <Text style={{ color: '#0081A7' }}>Toaster (próximamente)</Text>
    </View>
  );
}
