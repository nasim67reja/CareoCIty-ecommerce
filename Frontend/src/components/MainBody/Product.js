import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ product, customClass }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [clicked, setClicked] = useState(false);
  return (
    <div className="relative flex h-full w-full  flex-col  items-center gap-1 ">
      <div
        className="sliderIcon absolute top-3 right-3 cursor-pointer"
        onClick={() => setClicked((prevSt) => !prevSt)}
      >
        {clicked ? (
          <ion-icon name="heart" size="large"></ion-icon>
        ) : (
          <ion-icon name="heart-outline" size="large"></ion-icon>
        )}
      </div>
      <Link to={`/${product.categories}/${product.name}`} className="w-full">
        <img
          src={mouseEnter ? product.images[0] : product.images[1]}
          alt=""
          crossOrigin="anonymous"
          className={`w-full cursor-pointer ${customClass}`}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        />
      </Link>
      <p className="text-sm">{product.name}</p>
      <p className="text-sm text-orange-500">{product.price}</p>
      <p>{product.ratingsAverage}</p>
    </div>
  );
};

export default Product;
