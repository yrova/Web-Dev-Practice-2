import React from "react";

const AddEntry = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = event => {
    setNewPhoneNumber(event.target.value);
  };

  //Returns true if array has a duplicate name, false otherwise
  const hasDuplicate = () =>
    !persons.every(
      person => person.name.toLowerCase() !== newName.toLowerCase()
    );

  const addUserInfo = event => {
    event.preventDefault();
    if (hasDuplicate()) {
      alert(newName + " is already added to the phonebook");
    } else {
      const nameObj = {
        name: newName,
        number: newPhoneNumber,
        id: persons.length + 1
      };

      setPersons(persons.concat(nameObj));
      setNewName("");
      setNewPhoneNumber("");
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
