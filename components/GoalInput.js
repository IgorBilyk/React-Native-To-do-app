import React from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Button,
} from "react-native";

export const GoalInput = ({
  addTodo,
  handleGoal,
  goal,
  error,
  isVisible,
  setIsVisible,
}) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      {error && (
        <Text style={styles.warning}>
          Goal should have at least 1 character long!
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="useless placeholder"
          style={styles.input}
          value={goal}
          onChangeText={handleGoal}
        />
        <Pressable
          onPress={addTodo}
          android_ripple={{ color: "#0d47a1" }}
          style={styles.button}
        >
          <Text style={styles.text}>Add Goal</Text>
        </Pressable>
      </View>
      <Button title="Cancel" onPress={() => setIsVisible(false)} />
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    marginBottom: 10,
    padding: 5,
    backgroundColor: "rgba(100,0,0,0.01)",
  },
  input: {
    borderWidth: 1,
    width: "70%",
    padding: 6,
    borderRadius: 10,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#33b5e5",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  warning: {
    color: "red",
    position: "absolute",
    top: 10,
    left: 20,
  },
});
