import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";

import { getProductData } from "./api";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { withCart } from "./withProvider";
function ProductDetail({ addToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  useEffect(
    function () {
      const p = getProductData(id);
      p.then(function (product) {
        setProduct(product);
        setLoading(false);
      });
      p.catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }
  function handleButtonClick() {
    addToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }
  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <Link to="/products/main">
        <HiArrowNarrowLeft /> Back
      </Link>
      <div className="m-2 bg-white">
        <img src={product.thumbnail} />
        <h1>{product.category}</h1>
        <h1 className="text-violet-600">{product.title}</h1>
        <h1>{product.description}</h1>
        <h1>{product.rating}</h1>
        <h1 className="text-red-500">Rs.{product.price}</h1>
        <h1>{product.sale}</h1>

        <input
          value={count}
          onChange={handleCountChange}
          className="border-2 rounded-md border-black w-14"
          type="number"
        />

        <button
          onClick={handleButtonClick}
          className="bg-red-500 text-lg font-bold text-white border-2 rounded-md m-2  px-4"
        >
          Add To Cart
        </button>
      </div>

      <div className="flex mb-2">
        <div className=" ml-2 px-2">
          {id > 1 && (
            <Link
              className="text-red-500 font-bold text-lg"
              to={"/products/" + (id - 1)}
            >
              <HiArrowNarrowLeft /> Previous
            </Link>
          )}
        </div>
        <div className=" px-2 ml-52 ">
          <Link
            className="text-violet-600  font-bold text-lg "
            to={"/products/" + (id + 1)}
          >
            <HiArrowNarrowRight /> Next
          </Link>
        </div>
      </div>
    </>
  );
}
export default withCart(ProductDetail);
