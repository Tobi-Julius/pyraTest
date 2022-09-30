import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    height: layout.heightPixel(120),
    width: layout.widthPixel(140),
    borderColor: theme.gray2,
    borderWidth: 1,
    borderRadius: layout.fontPixel(10),
  },
  groupImage: {
    height: "50%",
    width: "100%",
    borderTopLeftRadius: layout.fontPixel(10),
    borderTopRightRadius: layout.fontPixel(10),
  },
  primaryAccountImage: {
    width: layout.widthPixel(50),
    height: layout.heightPixel(50),
    alignItems: "center",
    alignSelf: "center",
    top: -35,
  },
  textContainer: {
    top: -40,
    alignItems: "center",
    justifyContent: "center",
  },
  memberOf: {
    fontFamily: "OpenSans_600SemiBold",
  },
  totalMembers: {
    fontFamily: "OpenSans_500Medium",
    color: theme.gray2,
  },
});
