import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  Image,
} from "react-native";
import { GoalItem } from "./components/GoalItem";
import { GoalInput } from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const handleGoal = (text) => {
    setError(false);
    setGoal(text);
  };
  const addTodo = () => {
    if (!goal) {
      setError(true);
      return false;
    }
    setTodos((currentGoal) => [
      ...currentGoal,
      { text: goal, key: Math.random().toString() },
    ]);
    setGoal("");
    setIsVisible(false);
  };
  const removetodo = (id) => {
    const filteredArray = todos.filter((item, index) => item.key !== id);
    setTodos(filteredArray);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {error && (
          <Text style={styles.warning}>
            Goal should have at least 1 character long!
          </Text>
        )}
        <Button
          title="Add New Goal"
          /*  style={{ color: "#33b5e5" }} */
          onPress={() => setIsVisible(true)}
        />

        <GoalInput
          addTodo={addTodo}
          handleGoal={handleGoal}
          goal={goal}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          error={error}
        />

        <View style={styles.lists}>
          <FlatList
            data={todos}
            renderItem={(itemData) => {
              return <GoalItem itemData={itemData} removetodo={removetodo} />;
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: "column",
    flex: 1,
  },
  container: {
    paddingTop: 50,
    flex: 1,
  },
  lists: {
    flex: 5,
  },

});
