import { View, ScrollView } from "react-native";
import React from "react";
import { PostList } from "../PostList";
import { data } from "../../../model";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const PostBody = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: theme.text,
      }}
    >
      {data.map((item, index) => (
        <PostList data={data} profile key={item.id} item={item} index={index} />
      ))}
      <View style={{ marginTop: layout.heightPixel(160) }} />
    </ScrollView>
  );
};
