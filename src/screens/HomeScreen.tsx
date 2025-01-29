import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";

const HomeScreen = () => {
  const [dishData, setDishData] = useState({});
  const getData = async () => {
    const foodCollection = await firestore().collection("foods").get();
    console.log(foodCollection.docs[0].data());
    setDishData(foodCollection?.docs[0].data());
  };

  // useEffect(() => {
  //   getData();
  // });

  useEffect(() => {
    if (!dishData) {
      getData();
    }
  }, [dishData]);

  console.log("Image URL:", dishData?.image_url);
  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>{dishData?.title ?? "Loading title..."}</Text>
      <Text>{dishData?.price ?? "Loading title..."}</Text>
      <Image
        source={{ uri: dishData.image_url }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
