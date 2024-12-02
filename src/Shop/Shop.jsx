import React from "react";
import Products from "./Products";
import Basket from "./Basket";

function Shop() {
  return (
    <div className="shop">
      <Products />
      <hr />
      <Basket />
    </div>
  );
}

export default Shop;
