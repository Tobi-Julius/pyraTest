import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Posts, Comment, Portfolio } from "../screens";

const TopTab = createMaterialTopTabNavigator();

export const TopNavigation = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Posts"
      screenOptions={{ headerShown: false }}
    >
      <TopTab.Screen name="Posts" component={Posts} />
      <TopTab.Screen name="Comment" component={Comment} />
      <TopTab.Screen name="Portfolio" component={Portfolio} />
    </TopTab.Navigator>
  );
};
