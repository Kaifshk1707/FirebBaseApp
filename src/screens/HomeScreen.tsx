import { Text, View, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#333",
          marginBottom: 10,
        }}
      >
        Welcome to HomeScreen
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#666",
          textAlign: "center",
          marginBottom: 30,
          paddingHorizontal: 20,
        }}
      >
        This is the main page of your application.
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          paddingVertical: 12,
          paddingHorizontal: 25,
          borderRadius: 8,
        }}
        // onPress={() => navigation.navigate("SignUpScreen")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Go to Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
