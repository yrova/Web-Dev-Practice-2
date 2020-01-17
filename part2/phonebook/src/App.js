import React, { useState, useEffect } from "react";
import FilterNumbers from "./components/FilterNumbers";
import AddEntry from "./components/AddEntry";
import DisplayNumbers from "./components/DisplayNumbers";
import numberService from "./services/phonenumbers";
import Notification from "./components/messages/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterBy, setNewFilter] = useState("");
  const [message, setMessage] = useState({
    message: null,
    type: null //true = green box, false = red box
  });

  useEffect(() => {
    numberService.getAll().then(response => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>PhoneBook</h2>
      <Notification message={message} />
      <FilterNumbers setNewFilter={setNewFilter} />
      <AddEntry
        persons={persons}
        setPersons={setPersons}
        setMessage={setMessage}
      />
      <DisplayNumbers
        persons={persons}
        filterBy={filterBy}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
