import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  headerContainer: {
    width: layout.widthPixel(390),
    flexShrink: 1,
  },
  profilPicture: {
    width: layout.widthPixel(60),
    height: layout.heightPixel(60),
  },
  textContainer: {
    marginHorizontal: layout.pixelSizeHorizontal(6),
  },
  groupName: {
    fontFamily: "OpenSans_700Bold",
    color: theme.text2,
    fontSize: layout.size.h3,
    overflow: "scroll",
  },
  location: {
    fontFamily: "OpenSans_500Medium",
    color: theme.gray2,
    fontSize: layout.size.h4,
    marginVertical: layout.pixelSizeVertical(1),
  },
  imageContainer: {
    marginVertical: layout.pixelSizeVertical(14),
    width: layout.width,
    height: layout.heightPixel(250),
  },
  imageUri: {
    width: "100%",
    height: "100%",
  },
  imgText: {
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },
  iconText: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginHorizontal: layout.pixelSizeHorizontal(4),
  },
  text: {
    marginHorizontal: layout.pixelSizeHorizontal(4),
    fontFamily: "OpenSans_500Medium",
  },
  down: {
    transform: [{ rotateX: "180deg" }],
  },
});
