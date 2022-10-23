import React from "react";
import Product from "./Product";
function ProductList({ products }) {
  return (
    <div className="md:grid grid-cols-3">
      {products.map(function (item) {
        return (
          <Product
            key={item.id}
            title={item.title}
            category={item.category}
            photo={item.thumbnail}
            price={item.price}
            rating={item.rating}
            sale={item.sale}
            {...item}
          />
        );
      })}
    </div>
  );
}
export default ProductList;
