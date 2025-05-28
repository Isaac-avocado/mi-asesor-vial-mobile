import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase/config";
import tw from "twrnc";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { TouchableOpacity } from "react-native";

// Define your root stack param list
// (puedes mover esto a un archivo de tipos compartido)
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Dashboard: undefined;
};

export function RegisterForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const handleRegister = async () => {
    setError("");
    if (!auth || !db) {
      setError("No se pudo inicializar la autenticación. Intenta más tarde.");
      return;
    }
    if (username.length < 3) {
      setError("El nombre de usuario debe tener al menos 3 caracteres.");
      return;
    }
    if (!email.includes("@")) {
      setError("Correo electrónico inválido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, { displayName: username });
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          username,
          email,
          createdAt: new Date().toISOString(),
          photoURL: null,
        });
      }
      navigation.navigate("Dashboard");
    } catch (error: any) {
      let errorMessage = "Error al registrar la cuenta.";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Este correo electrónico ya está en uso.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "La contraseña es demasiado débil.";
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
        <ActivityIndicator size="large" color={tw.color("[#0081A7]") || "#0081A7"} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-white`}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={tw`flex-grow items-center justify-center p-4`} keyboardShouldPersistTaps="handled">
        <View style={tw`w-full max-w-md bg-white rounded-xl shadow-xl p-6`}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`absolute top-6 left-6 p-2`}>
            <Text style={tw`text-[#0081A7] text-2xl`}>←</Text>
          </TouchableOpacity>
          <View style={tw`flex flex-col items-center pt-8`}>
            <View style={tw`mb-6 p-5 rounded-full bg-[#E0F7FA]`}>
              <Text style={tw`text-[#0081A7] text-5xl`}>👤</Text>
            </View>
            <Text style={tw`text-3xl font-bold text-[#0081A7] mb-6`}>Bienvenido</Text>
          </View>
          <View style={tw`mb-4`}>
            <Label>Nombre de usuario</Label>
            <Input
              placeholder="Tu nombre de usuario"
              value={username}
              onChangeText={setUsername}
              editable={!isLoading}
            />
          </View>
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
          <View style={tw`mb-4`}>
            <Label>Confirmar Contraseña</Label>
            <Input
              placeholder="••••••••"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              editable={!isLoading}
            />
          </View>
          {error ? <Text style={tw`text-red-500 mb-2 text-center`}>{error}</Text> : null}
          <Button onPress={handleRegister} loading={isLoading} disabled={isLoading} style={tw`w-full mt-2`}>
            Registrarse
          </Button>
          <Button
            onPress={() => navigation.navigate("Login")}
            disabled={isLoading}
            style={tw`w-full mt-4 bg-white border border-primary`}
            textStyle={tw`text-primary font-semibold`}
          >
            Iniciar sesión
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
