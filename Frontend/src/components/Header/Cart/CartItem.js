import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import RatingStar from "../../Reuse/RatingStar";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const curUserCart = useSelector((state) => state.user.user)?.data.data
    .cartItems;
  //   console.log(curUserCart && curUserCart[0].product.images[0]);
  return (
    <>
      {curUserCart && (
        <div className="grid grid-cols-[32%_17%_17%_17%_17%]  bg-white text-[#828282]">
          {["PRODUCT", "PRICE", "QUANTITY", "TOTAL", "REMOVE"].map((el, i) => (
            <div key={i} className="border-b border-customBorder pb-3">
              <h2 className="text-sm font-medium">{el}</h2>
            </div>
          ))}

          <div className="flex gap-4 border-b border-customBorder py-5 pr-6">
            <div className="w-1/4">
              <img
                src={curUserCart[0].product.images[1]}
                alt=""
                crossOrigin="anonymous"
                className="w-full"
              />
            </div>
            <div className="pr-2">
              <p className="mb-2 text-sm">{curUserCart[0].product.name}</p>
              <RatingStar rating={curUserCart[0].product.ratingsAverage} />
            </div>
          </div>
          <div className="flex items-center border-b border-customBorder py-5 text-sm">
            $ {curUserCart[0].product.price}
          </div>
          <div className="flex items-center border-b border-customBorder py-5">
            <div className="flex w-20">
              <button
                className="border border-customBorder px-3"
                onClick={() =>
                  setQuantity((quantity) => (quantity = quantity - 1))
                }
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
                onClick={() =>
                  setQuantity((quantity) => (quantity = quantity + 1))
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center border-b border-customBorder py-5">
            $ {quantity * curUserCart[0].product.price}
          </div>
          <div className="flex items-center border-b border-customBorder py-5">
            <ion-icon name="trash-outline"></ion-icon>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
