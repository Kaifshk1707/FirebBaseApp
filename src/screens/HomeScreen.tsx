import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Button,
  Image,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import Category from "../components/Category";
import FoodCard from "../components/FoodCard";

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [foods, setFoods] = useState([]);
  const [dishData, setDishData] = useState(null);

  useEffect(() => {
    const fetchDishData = async () => {
      const foodCollection = await firestore().collection("foods").get();
      if (!foodCollection.empty) {
        setDishData(foodCollection.docs[0].data());
      }
    };
    fetchDishData();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection("catogries")
      .onSnapshot((querySnapshot) => {
        const categories = [];
        querySnapshot.forEach((documentSnapshot) => {
          categories.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setCategories(categories);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  useEffect(() => {
    const subscriber = firestore()
      .collection("foods")
      .onSnapshot((res) => {
        const foods = [];
        res.forEach((documentSnapshot) => {
          foods.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setFoods(foods);
      });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={{ backgroundColor: "#f7f6ff", padding: 20 }}>
      <Text style={{ marginTop: 57, marginBottom: 7, fontSize: 19 }}>
        Choose the
      </Text>
      <Text style={{ fontSize: 19, marginBottom: 13, fontWeight: "bold" }}>
        Food You Love
      </Text>
      <TextInput
        placeholder="Search"
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 8,
        }}
      />
      <Text style={{ fontSize: 19, marginBottom: 13 }}>Categories</Text>

      {/* <Button
        title="Add Category Or Foods"
        onPress={() => navigation.navigate("AddFoodOrCategory")}
      /> */}

      <View style={{ height: 150 }}>
        <ScrollView
          style={{ height: 150, marginTop: 10 }}
          showsHorizontalScrollIndicator={false}
          horizontal
        >
          <Category
            title={"K F C"}
            image={require("./../assets/food/KFC.png")}
            itemKey={""}
          />
          <Category
            title={"FrenchFries"}
            image={require("./../assets/food/frenchFries.png")}
            itemKey={""}
          />
          <Category
            title={"FrenchFries"}
            image={require("./../assets/food/piza.png")}
            itemKey={""}
          />
          <Category
            title={"Combo Meal"}
            image={require("./../assets/food/food.png")}
            itemKey={""}
          />

          {/* <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <Category
              title={item.title}
              itemKey={item.key}
              image={{ uri: item.imageURL }}
            />
          )}
        /> */}
        </ScrollView>
      </View>
      {/* <Text style={{ fontSize: 19, marginBottom: 13 }}>Main Dishes</Text>
      <FlatList
        horizontal
        data={foods}
        renderItem={({ item }) => (
          <FoodCard
            image={item.imageURL}
            title={item.title}
            price={item.price}
            itemKey={item.key}
          />
        )}
      /> */}
      {/* {dishData && (
        <View style={{ marginTop: 20, alignItems: "center", padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {dishData.title}
          </Text>
          <Text style={{ fontSize: 16, color: "#666" }}>
            Price: ${dishData.price}
          </Text>
          <Image
            source={{ uri: dishData.image_url }}
            style={{ width: 100, height: 100, borderRadius: 10, marginTop: 10 }}
          />
        </View>
      )} */}
    </View>
  );
}

export default HomeScreen;
