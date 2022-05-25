import React from "react";
import { useState } from "react";
import { TestData } from "../TestData";

function Search() {
  const [query, setQuery] = useState("");


  return (
    <div>
      <div class="search-container">
        <div class="search">
          <input
            onChange={event => setQuery(event.target.value)}
            type="text"
            class="search-bar"
            placeholder="Product Search"
          />
          <button type="submit" class="searchButton">
            <img src="https://img.icons8.com/ios/50/000000/search--v4.png" />
          </button>
        </div>
        {TestData.filter((product) => {
          if (query === "") {
            return product;
          } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
            return product;
          }
        }).map((product, i) => (
          <div className="product-search" key={i}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
