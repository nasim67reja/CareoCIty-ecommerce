import React from "react";
import { useState } from "react";
import RatingStar from "../Reuse/RatingStar";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex gap-4 border-b border-customBorder py-5 pr-6">
        <div className="w-1/4">
          <img
            src={item.product.images[1]}
            alt=""
            crossOrigin="anonymous"
            className="w-full"
          />
        </div>
        <div className="pr-2">
          <p className="mb-2 text-sm">{item.product.name}</p>
          <RatingStar rating={item.product.ratingsAverage} />
        </div>
      </div>
      <div className="flex items-center border-b border-customBorder py-5 text-sm">
        $ {item.product.price}
      </div>
      <div className="flex items-center border-b border-customBorder py-5">
        <div className="flex w-20">
          <button
            className="border border-customBorder px-3"
            onClick={() => setQuantity((quantity) => (quantity = quantity - 1))}
          >
            -
          </button>
          <input
            className="w-10 border border-customBorder px-2 focus:outline-none"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            className="border border-customBorder px-3"
            onClick={() => setQuantity((quantity) => (quantity = quantity + 1))}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center border-b border-customBorder py-5">
        $ {quantity * item.product.price}
      </div>
      <div className="flex items-center border-b border-customBorder py-5">
        <span className="cursor-pointer">
          <ion-icon name="trash-outline"></ion-icon>
        </span>
      </div>
    </>
  );
};

export default CartItem;
