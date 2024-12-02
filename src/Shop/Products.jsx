import React, { useEffect } from "react";
import { products } from "./data";
import Card from "./Card";

function Products(props) {
  const { clickHandler } = props;

  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <div className="products">
      {products.map((product, index) => {
        return (
          <Card {...product} onClickHandler={clickHandler} key={product.id} />
        );
      })}
    </div>
  );
}

export default Products;
