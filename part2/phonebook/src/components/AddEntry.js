import React, { useState } from "react";
import numService from "../services/phonenumbers";

const AddEntry = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = event => {
    setNewPhoneNumber(event.target.value);
  };

  const handleDuplicate = () => {
    const formatName = newName.trim();
    const message = `${formatName} is already added to the phonebook, replace the old number with a new One?`;
    if (window.confirm(message)) {
      const number = persons.find(person => person.name === newName);
      const changedNumber = { ...number, number: newPhoneNumber };

      numService
        .update(changedNumber.id, changedNumber)
        .then(returnedNumber => {
          setPersons(
            persons.map(person =>
              person.id !== changedNumber.id ? person : returnedNumber
            )
          );
        })
        .catch(error => {
          alert(
            `The person ${formatName} was already deleted from the server `
          );
          setPersons(persons.filter(person => person.id !== number.id));
        });
    }
  };

  //Returns true if array has a duplicate name, false otherwise
  const hasDuplicate = () =>
    !persons.every(
      person =>
        person.name.toLowerCase().trim() !== newName.toLowerCase().trim()
    );

  const addUserInfo = event => {
    event.preventDefault();
    if (hasDuplicate()) {
      handleDuplicate();
    } else {
      //Retrieves biggest id value from the json server,otherwise return 0
      const generateId = () => {
        return persons.length === 0
          ? 0
          : persons
              .map(person => person.id)
              .reduce((p, c) => (p.value > c.value ? p : c));
      };

      const nameObj = {
        name: newName,
        number: newPhoneNumber,
        id: generateId() + 1
      };

      numService.create(nameObj).then(data => {
        setPersons(persons.concat(data));
        setNewName("");
        setNewPhoneNumber("");
      });
    }
  };

  return (
    <div>
      <h2>Numbers</h2>
      <form onSubmit={addUserInfo}>
        <div>
          name:
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number:
          <input value={newPhoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddEntry;
