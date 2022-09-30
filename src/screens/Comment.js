import { ScrollView, View } from "react-native";
import React from "react";
import { commentData } from "../model";
import { globalStyles } from "../styles";
import { layout } from "../utils";
import { CommentBody } from "../component/primary";

export const Comment = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={globalStyles.rowCenter}>
        <View style={{ width: layout.widthPixel(390) }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {commentData.map((item, index) => {
              return (
                <CommentBody
                  key={item.id}
                  item={item}
                  index={index}
                  commentData={commentData}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
