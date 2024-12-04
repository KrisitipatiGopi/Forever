import React, { useState } from "react";
import { assets } from "../Utils/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSearch } from "../Utils/searchSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store.cart.cart);
  

  const dispatch = useDispatch();

  const handleSearchbar = () => {
    dispatch(setShowSearch());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 border border-b-2">
      <Link to={"/"}>
        <img src={assets.logo} alt="logo" className="w-28 md:w-36" />
      </Link>
      <div className="hidden md:flex p-4 gap-5 font-semibold">
        <NavLink to={"/"} className="hover:text-blue-500">
          <p>Home</p>
        </NavLink>
        <NavLink to={"/collection"} className="hover:text-blue-500">
          <p>Collection</p>
        </NavLink>
        <NavLink to={"/about"} className="hover:text-blue-500">
          <p>About</p>
        </NavLink>
        <NavLink to={"/contact"} className="hover:text-blue-500">
          <p>Contact</p>
        </NavLink>
      </div>
      <div className="hidden md:flex p-4 gap-5">
        <Link to={"/collection"}>
          <img
            src={assets.search_icon}
            alt="search"
            className="h-6 w-6 hover:scale-110 transition"
            onClick={handleSearchbar}
          />
        </Link>
        <NavLink to={"/login"}>
          <img
            src={assets.profile_icon}
            alt="login"
            className="h-6 w-6 hover:scale-110 transition"
          />
        </NavLink>
        <NavLink to={"/cart"} className="relative">
          <img
            src={assets.cart_icon}
            alt="cart"
            className="h-6 w-6 hover:scale-110 transition"
          />
          <p className="absolute -top-2 -right-2 bg-black text-white text-center text-xs rounded-xl px-1">
           {cartItems.length}
          </p>
        </NavLink>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none hover:text-blue-500 transition"
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg p-4 z-50 flex flex-col gap-4 font-semibold w-48">
          <NavLink
            to={"/"}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-500"
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to={"/collection"}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-500"
          >
            <p>Collection</p>
          </NavLink>
          <NavLink
            to={"/about"}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-500"
          >
            <p>About</p>
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-blue-500"
          >
            <p>Contact</p>
          </NavLink>
          <div className="flex gap-5">
            <NavLink to={"/search"} onClick={() => setIsMenuOpen(false)}>
              <img
                src={assets.search_icon}
                alt="search"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </NavLink>
            <NavLink to={"/login"} onClick={() => setIsMenuOpen(false)}>
              <img
                src={assets.profile_icon}
                alt="login"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </NavLink>
            <NavLink to={"/cart"} onClick={() => setIsMenuOpen(false)}>
              <img
                src={assets.cart_icon}
                alt="cart"
                className="h-6 w-6 hover:scale-110 transition"
              />
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
