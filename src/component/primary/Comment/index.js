import { View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { layout } from "../../../utils";

export const CommentBody = ({ commentData, item, index }) => {
  return (
    <View>
      <View
        style={{
          marginBottom:
            commentData.length === index + 1
              ? layout.pixelSizeHorizontal(18)
              : layout.pixelSizeVertical(5),
        }}
      >
        <Text textStyle={styles.headerText} text={item.headerText} />
        <Text
          textStyle={styles.timeVote}
          text={`${item.text} . ${item.time} . ${item.vote}`}
        />
        <Text textStyle={styles.timeVote} text={item.subText} />
      </View>
    </View>
  );
};
