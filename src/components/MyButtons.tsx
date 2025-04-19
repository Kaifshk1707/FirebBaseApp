import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButtons = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0036",
        borderRadius: 30,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#ffffff",
          fontSize: 20,
          fontFamily: "NovaFlat-Regular",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6200EE",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default MyButtons;
