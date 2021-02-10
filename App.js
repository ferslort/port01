import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Carrusel from "./App/screens/Carrusel";
import AppLoading from "expo-app-loading";
import * as Fonts from "expo-font";

const Stack = createStackNavigator();

export default function App() {
  const [load, setLoad] = useState(false);

  const fetchFonts = Fonts.loadAsync({
    robotoBlack: require("./assets/fonts/Roboto-Black.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    robotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    robotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    robotoLigth: require("./assets/fonts/Roboto-Light.ttf"),
  });

  if (!load) {
    return (
      <AppLoading
        startAsync={() => fetchFonts}
        onFinish={() => setLoad(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="carousel"
          component={Carrusel}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
