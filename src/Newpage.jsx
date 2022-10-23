import React from "react";
import { Link } from "react-router-dom";
function Newpage({ ...data }) {
  return (
    <>
      <div>
        <Link to="/products/main">Back</Link>
      </div>

      <div>
        <img src={data.photo} />
        <span>{data.category}</span>
        <span>{data.title}</span>
        <span>{data.item}</span>
        <span>{data.detail}</span>
        <span>{data.rating}</span>
        <span>{data.sale}</span>
        <span>Rs.{data.price}</span>
      </div>

      <div>
        <input placeholder="1" />
      </div>
      <div>
        <button>Add to cart</button>
      </div>
    </>
  );
}
export default Newpage;
