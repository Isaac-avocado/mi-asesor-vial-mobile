// Tabs for React Native
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import tw from 'twrnc';

export function Tabs({ tabs, initialTab = 0 }: { tabs: { label: string; content: React.ReactNode }[]; initialTab?: number }) {
  const [active, setActive] = useState(initialTab);
  return (
    <View>
      <View style={tw`flex-row mb-2`}>
        {tabs.map((tab, i) => (
          <Pressable key={tab.label} onPress={() => setActive(i)} style={tw`px-4 py-2 ${active === i ? 'border-b-2 border-primary' : ''}`}>
            <Text style={tw`${active === i ? 'text-primary font-bold' : 'text-gray-500'}`}>{tab.label}</Text>
          </Pressable>
        ))}
      </View>
      <View>{tabs[active]?.content}</View>
    </View>
  );
}
