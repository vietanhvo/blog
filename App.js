import React from "react";
import { View, Text, StyleSheet } from "react-native";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "./src/context/BlogContext";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer initialRouteName="Index">
      <Stack.Navigator>
        <Stack.Screen
          name="IndexScreen"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
                <Entypo name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="ShowScreen" component={ShowScreen} />
        <Stack.Screen name="CreateScreen" component={CreateScreen} />
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
