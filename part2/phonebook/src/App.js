import React, { useState } from "react";
import FilterNumbers from "./components/FilterNumbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
  ]);

  const [filterBy, setNewFilter] = useState("");

  return (
    <div>
      <FilterNumbers setNewFilter={setNewFilter} />
      <AddEntry persons={persons} setPersons={setPersons} />
      <DisplayNumbers persons={persons} filterBy={filterBy} />
    </div>
  );
};

export default App;
