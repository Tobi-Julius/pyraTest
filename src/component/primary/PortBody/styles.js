import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    marginVertical: layout.pixelSizeVertical(15),
  },
  contentContainer: {
    // marginVertical: 13,
  },
  image: {
    width: layout.widthPixel(40),
    height: layout.heightPixel(40),
  },
  imageTextContainer: {
    flexDirection: "row",
  },
  textContainer: {
    marginLeft: layout.widthPixel(10),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: layout.widthPixel(340),
  },
  name: {
    fontFamily: "OpenSans_500Medium",
    fontSize: layout.size.h3,
  },
  acy: {
    fontFamily: "OpenSans_500Medium",
    fontSize: layout.size.h4,
    color: theme.gray2,
  },
  inflation: {
    fontFamily: "OpenSans_500Medium",
    fontSize: layout.size.h4,
    color: "#E25C5C",
  },
});
