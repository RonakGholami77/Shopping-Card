import React from "react";

function Card(props) {
  const { image, name, price } = props;
  return (
    <div className="card">
      <div className="image">
        <h3>{name}</h3>
        <img width={"100%"} src={image} alt={name} />
      </div>
      <div className="content">
        <h3>{price} $</h3>
        <button>Add To Card</button>
      </div>
    </div>
  );
}

export default Card;
