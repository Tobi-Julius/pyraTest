import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  container: {
    width: layout.widthPixel(390),
    marginVertical: layout.pixelSizeVertical(5),
  },
  groupName: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: layout.fontPixel(21),
  },
  accountName: {
    fontFamily: "OpenSans_800ExtraBold",
    fontSize: layout.fontPixel(21),
    marginTop: layout.pixelSizeVertical(5),
  },
  varMember: {
    fontFamily: "OpenSans_500Medium",
  },
  member: {
    fontFamily: "OpenSans_500Medium",
    color: theme.gray2,
    marginLeft: layout.pixelSizeHorizontal(2.5),
  },
  rowContainer: {
    flexDirection: "row",
  },
  content: {
    fontFamily: "OpenSans_500Medium",
    color: theme.text2,
    fontSize: layout.size.h3,
    marginVertical: layout.pixelSizeVertical(8),
  },
  link: {
    color: theme.link,
    fontFamily: "OpenSans_500Medium",
    marginLeft: layout.pixelSizeHorizontal(5),
  },
  join: {
    color: theme.gray2,
    fontFamily: "OpenSans_500Medium",
    marginLeft: layout.pixelSizeHorizontal(5),
  },
  linkJoinContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconJoin: {
    alignItems: "center",
    marginLeft: layout.pixelSizeHorizontal(10),
  },
  iconLink: {
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: layout.pixelSizeVertical(20),
    flexWrap: "wrap",
  },
  iconTextContainer: {
    flexDirection: "row",
    borderColor: theme.gray1,
    borderWidth: layout.fontPixel(1.5),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: layout.pixelSizeHorizontal(14),
    paddingVertical: layout.pixelSizeVertical(4),
    borderRadius: layout.fontPixel(10),
  },
  iconLabel: {
    fontFamily: "OpenSans_600SemiBold",
    marginRight: layout.pixelSizeHorizontal(3),
  },
});
