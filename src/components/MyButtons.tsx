import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MyButtons = ({ title }) => {
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButtons;

const styles = StyleSheet.create({});
