import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feed, Home, Notification, Post, Search } from "../screens";
import { theme } from "../constants";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { layout } from "../utils";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const PostTab = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: layout.widthPixel(100),
        marginBottom: layout.pixelSizeVertical(5),
      }}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const MainBottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: theme.gray1,
        tabBarInactiveTintColor: theme.iconColor,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          height: layout.heightPixel(60),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={layout.fontPixel(28)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={layout.fontPixel(28)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
              size={layout.fontPixel(42)}
            />
          ),
          tabBarButton: (props) => <PostTab {...props} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              color={color}
              size={layout.fontPixel(28)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "disc" : "disc-outline"}
              color={color}
              size={layout.fontPixel(28)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabNavigation;
