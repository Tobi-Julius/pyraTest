import { ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PostList, HomeHeader } from "../component/primary";
import { theme } from "../constants";
import { data } from "../model";

export const Home = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <SafeAreaView>
        <HomeHeader />
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
      </SafeAreaView>
    </View>
  );
};
