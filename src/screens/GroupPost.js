import { View, ScrollView } from "react-native";
import React from "react";
import { data } from "../model";
import { PostList } from "../component/primary";
import { theme } from "../constants";

export const GroupPost = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: theme.text,
        }}
      >
        {data.map((item, index) => (
          <PostList data={data} key={item.id} item={item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};
