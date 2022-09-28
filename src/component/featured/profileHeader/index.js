import { Image, ImageBackground, View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { images } from "../../../constants";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileHeader = () => {
  return (
    <View>
      <ImageBackground source={images.background} style={styles.imageBackgound}>
        <SafeAreaView>
          <View style={styles.imgText}>
            <Text textStyle={styles.text} text="Digital Goodies Team" />
          </View>
        </SafeAreaView>
      </ImageBackground>
      <Image source={images.accountImg} style={styles.accountImg} />
    </View>
  );
};
