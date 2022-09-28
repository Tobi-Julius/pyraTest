import React from "react";
import { TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles";
import { Text } from "./Text";

export const Button = ({
  title,
  onPress,
  textStyle,
  containerStyle,
  ...others
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[globalStyles.rowCenter, containerStyle]}
      onPress={onPress}
      {...others}
    >
      <Text text={title} style={[textStyle]} />
    </TouchableOpacity>
  );
};
