import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const SocialMedia = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Image
        style={styles.Imagestyle}
        source={require("./../assets/SocialMediaIcons/google.png")}
      />
      <Image
        style={(styles.Imagestyle, { height: 50, width: 50, marginTop: "5%" })}
        source={require("./../assets/SocialMediaIcons/twitter.png")}
      />
      <Image
        style={styles.Imagestyle}
        source={require("./../assets/SocialMediaIcons/facebook.png")}
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  Imagestyle: { height: 35, width: 35 },
});
