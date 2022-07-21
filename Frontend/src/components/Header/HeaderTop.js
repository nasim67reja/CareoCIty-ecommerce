import React from "react";
import styles from "./HeaderTop.module.css";
import CartIcon from "../Icon/CartIcon";
const HeaderTop = () => {
  return (
    <div className={styles.HeaderTop}>
      <div className={styles.logoBox}>
        <span className={styles.logo}>CareoCity</span>
        <span className={styles.description}>Quality Fun Shopping</span>
      </div>
      <div className={styles.navSearch}>
        <input type="text" />
      </div>
      <nav>
        <ul className={styles.nav}>
          <li>Login</li>
          <li className={styles.cart}>
            <CartIcon />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderTop;
