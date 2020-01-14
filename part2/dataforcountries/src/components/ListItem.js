import React from "react";

const ListItem = ({ item, func }) => {
  const showCountry = () => {
    func(item.name);
  };
  return (
    <tr>
      <td>{item.name}</td>
      <td>
        <button onClick={showCountry}>show</button>
      </td>
    </tr>
  );
};

export default ListItem;
