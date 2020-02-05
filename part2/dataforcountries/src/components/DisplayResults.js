import React from "react";
import ListItem from "./ListItem";
import Country from "./Country";

const DisplayResults = ({ countries, filter, setCountry }) => {
  //if no input display nothing
  if (!filter) return null;

  //filter countries by inputs
  const filteredResult = countries.filter(country =>
    country.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  //if filtered results is greater than 10 return error
  if (filteredResult.length >= 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (filteredResult.length === 1) {
    return <Country country={filteredResult[0]} />;
  }

  return (
    <table>
      <tbody>{generateRows(filteredResult, setCountry)}</tbody>
    </table>
  );
};

const generateRows = (arr, func) => {
  return arr.map(obj => <ListItem item={obj} key={obj.name} func={func} />);
};

export default DisplayResults;
