import { FlatList, ScrollView, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { PostList, HomeHeader } from "../../component/primary";
import { images, theme } from "../../constants";

export const Home = () => {
  const data = [
    {
      id: 1,
      groupName: "Cryptocurrency Moon Boys",
      username: "Sanjay Shendy",
      time: "10h",
      location: "Delhi",
      post: "Your take on the Terra Luna debacle, as 3 Arrows Capital and Celcius Network are in the red 🔴. ",
      profilePicture: images.profilePicture,
      imageUri: images.postImage,
      like: "47.3k",
      dislike: "",
      repost: "47.3k",
      comment: "47.3k",
    },
    {
      id: 2,
      groupName: "Cryptocurrency Moon Boys",
      username: "Sanjay Shendy",
      time: "10h",
      location: "Delhi",
      post: "Your take on the Terra Luna debacle, as 3 Arrows Capital and Celcius Network are in the red 🔴. ",
      profilePicture: images.profilePicture,
      imageUri: images.postImage,
      like: "47.3k",
      dislike: "",
      repost: "47.3k",
      comment: "47.3k",
    },
    {
      id: 3,
      groupName: "Cryptocurrency Moon Boys",
      username: "Sanjay Shendy",
      time: "10h",
      location: "Delhi",
      post: "Your take on the Terra Luna debacle, as 3 Arrows Capital and Celcius Network are in the red 🔴. ",
      profilePicture: images.profilePicture,
      imageUri: images.postImage,
      like: "47.3k",
      dislike: "",
      repost: "47.3k",
      comment: "47.3k",
    },
    {
      id: 4,
      groupName: "Cryptocurrency Moon Boys",
      username: "Sanjay Shendy",
      time: "10h",
      location: "Delhi",
      post: "Your take on the Terra Luna debacle, as 3 Arrows Capital and Celcius Network are in the red 🔴. ",
      profilePicture: images.profilePicture,
      imageUri: images.postImage,
      like: "47.3k",
      dislike: "",
      repost: "47.3k",
      comment: "47.3k",
    },
  ];
  return (
    <View style={{ backgroundColor: "white" }}>
      <SafeAreaView>
        <HomeHeader />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginBottom: 100,
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
