import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ListView = ({ product }) => {
  const [hoverOnImage, setHoverOnImage] = useState(true);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();

  return (
    <>
      {product && (
        <li className="grid grid-cols-[28%_68%]   gap-8 border border-customBorder">
          <div className="relative">
            <Link to={`${location.pathname}/${product.name}`}>
              <img
                src={hoverOnImage ? product.images[1] : product.images[0]}
                crossOrigin="anonymous"
                alt={product.name}
                className="h-[22rem] w-full"
                onMouseEnter={() => setHoverOnImage(false)}
                onMouseLeave={() => setHoverOnImage(true)}
              />
            </Link>
            <span
              className="categoryIcon absolute top-2 right-2 cursor-pointer"
              onClick={() => setClicked(true)}
            >
              {clicked ? (
                <ion-icon name="heart"></ion-icon>
              ) : (
                <ion-icon name="heart-outline"></ion-icon>
              )}
            </span>
          </div>
          <div className="w-full px-2 py-6">
            <h3 className="text-xl">{product.name}</h3>
            <p className="my-2 object-cover text-sm font-semibold text-orange-500 opacity-80">
              {product.price}$
            </p>
            <p className="text-sm">{product.summary}</p>
            <button className="mt-6 rounded-sm border border-orange-500 py-1 px-3  text-sm">
              Add to cart
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default ListView;
