import { View } from "react-native";
import React from "react";
import { ProfileHeader, ProfileDetail } from "../component/featured";
import { images } from "../constants";

export const Group = () => {
  return (
    <View>
      <ProfileHeader backgroundImage={images.postImage} />
      <ProfileDetail
        group
        groupName={"Digital Cryptocurrency"}
        members={"2,174,590"}
        online={"11,800"}
      />
    </View>
  );
};
