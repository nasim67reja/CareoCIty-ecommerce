import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UserImage from "../Account/UserImage";
import CartIcon from "./CartIcon";

export const Search = (props) => {
  const [focusInput, setFocusInput] = useState(false);

  return (
    <div
      className={`${props.classes} relative h-10 rounded-lg ${
        focusInput ? "outline outline-5 outline-offset-0 outline-outline" : ""
      } `}
    >
      <select
        name="e-commerce"
        className="cursor-pointer rounded-l-lg p-2 px-4 text-gray-500  focus:outline focus:outline-5 focus:outline-offset-0 focus:outline-outline"
      >
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Man">Man</option>
        <option value="Women">Women</option>
        <option value="Home">Home</option>
      </select>
      <input
        type="text"
        className="w-full rounded-r-lg  px-4 text-secondary text-opacity-70 focus:outline-none"
        onFocus={() => setFocusInput(true)}
        onBlur={() => setFocusInput(false)}
      />
      <button
        className={`${props.classesBtn} customIcon focus:outline-outline" absolute right-0 flex h-full items-center justify-center rounded-r-lg bg-outline px-3 focus:outline focus:outline-5 focus:outline-offset-0 focus:outline-outline`}
      >
        <ion-icon name="search-outline" style={{ color: "#232f3e" }}></ion-icon>
      </button>
    </div>
  );
};

const HeaderTop = () => {
  const loggedInUser = useSelector((state) => state.user);

  return (
    <div
      className="flex items-center
     justify-between gap-12 py-2"
    >
      <div className="customIcon flex  gap-6  lg:hidden">
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <Link to="/" className="cursor-pointer text-white">
        <h2 className="own-class  text-2xl lg:text-3xl">CareoCity</h2>
        <p className="text-xs opacity-80">Quality Fun Shopping</p>
      </Link>
      <Search classes={"hidden grow lg:flex "} classesBtn={"hi"} />

      <nav>
        <ul className="hidden list-none items-center  gap-6 lg:flex ">
          <li className="cursor-pointer text-white">
            {loggedInUser.user && (
              <Link to="/account">
                <UserImage imgHeight="h-9" />
              </Link>
            )}
            {!loggedInUser.user && <Link to="/login">Login& Register</Link>}
          </li>
          <li className="cursor-pointer text-white">More</li>
          <CartIcon />
        </ul>
        <div className="customIcon flex gap-4 lg:hidden">
          <ion-icon name="cart-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
