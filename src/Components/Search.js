import React from "react";

function Search() {
  return (
    <div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Search a product"
          />
          <button type="submit" class="searchButton">
          <img src="https://img.icons8.com/ios/50/000000/search--v4.png"/>          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
