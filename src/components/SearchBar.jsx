import React from "react";

function SearchBar(props) {
  const { onSearch } = props;

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        placeholder="Search products..."
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
