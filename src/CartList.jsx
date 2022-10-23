import React, { useEffect, useState } from "react";

import CartRow from "./CartRow";
import { withCart } from "./withProvider";
function CartList({ cart, updateCart }) {
  const [quantityMap, setQuantityMap] = useState();

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
  useEffect(
    function () {
      setQuantityMap(cartToQuantityMap());
    },
    [cart]
  );

  function handleQuantityChange(productId, newValue) {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  }

  function handleUpdateCartClick() {
    updateCart(quantityMap);
  }
  function handleRemove(productId) {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  }

  return (
    <>
      <div className="flex space-x-7 bg-gray-100 border-gray-400 border-2 ">
        <span className="grow ml-32">Product</span>
        <span className="w-20">Price</span>
        <span className="w-28">Quantity</span>
        <span className="w-28 ">SubTotal</span>
      </div>
      {cart.map((cartItem) => (
        <CartRow
          key={cartItem.product.Id}
          product={cartItem.product}
          quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      ))}
      <div className="border-gray-300 border-2 flex justify-end px-4 py-2">
        <button
          onClick={handleUpdateCartClick}
          className="bg-red-500 text-white px-4 py-1 border rounded-md "
        >
          UpDateCart
        </button>
      </div>
    </>
  );
}
export default withCart(CartList);
