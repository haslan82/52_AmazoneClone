import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";

const SubHeader = () => {
  return (
    <View>
      <LinearGradient
        style={styles.container}
        colors={["#bbe8ef", "#bbeee9", "#c3f1e3"]}
      >
        <Feather name="map-pin" size={16} color="black" />

        <Text style={styles.text}>Delive to Turkey - 232455</Text>
        <SimpleLineIcons name="arrow-down" size={16} color="black" />
      </LinearGradient>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: "row",
    justifyContent: "space-start",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    paddingHorizontal: 6,
    color: "#2c4341",
  },
});
