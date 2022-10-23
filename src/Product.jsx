import React from "react";
import { Link } from "react-router-dom";
function Product({ thumbnail, category, title, rating, sale, price, id }) {
  return (
    <div className="m-2 bg-white flex flex-col">
      <div className="w-300 ">
        <img
          src={thumbnail}
          className="w-full h-full object-cover aspect-square"
        />
      </div>
      <span className="ml-2">{category}</span>
      <div className="text-violet-600 ml-2">{title}</div>
      <div className="ml-2">Rating={rating}</div>
      <div className="ml-2">{sale}</div>
      <div className="text-red-500 ml-2">Rs.{price}</div>
      <div className="bg-red-500 ">
        <Link
          className="text-white font-bold text-lg text-center md:flex justify-center items-center"
          to={"/products/" + id}
        >
          View Detail
        </Link>
      </div>
    </div>
  );
}
export default Product;
