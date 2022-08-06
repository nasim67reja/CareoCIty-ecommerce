import React from "react";
import styles from "./HeaderTop.module.css";

const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between py-2">
      <div className={` ${styles.customIcon} flex gap-4 lg:hidden`}>
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
      </div>
      <div className="text-white">
        <h2 className="own-class mb-1 text-2xl lg:text-3xl">CareoCity</h2>
        <p className="text-xs opacity-80">Quality Fun Shopping</p>
      </div>
      <div className="hidden lg:block">
        <input type="text" />
      </div>
      <nav>
        <ul className="hidden list-none items-center  gap-10 lg:flex">
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
