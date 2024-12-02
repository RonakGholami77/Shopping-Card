import React, { useEffect } from "react";

function Basket(props) {
  const { basket, clickHandler } = props;

  useEffect(() => {
    console.log(basket);
    console.log(props);
  }, [props, basket]);

  function remove(idproduct) {
    const newBasket = basket.filter((item) => item.id !== idproduct);
    clickHandler(newBasket);
  }
  // function remove(idproduct) {
  //   clickHandler(() => {
  //     basket.filter((item) => item.id !== idproduct);
  //   });
  //   console.log();
  // }

  function reset() {
    clickHandler([]);
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
                <button onClick={() => remove(bas.id)}>Remove</button>
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
