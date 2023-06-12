import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Container, Typography, TextField } from "@mui/material";
import ContinentAccordion from "./ContinentAccordion";
import CountryDetails from "./ContinentDetails";

const API_URL = "https://covid-193.p.rapidapi.com/history";

const App = () => {
  const [continents, setContinents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchContinents = async () => {
      try {
        const response = await fetch(API_URL, {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key":
              "6a18230812msh763f3515a8e4128p1c7e98jsna50d7693f990",
          },
        });
        const data = await response.json();
        setContinents(data.response);
      } catch (error) {
        console.error("Error fetching continents:", error);
      }
    };

    fetchContinents();
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query === "") {
      setSearchResults([]);
    } else {
      const results = continents.filter((continent) =>
        continent.continent.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        COVID-19 Reports
      </Typography>

      <TextField
        label="Search by Country or Continent"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "1rem" }}
      />

      {searchQuery !== "" ? (
        <CountryDetails countries={searchResults} />
      ) : (
        continents.map((continent) => (
          <ContinentAccordion key={continent.continent} continent={continent} />
        ))
      )}
    </Container>
  );
};

export default App;
