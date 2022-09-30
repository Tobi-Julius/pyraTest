import { StyleSheet } from "react-native";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  imageBackgound: {
    width: layout.width,
    height: layout.heightPixel(160),
    paddingVertical: layout.pixelSizeVertical(3),
  },
  imgText: {
    alignItems: "center",
    marginTop: layout.pixelSizeVertical(35),
  },
  text: {
    backgroundColor: "#B4B4B426",
    color: "#fcfcfc",
    fontFamily: "OpenSans_600SemiBold",
    fontSize: layout.size.h2,
    paddingHorizontal: layout.pixelSizeHorizontal(4),
  },
  accountImg: {
    height: layout.heightPixel(70),
    width: layout.widthPixel(70),
    position: "absolute",
    right: layout.pixelSizeHorizontal(15),
    bottom: -layout.pixelSizeVertical(55),
    zIndex: 1,
  },
});
