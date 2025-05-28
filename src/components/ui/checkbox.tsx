// Checkbox for React Native
import React from 'react';
import { Pressable, View } from 'react-native';
import tw from 'twrnc';

export function Checkbox({ checked, onChange, disabled }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <Pressable
      style={tw`w-5 h-5 border rounded bg-white items-center justify-center ${checked ? 'border-primary bg-primary' : 'border-gray-400'}`}
      onPress={() => !disabled && onChange(!checked)}
      disabled={disabled}
    >
      {checked ? <View style={tw`w-3 h-3 bg-white rounded`} /> : null}
    </Pressable>
  );
}
