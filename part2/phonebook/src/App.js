import React, { useState } from "react";
import FilterNumbers from "./components/FilterNumbers";
import AddEntry from "./components/AddEntry";
import DisplayNumbers from "./components/DisplayNumbers";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterBy, setNewFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <FilterNumbers setNewFilter={setNewFilter} />
      <AddEntry persons={persons} setPersons={setPersons} />
      <DisplayNumbers persons={persons} filterBy={filterBy} />
    </div>
  );
};

export default App;
