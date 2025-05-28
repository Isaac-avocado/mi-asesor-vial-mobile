import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase/config";
import tw from "twrnc";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Card, CardHeader, CardContent } from "./ui/card";

// Define your root stack param list
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Dashboard: undefined;
  // ...otros screens
};

export function LoginForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!auth) {
      setIsCheckingAuth(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Dashboard");
      } else {
        setIsCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [navigation]);

  const handleLogin = async () => {
    if (!auth) {
      setError("No se pudo inicializar la autenticación. Intenta más tarde.");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Dashboard");
    } catch (error: any) {
      let errorMessage = "Error al iniciar sesión. Verifica tus credenciales.";
      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password" ||
        error.code === "auth/invalid-credential"
      ) {
        errorMessage = "Correo electrónico o contraseña incorrectos.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "El formato del correo electrónico no es válido.";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (isCheckingAuth) {
    return (
      <View style={tw`flex-1 items-center justify-center bg-white p-4`}>
        <Card>
          <CardHeader>
            <View style={tw`flex flex-col items-center pt-8`}>
              <View style={tw`mb-6 p-5 rounded-full bg-[#E0F7FA]`}>
                <Text style={tw`text-primary text-5xl`}>👤</Text>
              </View>
              <Text style={tw`text-3xl font-bold text-primary mb-6`}>¡Hola de nuevo!</Text>
            </View>
          </CardHeader>
          <CardContent>
            <ActivityIndicator size="large" color={tw.color("primary") || "#0081A7"} />
          </CardContent>
        </Card>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 items-center justify-center bg-white p-4`}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Card style={tw`w-full max-w-md shadow-xl p-0`}>
        <CardHeader>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-6 left-6 p-2`}>
            <Text style={tw`text-primary text-2xl`}>←</Text>
          </TouchableOpacity>
          <View style={tw`flex flex-col items-center pt-8`}>
            <View style={tw`mb-6 p-5 rounded-full bg-[#E0F7FA]`}>
              <Text style={tw`text-primary text-5xl`}>👤</Text>
            </View>
            <Text style={tw`text-3xl font-bold text-primary mb-6`}>¡Hola de nuevo!</Text>
          </View>
        </CardHeader>
        <CardContent>
          <View style={tw`mb-4`}>
            <Label>Correo electrónico</Label>
            <Input
              placeholder="tu@correo.com"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              editable={!isLoading}
            />
          </View>
          <View style={tw`mb-4`}>
            <Label>Contraseña</Label>
            <Input
              placeholder="••••••••"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              editable={!isLoading}
            />
          </View>
          {error ? <Text style={tw`text-red-500 mb-2 text-center`}>{error}</Text> : null}
          <Button onPress={handleLogin} loading={isLoading} disabled={isLoading} style={tw`w-full mt-2`}>
            Iniciar
          </Button>
          <Button
            onPress={() => navigation.navigate("Register")}
            disabled={isLoading}
            style={tw`w-full mt-4 bg-white border border-primary`}
            textStyle={tw`text-primary font-semibold`}
          >
            Registrarse
          </Button>
          <TouchableOpacity
            style={tw`mt-6 items-center`}
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text style={tw`text-sm text-primary underline`}>¿Olvidaste la contraseña?</Text>
          </TouchableOpacity>
        </CardContent>
      </Card>
    </KeyboardAvoidingView>
  );
}
