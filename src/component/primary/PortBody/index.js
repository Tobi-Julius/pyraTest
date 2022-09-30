import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "../../common";
import { styles } from "./styles";
import { layout } from "../../../utils";
import { useNavigation } from "@react-navigation/native";

export const PortBody = ({ portFolio, index, item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TopNavigationGroup")}
      activeOpacity={0.6}
      style={[
        styles.container,
        {
          marginBottom:
            portFolio.length === index + 1
              ? layout.pixelSizeVertical(48)
              : layout.pixelSizeVertical(10),
        },
      ]}
    >
      <View style={styles.imageTextContainer}>
        <Image resizeMode="cover" source={item.iconUrl} style={styles.image} />
        <View style={styles.textContainer}>
          <View>
            <Text textStyle={styles.name} text={item.name} />
            <Text textStyle={styles.acy} text={item.acy} />
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text textStyle={styles.name} text={item.price} />
            <Text textStyle={styles.inflation} text={item.inflation} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
