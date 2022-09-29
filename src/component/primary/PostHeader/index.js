import { View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Text } from "../../common";
import { layout } from "../../../utils";

export const PostHeader = ({ item, index, memberShipData }) => {
  return (
    <View
      style={{
        marginVertical: layout.pixelSizeVertical(6),
        marginRight:
          memberShipData.length === index + 1
            ? 0
            : layout.pixelSizeHorizontal(16),
      }}
    >
      <View style={styles.contentContainer}>
        <Image
          resizeMode="cover"
          source={item.groupImage}
          style={styles.groupImage}
        />
        <Image
          resizeMode="cover"
          source={item.primaryAccountImage}
          style={styles.primaryAccountImage}
        />
        <View style={styles.textContainer}>
          <Text textStyle={styles.memberOf} text={item.memberOf} />
          <Text textStyle={styles.totalMembers} text={item.totalMembers} />
        </View>
      </View>
    </View>
  );
};
