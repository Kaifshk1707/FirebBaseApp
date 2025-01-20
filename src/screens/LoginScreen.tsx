import {
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  View,
  Text,
} from "react-native";
import React from "react";
import MyButtons from "../components/MyButtons";

const LoginScreen = () => {
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
          }}
        >
          <MyButtons title={"Login"} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
