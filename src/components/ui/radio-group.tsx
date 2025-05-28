// RadioGroup for React Native
import React from 'react';
import { View, Pressable, Text } from 'react-native';
import tw from 'twrnc';

export function RadioGroup({ options, value, onChange }: { options: { label: string; value: string }[]; value: string; onChange: (v: string) => void }) {
  return (
    <View style={tw`flex-row gap-4`}>
      {options.map((opt) => (
        <Pressable key={opt.value} onPress={() => onChange(opt.value)} style={tw`flex-row items-center`}>
          <View style={tw`w-5 h-5 rounded-full border ${value === opt.value ? 'border-primary bg-primary' : 'border-gray-400'}`}>
            {value === opt.value ? <View style={tw`w-3 h-3 m-1 rounded-full bg-white`} /> : null}
          </View>
          <Text style={tw`ml-2`}>{opt.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
