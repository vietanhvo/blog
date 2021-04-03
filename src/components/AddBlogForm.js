import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const AddBlogForm = ({ onSubmit, initialValue }) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

AddBlogForm.defaultProps = {
  initialValue: {
    title: "",
    content: "",
  },
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
  input: {
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    margin: 5,
    padding: 5,
  },
});

export default AddBlogForm;
