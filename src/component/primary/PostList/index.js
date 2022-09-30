import { View, Image } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { Entypo, Feather, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "../../../constants";
import { globalStyles } from "../../../styles";
import { layout } from "../../../utils";

export const PostList = ({ item, data, index, profile }) => {
  return (
    <View
      style={{
        marginTop: index === 0 ? layout.pixelSizeVertical(1) : 5,
        backgroundColor: "white",
        // marginBottom: !profile
        //   ? data.length === index + 1
        //     ? layout.pixelSizeVertical(140)
        //     : 2
        //   : data.length === index + 1
        //   ? layout.pixelSizeVertical(335)
        //   : 2,
        paddingTop: layout.pixelSizeVertical(13),
      }}
    >
      <View style={{ paddingBottom: layout.pixelSizeVertical(8) }}>
        {/* header */}
        <View style={globalStyles.rowCenter}>
          <View style={[globalStyles.rowBetween, styles.headerContainer]}>
            <View style={styles.imgText}>
              <Image
                resizeMode="cover"
                style={styles.profilPicture}
                source={item.profilePicture}
              />
              <View style={styles.textContainer}>
                <Text
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  textStyle={styles.groupName}
                  text={item.groupName}
                />
                <Text
                  textStyle={styles.location}
                  text={`${item.username} . ${item.time} . ${item.location}`}
                />
              </View>
            </View>
            <Entypo
              name="dots-three-vertical"
              size={24}
              color={theme.iconColor}
            />
          </View>
        </View>
        {/* image  */}
        <View style={styles.imageContainer}>
          <Image
            source={item.imageUri}
            resizeMode="cover"
            style={styles.imageUri}
          />
        </View>

        {/* like, dislike, comment & share  */}

        <View style={[globalStyles.rowCenter]}>
          <View style={styles.headerContainer}>
            <View style={[globalStyles.rowBetween]}>
              <View style={{ flexDirection: "row", flexShrink: 1 }}>
                <View style={styles.iconText}>
                  <Feather name="triangle" size={22} color={theme.iconColor} />
                  <Text textStyle={styles.text} text={item.like} />
                </View>
                <View style={styles.iconText}>
                  <Feather
                    style={styles.down}
                    name="triangle"
                    size={22}
                    color={theme.iconColor}
                  />
                  <Text textStyle={styles.text} text={item.dislike} />
                </View>
                <View style={styles.iconText}>
                  <FontAwesome
                    name="refresh"
                    size={22}
                    color={theme.iconColor}
                  />
                  <Text textStyle={styles.text} text={item.like} />
                </View>
                <View style={styles.iconText}>
                  <FontAwesome5
                    name="comment"
                    size={22}
                    color={theme.iconColor}
                  />
                  <Text textStyle={styles.text} text={item.like} />
                </View>
              </View>

              <Feather name="share-2" size={22} color={theme.iconColor} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
