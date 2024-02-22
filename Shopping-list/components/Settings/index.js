import { Text, View } from "react-native";
import { styles } from "./styles";

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text>Write the Item you want to add to your shopping list</Text>
      <Text>Click the Add Item button</Text>
      <Text>
        When you have picked a specific item of your list, you can delete that
        item pressing the Delete button
      </Text>
    </View>
  );
}

export default Settings;
