import React from "react";

const FilterNumbers = ({ setNewFilter }) => {
  const handleFilterChange = event => {
    setNewFilter(event.target.value.toLowerCase());
  };
  return (
    <div>
      <h2>PhoneBook</h2>
      <form>
        <div>
          filter shown with
          <input onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  );
};

export default FilterNumbers;
