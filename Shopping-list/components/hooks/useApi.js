import axios from "axios";
export const apiData = async () => {
  try {
    const result = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/charmander"
    );
    return result;
  } catch (error) {
    console.info("Fetch API data error: ", error.message);
    return { success: false };
  }
};
