// Textarea for React Native
import React from 'react';
import { TextInput } from 'react-native';
import tw from 'twrnc';

export const Textarea = React.forwardRef<TextInput, React.ComponentProps<typeof TextInput>>((props, ref) => (
  <TextInput
    ref={ref}
    multiline
    numberOfLines={4}
    style={tw`min-h-20 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base`}
    {...props}
  />
));
