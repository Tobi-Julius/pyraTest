import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  imageBackgound: {
    height: layout.heightPixel(190),
    width: layout.width,
    paddingVertical: layout.pixelSizeVertical(3),
  },
  imgText: {
    alignItems: "center",
    marginTop: layout.pixelSizeVertical(50),
  },
  text: {
    backgroundColor: theme.text2,
    color: theme.text,
    fontFamily: "OpenSans_600SemiBold",
    fontSize: layout.size.h2,
    paddingHorizontal: layout.pixelSizeHorizontal(4),
  },
  accountImg: {
    position: "absolute",
    right: layout.pixelSizeHorizontal(20),
    bottom: -layout.pixelSizeVertical(57),
  },
});
