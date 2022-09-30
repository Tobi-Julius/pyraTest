import { StyleSheet } from "react-native";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  image: {
    width: layout.widthPixel(45),
    height: layout.heightPixel(45),
  },
  container: {
    flexDirection: "row",
    width: layout.widthPixel(390),
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: layout.pixelSizeVertical(10),
    marginBottom: layout.pixelSizeVertical(9),
  },
  HeaderText: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: layout.size.h2,
  },
});
