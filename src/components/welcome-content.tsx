import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LogoSplashIcon } from "./icons/logo-splash-icon";
import tw from "twrnc";
import type { NavigationProp } from "@react-navigation/native";

// Define your root stack param list
type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ResetPassword: undefined;
  Dashboard: undefined;
  // ...otros screens
};

export function WelcomeContent() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={tw`flex-1 items-center justify-center py-16 bg-white`}>
      <LogoSplashIcon style={tw`w-36 h-36 mb-8`} />
      <Text style={tw`text-4xl font-extrabold tracking-tight mb-3`}>
        Mi Asesor Vial
      </Text>
      <Text style={tw`text-lg text-[#0081A7] max-w-xs mb-12 leading-relaxed text-center`}>
        Conduce con conocimiento, actúa con seguridad.
      </Text>
      <Pressable
        style={({ pressed }) => [
          tw`h-14 px-12 rounded-full bg-[#0081A7] shadow-xl justify-center items-center`,
          pressed ? tw`scale-95` : tw`scale-100`
        ]}
        onPress={() => navigation.navigate("Login")}
        accessibilityRole="button"
      >
        <Text style={tw`text-lg font-semibold text-white`}>Empecemos</Text>
      </Pressable>
    </View>
  );
}
