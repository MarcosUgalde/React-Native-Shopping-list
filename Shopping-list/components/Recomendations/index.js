import { View, Text, Image, StyleSheet } from "react-native";
import { apiData } from "../hooks";
import { useState, useEffect } from "react";

const Recomendations = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Assume fetchData is a function that fetches data from an API
    apiData()
      .then((response) => setData(response))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Diet recomendations from World Health Organization
      </Text>
      <Text style={styles.recomendation}>
        Remember to eat healty foods with green vegetables
      </Text>
      {data ? (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            }}
          />
          <Text>Powered by: {capitalizeFirstLetter(data?.data?.name)}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  recomendation: {
    fontSize: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Recomendations;
