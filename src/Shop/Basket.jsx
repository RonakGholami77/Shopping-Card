import React, { useState } from "react";

function Basket(props) {
  const [basket, setBassket] = useState([
    {
      id: 1,
      image: "./assets/images/Album 1.png",
      name: "Coat",
      price: "260",
      count: 5,
    },
    {
      id: 1,
      image: "./assets/images/Album 2.png",
      name: "Hat",
      price: "80",
      count: 5,
    },
  ]);

  function remove(bas) {
    setBassket((prev) => {
      const res = basket.filter(bas);
      return res;
    });
  }
  function reset() {
    setBassket([]);
  }

  return (
    <div className="basket">
      <h2>CARD</h2>
      <div className="menu">
        <div id="item">
          <span>Item</span>
          <hr />
        </div>
        <div id="price">
          <span>Price</span>
          <hr />
        </div>
        <div id="doing">
          <span>Doing</span>
          <hr />
        </div>
      </div>
      {basket.length > 0 &&
        basket.map((bas, index) => {
          return (
            <div key={bas.id} className="menu">
              <div id="item">
                <span>{bas.name}</span>
              </div>
              <div id="price">
                <span>{bas.price}</span>
              </div>
              <div id="doing">
                <button onClick={() => remove(bas)}>Remove</button>
              </div>
            </div>
          );
        })}
      <div className="reset">
        <button onClick={reset}>Empty</button>
      </div>
    </div>
  );
}

export default Basket;
