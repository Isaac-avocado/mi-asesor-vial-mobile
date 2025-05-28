// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import HomePage from "./src/app/page";
import { LoginForm } from "./src/components/login-form";
import { RegisterForm } from "./src/components/register-form";
import DashboardPage from "./src/app/dashboard/page";
import ArticleDetailPage from "./src/app/dashboard/article/[slug]/page";
import ProfilePage from "./src/app/dashboard/profile/page";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#66CFD5" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        {/* Agrega aquí más pantallas como Dashboard, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}