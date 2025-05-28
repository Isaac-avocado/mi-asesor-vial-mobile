import React, { useState } from "react";
import { View, Text, TextInput, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";
import { Card, CardHeader, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Avatar } from "./ui/avatar";

// Simulación de usuario
const mockUser = {
  username: "UsuarioDemo",
  email: "usuario@demo.com",
  photoURL: undefined,
  createdAt: "2024-01-01T00:00:00.000Z",
};

export default function UserProfileForm() {
  const [username, setUsername] = useState(mockUser.username);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simula guardado
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}> 
      <Card style={tw`max-w-xl mx-auto shadow-xl`}>
        <CardHeader>
          <Text style={tw`text-2xl font-bold text-primary mb-2`}>Perfil de Usuario</Text>
          <Text style={tw`text-gray-500 mb-4`}>Administra la información de tu perfil y tu cuenta.</Text>
        </CardHeader>
        <CardContent>
          <View style={tw`items-center mb-6`}>
            <Avatar uri={mockUser.photoURL} fallback={mockUser.username[0]} size={80} />
            <Text style={tw`mt-2 text-lg font-semibold`}>{mockUser.username}</Text>
            <Text style={tw`text-gray-500`}>{mockUser.email}</Text>
          </View>
          <View style={tw`mb-4`}>
            <Label>Nombre de Usuario</Label>
            <Input value={username} onChangeText={setUsername} />
          </View>
          <View style={tw`mb-4`}>
            <Label>Correo Electrónico</Label>
            <Input value={mockUser.email} editable={false} />
          </View>
          <View style={tw`mb-4`}>
            <Label>Miembro Desde</Label>
            <Input value={new Date(mockUser.createdAt).toLocaleDateString()} editable={false} />
          </View>
          <Button onPress={handleSave} loading={isLoading} style={tw`w-full mt-2`}>
            Guardar Cambios
          </Button>
        </CardContent>
      </Card>
    </View>
  );
}
