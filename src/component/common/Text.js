import React from "react";
import { Text as MainText } from "react-native";

export const Text = ({
  text,
  color,
  textAlign,
  textStyle,
  letterSpacing,
  ellipsizeMode,
  numberOfLines,
  ...others
}) => {
  return (
    <MainText
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[color, textStyle]}
      {...others}
    >
      {text}
    </MainText>
  );
};
