import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import List from "./components/List";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings";

const tabs = ["List", "Settings"];

export default function App() {
  const [activeTab, setActiveTab] = useState("List");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "List":
        return <List />;
      case "Settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {renderActiveComponent()}
      </View>
      <Navbar tabs={tabs} activeTab={activeTab} onTabPress={handleTabPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
