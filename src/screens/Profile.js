import { View } from "react-native";
import React from "react";
import { ProfileDetail, ProfileHeader } from "../component/featured";
import { images } from "../constants";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

export const Profile = () => {
  return (
    <View>
      <ProfileHeader backgroundImage={images.background} />
      <ProfileDetail
        accountName="Pixsellz"
        atAccountName="pixsellz"
        followers={118}
        following={217}
      />
    </View>
  );
};
