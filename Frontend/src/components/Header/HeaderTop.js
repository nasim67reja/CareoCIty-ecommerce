import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserImage from "../Account/UserImage";
import CartIcon from "./CartIcon";
import { overlayActions } from "../../store/ovarlay";

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
      <button className="customIcon absolute right-0 flex h-full items-center justify-center rounded-r-lg bg-outline px-3  focus:outline focus:outline-5 focus:outline-offset-0 focus:outline-outline">
        <span className="w-6 translate-y-[2px]">
          <ion-icon
            name="search-outline"
            style={{ color: "#232f3e" }}
          ></ion-icon>
        </span>
      </button>
    </div>
  );
};

const HeaderTop = () => {
  const loggedInUser = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div
      className="flex items-center
     justify-between gap-12  py-1 md:py-2"
    >
      <div className="customIcon flex translate-y-1  gap-3 md:gap-6  lg:hidden">
        <span
          className="w-5 sm:w-6"
          onClick={() => {
            dispatch(overlayActions.mobileMenuOpenHandler());
            dispatch(overlayActions.backdropVisible());
          }}
        >
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <span
          className="w-5 sm:w-6"
          onClick={() => {
            dispatch(overlayActions.searchMenuOpenHandler());
            dispatch(overlayActions.backdropVisible());
          }}
        >
          <ion-icon name="search-outline"></ion-icon>
        </span>
      </div>
      <Link to="/" className="cursor-pointer text-white">
        <h2 className="text-[1.1rem] sm:text-xl md:text-2xl">CareoCity</h2>
        <p className="text-[0.65rem] opacity-80">Quality Fun Shopping</p>
      </Link>
      <Search classes="hidden grow lg:flex " classesBtn="hi" />

      <nav>
        <ul className=" flex list-none  items-center gap-3 md:gap-4 ">
          <li className="cursor-pointer text-white">
            {loggedInUser.user && (
              <Link to="/account">
                <UserImage imgHeight="h-7 md:h-8" />
              </Link>
            )}
            {!loggedInUser.user && <Link to="/login">Login& Register</Link>}
          </li>
          <li className="hidden cursor-pointer text-sm text-white lg:block">
            More
          </li>
          <CartIcon />
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTop;
