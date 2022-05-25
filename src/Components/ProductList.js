import React from "react";
import { TestData } from "../TestData";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  return (
    <div className="product-list">
      <div className="products-list">
        {TestData.map((product) => {
          return (
            <div
              className="product-display"
              onClick={() => {
                navigate(`/products/${product.id}`);
              }}
            >
              <h1>{product.name}</h1>
              <h3>{product.description}</h3>
              <p>${product.price}</p>{" "}
              <img src={product.image}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
