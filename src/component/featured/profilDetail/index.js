import { TouchableOpacity, View } from "react-native";
import React from "react";
import { Text } from "../../common";
import { globalStyles } from "../../../styles";
import { styles } from "./styles";
import { layout } from "../../../utils";
import { AntDesign, EvilIcons, Feather } from "@expo/vector-icons";
import { theme } from "../../../constants";

export const ProfileDetail = ({
  group,
  groupName,
  following,
  followers,
  members,
  online,
  accountName,
  atAccountName,
}) => {
  return !group ? (
    <View style={{ backgroundColor: "white" }}>
      <View style={[globalStyles.rowCenter]}>
        <View style={styles.container}>
          <View>
            <View
              style={[
                styles.rowContainer,
                {
                  marginBottom: layout.pixelSizeHorizontal(8),
                  marginTop: layout.pixelSizeVertical(5),
                },
              ]}
            >
              <View style={styles.rowContainer}>
                <Text textStyle={styles.varMember} text={following} />
                <Text textStyle={styles.member} text="Following" />
              </View>
              <View
                style={[
                  styles.rowContainer,
                  {
                    marginLeft: layout.pixelSizeHorizontal(16),
                  },
                ]}
              >
                <Text textStyle={styles.varMember} text={followers} />
                <Text textStyle={styles.member} text={"Followers"} />
              </View>
            </View>
          </View>
          <View>
            <Text textStyle={styles.accountName} text={accountName} />
            <Text textStyle={styles.member} text={`@${atAccountName}`} />
          </View>
          <View>
            <Text
              ellipsizeMode={"tail"}
              numberOfLines={2}
              textStyle={styles.content}
              text="An avid invester in tech companies, with a vision of financial freedom"
            />
          </View>
          <View style={styles.linkJoinContainer}>
            <View style={[styles.rowContainer, styles.iconLink]}>
              <Feather color={theme.iconColor} size={18} name="link" />
              <Text textStyle={styles.link} text="pixsellz.io" />
            </View>
            <View style={[styles.rowContainer, styles.iconJoin]}>
              <EvilIcons color={theme.iconColor} size={18} name="calendar" />
              <Text textStyle={styles.join} text="Join September 2018" />
            </View>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconTextContainer}
            >
              <Text textStyle={styles.iconLabel} text="Follow" />
              <AntDesign
                name="addusergroup"
                size={20}
                color={theme.iconColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconTextContainer}
            >
              <Text textStyle={styles.iconLabel} text="Comment" />
              <AntDesign name="message1" size={20} color={theme.iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconTextContainer}
            >
              <Text textStyle={styles.iconLabel} text="Share" />
              <Feather name="share-2" size={20} color={theme.iconColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  ) : (
    <View style={{ backgroundColor: "white" }}>
      <View style={[globalStyles.rowCenter]}>
        <View style={styles.container}>
          <View>
            <View>
              <Text textStyle={styles.groupName} text={groupName} />
            </View>
            <View
              style={[
                styles.rowContainer,
                {
                  marginBottom: layout.pixelSizeHorizontal(10),
                  marginTop: layout.pixelSizeVertical(3),
                },
              ]}
            >
              <View style={styles.rowContainer}>
                <Text textStyle={styles.varMember} text={members} />
                <Text textStyle={styles.member} text="members" />
              </View>
              <View
                style={[
                  styles.rowContainer,
                  { marginLeft: layout.pixelSizeHorizontal(16) },
                ]}
              >
                <Text textStyle={styles.varMember} text={online} />
                <Text textStyle={styles.member} text="online" />
              </View>
            </View>
          </View>
          <View>
            <Text
              textStyle={styles.content}
              text="An avid invester in tech companies, with a vision of financial freedom"
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconTextContainer}
            >
              <Text textStyle={styles.iconLabel} text="Join" />
              <AntDesign
                name="addusergroup"
                size={20}
                color={theme.iconColor}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconTextContainer}
            >
              <Text textStyle={styles.iconLabel} text="Notify" />
              <AntDesign name="message1" size={20} color={theme.iconColor} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.iconTextContainer}
            >
              <Text textStyle={styles.iconLabel} text="Share" />
              <Feather name="share-2" size={20} color={theme.iconColor} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
