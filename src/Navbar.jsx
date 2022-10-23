import React, { useState } from "react";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { withCart } from "./withProvider";
function Navbar({ cartCount }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function handleMenuOpenerClick() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex">
      <div className=" w-44 ml-28 h-36 ">
        <img
          src="https://images-ext-2.discordapp.net/external/gZGXtSkluci47vsERWkzdLh-JGNunfImcVX0tz2KlvY/%3Fq%3Dtbn%3AANd9GcSkFFvXQaL8zrpICWNwi-TdI9XQcA66BzWOcQ%26usqp%3DCAU/https/encrypted-tbn0.gstatic.com/images"
          className="w-full h-full"
        />
      </div>
      <span className="grow"></span>
      <div className="invisible md:visible mt-8">
        <Link to="/products/main" className="mr-8">
          Home
        </Link>
        <Link to={"./Login"} className="mr-8">
          Login
        </Link>
        <Link to={"./SignIn"} className="mr-16">
          SignIn
        </Link>
      </div>
      <div className="flex flex-col mr-28">
        <Link to={"/cart"}>
          <RiShoppingBagLine className="text-6xl   text-red-500 md:mt-4" />
        </Link>

        <span className="-m-12 mx-auto ml-10 text-lg font-bold text-violet-500 bg-yellow-300 border rounded-full">
          {cartCount}
        </span>
      </div>

      <div className=" mt-4 mr-4 md:hidden">
        <GiHamburgerMenu onClick={handleMenuOpenerClick} />
        {isMenuOpen && <MobileMenu />}
      </div>
    </div>
  );
}
export default withCart(Navbar);
