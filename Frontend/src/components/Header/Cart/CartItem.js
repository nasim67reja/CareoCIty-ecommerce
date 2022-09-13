import React from "react";
import { useSelector } from "react-redux";

const CartItem = () => {
  const curUserCart = useSelector((state) => state.user.user)?.data.data
    .cartItems;
  //   console.log(curUserCart && curUserCart[0].product.images[0]);
  return (
    <div className="grid grid-cols-[32%_17%_17%_17%_17%] bg-white text-[#828282]">
      {["PRODUCT", "PRICE", "QUANTITY", "TOTAL", "REMOVE"].map((el, i) => (
        <div key={i} className="border-b border-customBorder pb-3">
          <h2 className="text-sm font-medium">{el}</h2>
        </div>
      ))}

      <div className="flex gap-3 py-3">
        <div className="w-1/4">
          {curUserCart && (
            <img
              src={curUserCart[0].product.images[1]}
              alt=""
              crossOrigin="anonymous"
              className="w-full"
            />
          )}
        </div>
        <div className="pr-2">
          {/* <p className="text-sm">{curUserCart[0].product.name}</p> */}
        </div>
      </div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  );
};

export default CartItem;
