import { View, Text } from "react-native";
import React from "react";
import { ProfileDetail, ProfileHeader } from "../../component/featured";

export const Profile = () => {
  return (
    <View>
      <ProfileHeader />
      <ProfileDetail />
    </View>
  );
};
