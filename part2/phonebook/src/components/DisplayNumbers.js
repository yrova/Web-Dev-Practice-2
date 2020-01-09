import React from "react";

const DisplayNumbers = ({ persons, filterBy }) => {
  const applyFilter = !filterBy
    ? persons
    : persons.filter(person => person.name.toLowerCase().startsWith(filterBy));

  const rows = () =>
    applyFilter.map(person => (
      <Name key={person.id} name={person.name} number={person.number} />
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

const Name = ({ name, number }) => {
  return (
    <tr>
      <td>
        {name} {number}
      </td>
    </tr>
  );
};

export default DisplayNumbers;
