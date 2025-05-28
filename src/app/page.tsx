import React from "react";
import { StatusBar } from "react-native";
import tw from "twrnc";
import { WelcomeContent } from "../components/welcome-content";

export default function HomePage() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#66CFD5" />
      <WelcomeContent />
    </>
  );
}
