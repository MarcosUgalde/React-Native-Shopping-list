import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

function Navbar({ tabs, onTabPress }) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabPress = (index) => {
    setSelectedTab(tabs[index]);
    onTabPress(tabs[index]);
  };

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.tab,
            tabs[index] === selectedTab && styles.selectedTab,
          ]}
          onPress={() => handleTabPress(index)}
        >
          <Text style={styles.tabText}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Navbar;
