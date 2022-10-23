import React from "react";
import { ImCross } from "react-icons/im";
function CartRow({ product, quantity, onQuantityChange, onRemove }) {
  function handleChange(event) {
    onQuantityChange(product.id, +event.target.value);
  }

  function handleCrossClick() {
    onRemove(product.id);
  }
  return (
    <div className=" flex flex-row items-center px-4 py-2 space-x-4 border-gray-300 border-2">
      <button className="flex items-center w-10 h-10">
        <ImCross onClick={handleCrossClick} />
      </button>
      <div className="w-10 h-10 ">
        <img src={product.thumbnail} className="w-full h-full object-cover" />
      </div>
      <div className="grow">{product.title}</div>
      <div className="w-20 ">{product.price}</div>
      <div className="w-32">
        <input
          type="number"
          value={quantity}
          className="w-12 p-1 mx-2 rounded-md border-black border-2"
          onChange={handleChange}
        />
      </div>
      <span className="w-24 mx-2">${product.price * quantity}</span>
    </div>
  );
}
export default CartRow;
