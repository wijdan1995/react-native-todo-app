import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function addTodo({submitHandler}) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        value={text}
        onChangeText={changeHandler}
      />
      <Button onPress={() => (submitHandler(text), setText(''))} title="Add todo" color="#f7d0cb" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: "#313131",
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: "#f6d9d5",
    borderBottomWidth: 1,
  },
});
