import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

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

export default List;
