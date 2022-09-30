import { StyleSheet } from "react-native";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: layout.fontPixel(20),
    width: layout.widthPixel(80),
    height: layout.heightPixel(35),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: layout.pixelSizeVertical(10),
  },
  itemText: {
    fontFamily: "OpenSans_500Medium",
  },
});
