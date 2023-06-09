import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = ({ itemData, removetodo }) => {
  const text = itemData.item.text;

  return (
    <View style={styles.list_item_container}>
      <Text style={styles.goal_item}>{text}</Text>
      <Pressable
        onPress={() => removetodo(itemData.item.key)}
        android_ripple={{ color: "#0d47a1" }}
        style={styles.button}
      >
        <Text style={styles.text}>Remove</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  list_item_container: {
    backgroundColor: "rgba(05,50,100,.6)",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  goal_item: {
    color: "white",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#33b5e5",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
});
