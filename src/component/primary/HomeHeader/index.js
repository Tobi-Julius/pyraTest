import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "../../common";
import { globalStyles } from "../../../styles";
import { images, theme } from "../../../constants";
import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={[globalStyles.rowCenter]}>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image source={images.accountImg} style={styles.image} />
          </TouchableOpacity>
          <Text textStyle={styles.HeaderText} text="TownSquare" />
          <Feather name="target" size={32} color={theme.iconColor} />
        </View>
      </View>
    </View>
  );
};
