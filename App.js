import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IndexScreen from "./src/screens/IndexScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "./src/context/BlogContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Index">
      <Stack.Navigator>
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
