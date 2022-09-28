import React, { useState } from "react";

const ImgSec = ({ product }) => {
  const [imgSrc, setImgSrc] = useState(
    product
      ? `https://careocity-ecommerce.onrender.com/Products/${product.categories}/${product.images[1]}`
      : ""
  );

  return (
    <div className="flex flex-col gap-4 ">
      <img
        crossOrigin="anonymous"
        src={
          imgSrc
            ? imgSrc
            : `https://careocity-ecommerce.onrender.com/Products/${product.categories}/${product.images[1]}`
        }
        alt={product.name}
      />
      <div className="flex gap-4 px-4">
        {product.images.map((image, i) => (
          <img
            key={i}
            crossOrigin="anonymous"
            src={`https://careocity-ecommerce.onrender.com/Products/${product.categories}/${image}`}
            alt={product.name}
            className="h-28 w-24 cursor-pointer"
            onClick={(e) => {
              setImgSrc(e.target.src);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImgSec;
