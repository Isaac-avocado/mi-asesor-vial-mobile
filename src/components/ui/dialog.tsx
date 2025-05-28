// Dialog placeholder for React Native
import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import tw from 'twrnc';

export function Dialog({ visible, onClose, title, children }: { visible: boolean; onClose: () => void; title?: string; children: React.ReactNode }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={tw`flex-1 items-center justify-center bg-black/60`}>
        <View style={tw`bg-white rounded-xl p-6 w-11/12 max-w-md`}>
          {title ? <Text style={tw`text-lg font-bold mb-2`}>{title}</Text> : null}
          {children}
          <Pressable style={tw`mt-4`} onPress={onClose}>
            <Text style={tw`text-primary text-center`}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
