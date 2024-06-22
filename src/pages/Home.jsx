import { useCallback, useState } from "react";
import { SearchBar } from "../components/searchBar";
import { DrugsList } from "../components/drugsList";
import { Box } from "@mui/material";

const Home = () => {
  const [drugsList, setDrugsLists] = useState([]);


  const handleSearch = useCallback(async (searchName) => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL;

    try {
      const res = await fetch(
        `${url}api_key=${apiKey}&search=products.brand_name:*${searchName}*`
      );
      const response = await res.json();
      response?.results
        ? setDrugsLists(await response.results)
        : setDrugsLists([]);
    } catch (error) {
      console.log("Error in the fetch info: ", error);
    }
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <img src="https://open.fda.gov/img/l_openFDA.png" />
      <h1>Buscador de fármacos</h1>
      <SearchBar searchDrug={handleSearch} />
      <DrugsList drugsResults={drugsList} />
    </Box>
  );
};

export default Home;
