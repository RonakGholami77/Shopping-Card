import React from "react";

function Card(props) {
  const { id, image, name, price, count, onClickHandler } = props;

  function addToCard() {
    onClickHandler((prev) => {
      return [...prev, { id, image, name, price, count }];
    });
  }

  return (
    <div className="card">
      <div className="image">
        <h3>{name}</h3>
        <img width={"100%"} src={image} alt={name} />
      </div>
      <div className="content">
        <h3>{price} $</h3>
        <button onClick={addToCard}>Add To Card</button>
      </div>
    </div>
  );
}

export default Card;
