import React from "react";
import numServices from "../services/phonenumbers";

const DisplayNumbers = ({ persons, filterBy, setPersons }) => {
  const applyFilter = !filterBy
    ? persons
    : persons.filter(person => person.name.toLowerCase().startsWith(filterBy));

  const rows = () =>
    applyFilter.map(person => (
      <Name
        key={person.id}
        person={person}
        setPersons={setPersons}
        persons={persons}
      />
    ));

  return (
    <div>
      <h2>Numbers</h2>
      <table>
        <tbody>{rows()}</tbody>
      </table>
    </div>
  );
};

const Name = ({ person, setPersons, persons }) => {
  const { name, number, id } = person;
  const deleteNumber = () => {
    if (window.confirm(`Do you really want to delete ${name}'s number?`)) {
      numServices.deleteNum(id).then(response => {
        setPersons(persons.filter(person => person.name !== name));
      });
    }
  };

  return (
    <tr>
      <td>
        {name} {number} <button onClick={deleteNumber}>delete</button>
      </td>
    </tr>
  );
};

export default DisplayNumbers;
