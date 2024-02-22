import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const List = () => {
  const [items, setItems] = useState([]);
  const [textInput, setTextInput] = useState("");

  const addItem = () => {
    if (textInput.trim() !== "") {
      setItems([
        ...items,
        { id: Date.now(), text: textInput, completed: false },
      ]);
      setTextInput("");
    }
  };

  const toggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add items to your list:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add item"
          value={textInput}
          onChangeText={setTextInput}
        ></TextInput>
        <Button title="Add item" onPress={addItem} />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleItem(item.id)}>
            <View style={styles.item}>
              <Text style={styles.text}>{item.text}</Text>
              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  deleteButton: {
    color: "red",
    marginLeft: 10,
  },
});

export default List;
