import {
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MyButtons from "../components/MyButtons";
import MyTextInput from "../components/MyTextInput";
import SocialMedia from "../components/SocialMedia";

const SignUpScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={{ height: "100%", paddingHorizontal: 20, alignItems: "center" }}
        source={require("./../assets/SocialMediaIcons/background.png")}
      >
        <Image
          source={require("./../assets/food/food.png")}
          style={{
            height: 50,
            width: 90,
            resizeMode: "stretch",
            position: "absolute",
            right: 20,
            top: Platform.OS == "android" ? 20 : 50,
          }}
        />
        <Text
          style={{
            fontSize: 40,
            color: "#ffffff",
            marginTop: Platform.OS == "android" ? 60 : 110,
            fontFamily: "Audiowide-Regular",
          }}
        >
          FatMore
        </Text>
        <View
          style={{
            height: 450,
            width: "100%",
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
            borderRadius: 20,
            paddingHorizontal: 20,
          }}
        >
          <MyTextInput placeholder="Enter Email or User name" />
          <MyTextInput placeholder="Password" secureTextEntry />
          <MyTextInput placeholder="Confirm Password" secureTextEntry />
          <TouchableOpacity
            style={{ alignSelf: "flex-end" }}
            onPress={() => navigation.navigate("SignUpScreen")}
          >
            <Text
              style={{
                alignSelf: "flex-end",
                marginRight: 10,
                color: "#000",
                marginBottom: 15,
                fontFamily: "NovaFlat-Regular",
              }}
            >
              Don't have an account yet?
            </Text>
          </TouchableOpacity>

          <MyButtons
            onPress={() => navigation.navigate("LoginScreen")}
            title={"Sign Up"}
          />
          <Text
            style={{
              fontSize: 20,
              color: "gray",
              marginTop: "6%",
              fontFamily: "NovaFlat-Regular",
            }}
          >
            OR
          </Text>
          <SocialMedia />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
