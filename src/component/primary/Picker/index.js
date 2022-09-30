import { View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "../../../constants";
import { styles } from "./styles";

export const Picker = () => {
  return (
    <View>
      <View style={styles.textIconContainer}>
        <Text textStyle={styles.text} text="recent" />
        <MaterialIcons
          name="keyboard-arrow-down"
          size={20}
          color={theme.iconColor}
        />
      </View>
    </View>
  );
};
