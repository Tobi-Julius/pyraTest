import { StyleSheet } from "react-native";
import { theme } from "../../../constants";
import { layout } from "../../../utils";

export const styles = StyleSheet.create({
  headerText: {
    fontFamily: "OpenSans_700Bold",
    fontSize: layout.size.h4,
    color: theme.text2,
    marginVertical: layout.pixelSizeVertical(2),
  },
  timeVote: {
    fontFamily: "OpenSans_500Medium",
    fontSize: layout.size.h4,
    color: theme.gray2,
    marginVertical: layout.pixelSizeVertical(2),
  },
});
