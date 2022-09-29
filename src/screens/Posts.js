import { ScrollView, View } from "react-native";
import React from "react";
import { PostBody, PostHeader } from "../component/primary";
import { Text } from "../component/common";
import { layout } from "../utils";
import { globalStyles } from "../styles";
import { memberShipData } from "../model";

export const Posts = () => {
  return (
    <View>
      <View style={[globalStyles.rowCenter]}>
        <View
          style={{
            width: layout.widthPixel(390),
            marginVertical: layout.pixelSizeVertical(5),
          }}
        >
          <Text
            textStyle={{
              fontFamily: "OpenSans_500Medium",
              fontSize: layout.size.h4,
            }}
            text="A member of this blocks"
          />
          <ScrollView
            scrollEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {memberShipData.map((item, index) => (
              <PostHeader
                key={item.id}
                item={item}
                index={index}
                memberShipData={memberShipData}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <PostBody />
    </View>
  );
};
