/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./HeaderBottom.module.css";

const HeaderBottom = () => {
  return (
    <div className={styles.HeaderBottom}>
      <nav>
        <ul className={styles["main-nav-list"]}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">All Collections</a>
          </li>
          <li>
            <a href="#">Show Layout</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Sub Collections</a>
          </li>
          <li>
            <a href="#">Flash Deals</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBottom;
