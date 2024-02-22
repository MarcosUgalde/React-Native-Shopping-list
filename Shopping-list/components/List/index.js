import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

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
    <View>
      <Text>Add items to your list:</Text>
      <View>
        <TextInput
          placeholder="Add item"
          value={textInput}
          onChange={setTextInput}
        ></TextInput>
        <Button title="Add item" onPress={addItem} />
      </View>
    </View>
  );
};

export default List;
