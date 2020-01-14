import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);

  //fetch country data from api and preload array
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Search countries={countries} />
    </div>
  );
};

export default App;
