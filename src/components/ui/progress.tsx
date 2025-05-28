// Progress bar for React Native
import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export function Progress({ value = 0, style }: { value?: number; style?: any }) {
  return (
    <View style={[tw`h-3 w-full bg-gray-200 rounded-full`, style]}>
      <View style={[tw`h-3 bg-primary rounded-full`, { width: `${value}%` }]} />
    </View>
  );
}
