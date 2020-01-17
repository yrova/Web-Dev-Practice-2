import React, { useState, useEffect } from "react";
import FilterNumbers from "./components/FilterNumbers";
import AddEntry from "./components/AddEntry";
import DisplayNumbers from "./components/DisplayNumbers";
import numberService from "./services/phonenumbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterBy, setNewFilter] = useState("");

  useEffect(() => {
    numberService.getAll().then(response => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <FilterNumbers setNewFilter={setNewFilter} />
      <AddEntry persons={persons} setPersons={setPersons} />
      <DisplayNumbers
        persons={persons}
        filterBy={filterBy}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
