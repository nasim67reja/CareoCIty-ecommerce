import React from "react";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <div
      className="flex items-center
     justify-between gap-12 py-2"
    >
      <div className={` ${styles.customIcon} flex  lg:hidden`}>
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div className="text-white">
        <h2 className="own-class  text-2xl lg:text-3xl">CareoCity</h2>
        <p className="text-xs opacity-80">Quality Fun Shopping</p>
      </div>
      <div className="relative hidden h-10 grow lg:flex">
        <select
          name="e-commerce"
          className="cursor-pointer rounded-l-lg p-2 px-4 text-gray-500  focus:outline-outline"
        >
          <option value="">All Categories</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
        <input
          type="text"
          className="w-full rounded-r-lg px-4 focus:outline-outline"
        />
        <div
          className={`${styles.customIcon} absolute right-0 flex h-full items-center justify-center rounded-r-lg bg-outline px-3 focus:outline-outline`}
        >
          <ion-icon
            name="search-outline"
            style={{ color: "#232f3e" }}
          ></ion-icon>
        </div>
      </div>
      <nav>
        <ul className="hidden list-none items-center  gap-6 lg:flex">
          <li className="cursor-pointer text-white">Login& Register</li>
          <li className="cursor-pointer text-white">More</li>
          <li className={` ${styles.customI} cursor-pointer text-white`}>
            <ion-icon name="cart-outline"></ion-icon>
          </li>
        </ul>
        <div className={` ${styles.customIcon} flex gap-4 lg:hidden`}>
          <ion-icon name="cart-outline"></ion-icon>
          <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        </div>
      </nav>
    </div>
  );
};

export default HeaderTop;
