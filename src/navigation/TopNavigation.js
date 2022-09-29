import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Posts, Comment, Portfolio, Profile } from "../screens";
import { theme } from "../constants";
import { layout } from "../utils";
const TopTab = createMaterialTopTabNavigator();

export const TopNavigation = () => {
  return (
    <>
      <Profile />
      <TopTab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          tabBarItemStyle: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            borderBottomColor: theme.text,
            borderBottomWidth: 1,
          },
          tabBarIndicatorStyle: {
            border: 1,
            borderColor: theme.gray1,
            borderWidth: 1,
          },
          tabBarLabelStyle: {
            fontFamily: "OpenSans_500Medium",
            fontSize: layout.size.h4,
            textTransform: "capitalize",
          },
          tabBarPressColor: theme.text,
        }}
      >
        <TopTab.Screen name="Posts" component={Posts} />
        <TopTab.Screen name="Comments" component={Comment} />
        <TopTab.Screen name="Portfolio" component={Portfolio} />
      </TopTab.Navigator>
    </>
  );
};
