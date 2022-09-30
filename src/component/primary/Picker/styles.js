import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  textIconContainer: {
    marginTop: layout.pixelSizeVertical(20),
    borderWidth: 1,
    borderColor: theme.gray1,
    paddingVertical: layout.pixelSizeVertical(4),
    borderRadius: layout.fontPixel(20),
    width: layout.widthPixel(100),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "OpenSans_400Regular",
    marginRight: layout.pixelSizeHorizontal(4),
  },
});
