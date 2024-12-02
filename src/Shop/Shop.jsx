import React, { useState } from "react";
import Products from "./Products";
import Basket from "./Basket";

function Shop() {
  const [basket, setBassket] = useState([
    {
      id: 1,
      image: "./assets/images/Album 1.png",
      name: "Coat",
      price: "260",
      count: 5,
    },
    {
      id: 2,
      image: "./assets/images/Album 2.png",
      name: "Hat",
      price: "80",
      count: 5,
    },
  ]);

  return (
    <div className="shop">
      <Products clickHandler={setBassket} />
      <hr />
      <Basket basket={basket} clickHandler={setBassket} />
    </div>
  );
}

export default Shop;
