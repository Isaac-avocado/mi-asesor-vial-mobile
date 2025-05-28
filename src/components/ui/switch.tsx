// Switch for React Native
import React from 'react';
import { Switch as RNSwitch } from 'react-native';

export function Switch({ value, onValueChange, disabled }: { value: boolean; onValueChange: (v: boolean) => void; disabled?: boolean }) {
  return <RNSwitch value={value} onValueChange={onValueChange} disabled={disabled} />;
}
