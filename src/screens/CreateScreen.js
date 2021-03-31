import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import AddBlogForm from "../components/AddBlogForm";

import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <AddBlogForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => navigation.navigate("IndexScreen"))
      }
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
