import React from "react";
import { NavigationContainer as MainNavigation } from "@react-navigation/native";
import RootNavigation from "./RootNavigation";

const NavigationContainer = () => {
  return (
    <MainNavigation>
      <RootNavigation />
    </MainNavigation>
  );
};

export default NavigationContainer;
