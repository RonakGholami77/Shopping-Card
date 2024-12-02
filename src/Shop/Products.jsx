import React from "react";
import { products } from "./data";
import Card from "./Card";

function Products() {
  return (
    <div className="products">
      {products.map((product, index) => {
        return <Card {...product} key={product.id} />;
      })}
    </div>
  );
}

export default Products;
