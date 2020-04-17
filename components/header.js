import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#f7d0cb",
    paddingTop: 38,
  },
  title: {
    textAlign: "center",
    color: "#f9fafc",
    fontSize: 20,
    fontWeight: "bold",
  },
});
