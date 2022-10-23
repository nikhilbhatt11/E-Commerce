import React from "react";
import { Link } from "react-router-dom";
function MobileMenu() {
  return (
    <div className="flex flex-col">
      <Link to="/products/main">Home</Link>
      <Link to="./Login">Login</Link>
      <Link to="./SignIn">SignIn</Link>
    </div>
  );
}
export default MobileMenu;
