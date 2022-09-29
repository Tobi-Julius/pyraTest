import { View, ScrollView } from "react-native";
import React from "react";
import { PostList } from "../PostList";
import { data } from "../../../model";
import { theme } from "../../../constants";

export const PostBody = () => {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: theme.text,
        }}
      >
        {data.map((item, index) => (
          <PostList
            data={data}
            profile
            key={item.id}
            item={item}
            index={index}
          />
        ))}
      </ScrollView>
    </View>
  );
};
