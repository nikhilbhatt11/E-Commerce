import React from "react";
import CartList from "./CartList";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";

function CartPage() {
  return (
    <div className="h-screen max-w-6xl mx-auto p-16">
      <Link to="/products/main">
        <HiArrowNarrowLeft /> Back
      </Link>

      <div className="text-black">
        <CartList />
      </div>
    </div>
  );
}

export default CartPage;
