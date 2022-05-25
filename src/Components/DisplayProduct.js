import React from "react";
import { useParams } from "react-router-dom";
import { TestData } from "../TestData";

function DisplayProduct() {
  const { id } = useParams();
  return (
    <div className="listOfProducts">
      <div className="productDisplay">
        <h1>{TestData[id - 1].name}</h1>{" "}
        <p>{TestData[id - 1].description}</p>{" "}
        <p>${TestData[id - 1].price}</p>{" "}
      </div>
    </div>
  );
}

export default DisplayProduct;