import React, { useState } from "react";
import DisplayResults from "./DisplayResults";

const Search = ({ countries }) => {
  const [country, setCountry] = useState("");

  const handleNameChange = event => {
    setCountry(event.target.value);
  };

  return (
    <div className="Search">
      <div className="SearchBar">
        find countries
        <input value={country} onChange={handleNameChange} />
      </div>
      <div className="DisplayResults">
        <DisplayResults
          countries={countries}
          filter={country}
          setCountry={setCountry}
        />
      </div>
    </div>
  );
};

export default Search;
