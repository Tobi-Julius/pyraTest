import { View, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { layout } from "../utils";
import { globalStyles } from "../styles";
import { Text } from "../component/common";
import { styles } from "../component/featured/portHeader/styles";
import { theme } from "../constants";
import { Picker, PortBody } from "../component/primary";
import { portFolio } from "../model";

export const Portfolio = () => {
  const [isId, setIsId] = useState("1");

  const platformsData = [
    {
      id: "1",
      title: "Arts",
    },
    {
      id: "2",
      title: "Crypto",
    },
    {
      id: "3",
      title: "Stocks",
    },
    {
      id: "4",
      title: "Estate",
    },
  ];

  const _idHandler = (id) => {
    setIsId(id);
  };

  return (
    <View
      style={[
        globalStyles.rowCenter,
        {
          paddingVertical: layout.pixelSizeVertical(8),
          backgroundColor: "white",
        },
      ]}
    >
      <View style={{ width: layout.widthPixel(390) }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {platformsData.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.6}
                onPress={() => _idHandler(item.id)}
                style={[
                  {
                    backgroundColor:
                      item.id === isId ? theme.text2 : theme.text,

                    marginRight: platformsData
                      ? layout.pixelSizeHorizontal(20)
                      : 0,
                  },
                  styles.itemContainer,
                ]}
              >
                <Text
                  textStyle={[
                    styles.itemText,

                    {
                      color: item.id === isId ? theme.text : theme.text2,
                    },
                  ]}
                  text={item.title}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Picker />
        <ScrollView showsVerticalScrollIndicator={false}>
          {portFolio.map((item, index) => {
            return (
              <PortBody
                key={item.id}
                index={index}
                item={item}
                portFolio={portFolio}
              />
            );
          })}
          <View style={{ marginTop: layout.widthPixel(60) }} />
        </ScrollView>
      </View>
    </View>
  );
};
