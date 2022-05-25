import React from "react";
import { useParams } from "react-router-dom";
import { TestData } from "../TestData";

function DisplayProduct() {
  const { id } = useParams();
  return (
    <div className="product-list">
      <div className="product-display">
        <h1>{TestData[id - 1].name}</h1>{" "}
        <p>{TestData[id - 1].description}</p>{" "}
        <p>${TestData[id - 1].price}</p>{" "}
        <img src={TestData[id-1].image}/>
      </div>
    </div>
  );
}

export default DisplayProduct;