import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const curUserCart = useSelector((state) => state.user.user)?.data.data
    .cartItems;
  return (
    <div className="mx-auto max-w-st px-4 py-6">
      <div className="grid grid-cols-[32%_17%_17%_17%_17%]  bg-white text-[#828282]">
        {["PRODUCT", "PRICE", "QUANTITY", "TOTAL", "REMOVE"].map((el, i) => (
          <div key={i} className="border-b border-customBorder pb-3">
            <h2 className="text-sm font-medium">{el}</h2>
          </div>
        ))}
        {curUserCart &&
          curUserCart.map((el, i) => <CartItem item={el} key={i} />)}
      </div>
    </div>
  );
};

export default Cart;
