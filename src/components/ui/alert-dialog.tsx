// Adaptación móvil: AlertDialog para React Native
// Usa Modal de react-native y componentes personalizados
import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

export function AlertDialog({ visible, title, description, onCancel, onConfirm }: { visible: boolean, title: string, description?: string, onCancel: () => void, onConfirm: () => void }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={tw`flex-1 justify-center items-center bg-black/60`}>
        <View style={tw`bg-white rounded-xl p-6 w-80 max-w-full`}>
          <Text style={tw`text-lg font-bold mb-2`}>{title}</Text>
          {description ? <Text style={tw`mb-4 text-base`}>{description}</Text> : null}
          <View style={tw`flex-row justify-end gap-2`}>
            <TouchableOpacity onPress={onCancel} style={tw`px-4 py-2 rounded bg-gray-200`}><Text>Cancelar</Text></TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={tw`px-4 py-2 rounded bg-primary`}><Text style={tw`text-white`}>Aceptar</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
// Puedes extender este componente para mayor flexibilidad.
