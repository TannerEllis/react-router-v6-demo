import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <Link to="/home"> Home </Link>
        <Link to="/products/search"> Products</Link>
        <Link to="/add"> Add </Link>
      </nav>
    </div>
  );
}

export default Nav;
