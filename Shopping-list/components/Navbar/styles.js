import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    height: 50,
    marginBottom: 30,
    width: 300,
  },
  tab: {
    padding: 10,
  },
  selectedTab: {
    backgroundColor: "#ddd",
  },
  tabText: {
    fontSize: 16,
  },
});
