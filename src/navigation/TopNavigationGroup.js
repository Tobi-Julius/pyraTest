import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Group, CrowdFunds, Echoes, GroupPost } from "../screens";
import { theme } from "../constants";
import { layout } from "../utils";
const TopTab = createMaterialTopTabNavigator();

export const TopNavigationGroup = () => {
  return (
    <>
      <Group />
      <TopTab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          tabBarItemStyle: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarStyle: {
            backgroundColor: "white",
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
            fontFamily: "OpenSans_700Bold",
            fontSize: layout.size.h4,
            textTransform: "capitalize",
          },
          tabBarPressColor: theme.text,
        }}
      >
        <TopTab.Screen name="Posts" component={GroupPost} />
        <TopTab.Screen name="Echoes" component={Echoes} />
        <TopTab.Screen name="CrowdFunds" component={CrowdFunds} />
      </TopTab.Navigator>
    </>
  );
};
