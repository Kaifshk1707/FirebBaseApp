import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const MyTextInput = ({ ...props }) => {
  return (
    <View
      style={{
        height: 50,
        width: "100%",
        justifyContent: "center",
        paddingHorizontal: 10,
        marginBottom: 20,
      }}
    >
      <TextInput style={{ width: "100%", height: 50 }} {...props} />
      <View
        style={{
          width: "100%",
          backgroundColor: "gray",
          height: 1,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({});
