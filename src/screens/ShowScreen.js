import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const blogPost = state.find(
    blog => blog.id === route.params.id
  );

  return <View>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text>
  </View>
};

export default ShowScreen;
