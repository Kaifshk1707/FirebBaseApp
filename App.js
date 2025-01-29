import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";
import messaging from "@react-native-firebase/messaging";

const Stack = createNativeStackNavigator();

const App = () => {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log("Token :- ", token);
  };

  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="SignUpScreen"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
