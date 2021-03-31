import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

import { Context } from "../context/BlogContext";
import AddBlogForm from "../components/AddBlogForm";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = route.params.id;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <AddBlogForm
      onSubmit={(title, content) => editBlogPost(id, title, content, () => {navigation.pop()})}
      initialValue={{ id, title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
