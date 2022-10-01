import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = ({ customClass }) => {
  const user = useSelector((state) => state.user.user);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const total =
    cartItems &&
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((prev, cur) => prev + cur, 0);

  let isLoading = false;
  if (cartItems.length < 1) isLoading = true;

  let isLoggedIn = true;
  if (user === undefined) isLoggedIn = false;
  return (
    <>
      {!isLoggedIn && (
        <>
          <div className="flex h-screen items-center justify-center text-xl">
            you are not logged in 😢. Please logged in to access this route
          </div>
          {setTimeout(() => {
            navigate("/login");
          }, 4000)}
        </>
      )}

      {isLoading && (
        <div className="flex h-[90vh] items-center justify-center text-xl">
          Your cart is empty 😢
        </div>
      )}
      {isLoggedIn && !isLoading && (
        <div className={`mx-auto  px-4 py-12 ${customClass}`}>
          <div>
            <div className="grid bg-white  text-[#828282] sm:grid-cols-[32%_17%_17%_17%_17%]">
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
        </div>
      )}
    </>
  );
};

export default Cart;
