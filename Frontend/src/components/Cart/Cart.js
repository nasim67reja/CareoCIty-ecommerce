import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ customClass }) => {
  const cartItems = useSelector((state) => state.cart.cart);
  const total =
    cartItems &&
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((prev, cur) => prev + cur, 0);

  let isLoading = true;
  if (cartItems.length > 0) isLoading = false;
  return (
    <div className={`mx-auto  px-4 py-12 ${customClass}`}>
      {isLoading ? (
        <div className="flex min-h-screen items-center justify-center">
          <div>Loading..</div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-[32%_17%_17%_17%_17%]  bg-white text-[#828282]">
            {["PRODUCT", "PRICE", "QUANTITY", "TOTAL", "REMOVE"].map(
              (el, i) => (
                <div key={i} className="border-b border-customBorder pb-5">
                  <h2 className="text-sm font-medium">{el}</h2>
                </div>
              )
            )}
            {cartItems &&
              cartItems.map((el, i) => <CartItem item={el} key={i} />)}
          </div>
          <div className="mt-10 flex justify-between">
            <h2 className="text-lg font-semibold text-secondary">SUBTOTAL</h2>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold">$ {total} USD</p>
              <p className="text-sm text-[#828282]">
                Taxes and shipping calculated at checkout
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
