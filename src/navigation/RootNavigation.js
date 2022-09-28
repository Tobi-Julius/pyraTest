import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { Profile } from "../screens";
import MainBottomTabNavigation from "./MainBottomTabNavigation";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { layout } from "../utils";
import { TouchableOpacity } from "react-native";
import { globalStyles } from "../styles";
import { useNavigation } from "@react-navigation/native";

const Stack = createSharedElementStackNavigator();

const RootNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="MainBottomTabNavigation"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="MainBottomTabNavigation"
        component={MainBottomTabNavigation}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          animationEnabled: true,
          headerTransparent: true,
          headerShown: true,
          gestureEnabled: true,
          animation: "slide_from_right",
          animationDuration: 400,
          animationTypeForReplace: "push",
          gestureEnabled: true,
          customAnimationOnGesture: true,
          headerPressOpacity: 0.7,
          presentation: "card",
          cardStyleInterpolator: ({ current, next }) => {
            const opacity = current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
              extrapolate: "clamp",
            });
            next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                  extrapolate: "clamp",
                })
              : 0;
            return {
              cardStyle: {
                opacity,
              },
            };
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={[
                globalStyles.rowCenter,
                {
                  marginLeft: layout.pixelSizeVertical(12),
                  backgroundColor: "transparent",
                  padding: layout.pixelSizeVertical(10),
                  borderRadius: layout.fontPixel(7),
                },
              ]}
            >
              <Ionicons name="chevron-back" size={22} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
              style={[
                globalStyles.rowCenter,
                {
                  marginRight: layout.pixelSizeVertical(12),
                  backgroundColor: "transparent",
                  padding: layout.pixelSizeVertical(10),
                  borderRadius: layout.fontPixel(7),
                },
              ]}
            >
              <Entypo name="dots-three-vertical" size={22} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
