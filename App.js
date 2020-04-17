import React, { useState } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  FlatList,
  Alert,
  Text
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";


export default function App() {
  const [todos, setTodos] = useState([
    { text: "Interview", key: "1" },
    { text: "CS50 Course", key: "2" },
    { text: "React hooks tutorial", key: "3" },
    { text: "React native tutorial", key: "4" },
  ]);
  const pressHandler = (key) => {
    setTodos((todos) => todos.filter((todo) => todo.key != key));
  };
  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((todos) => [{ text, key: Math.random().toString() }, ...todos]);
    } else {
      Alert.alert("oops!", "Please type your todo to add it", [
        { text: "Understood"},
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {todos.length ? 
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
            :
            <Text style={styles.text}>You are free nothing todo 🤓</Text>}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafc",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    color: "#313131",
    paddingTop:10,
    textAlign: "center"
  }
});
