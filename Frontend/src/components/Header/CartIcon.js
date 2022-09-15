import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { itemActions } from "../../store/cartItem";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItemFromCart = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/v1/carts/${item.cartId}`);
    } catch (error) {
      console.log(`update: `, error);
    }
  };

  const deleteItemHandler = () => {
    dispatch(itemActions.deleteItem(item.id));
    deleteItemFromCart();
  };
  return (
    <div className="relative flex items-center gap-3 border-b border-customBorder pb-3">
      <span
        className="closeIcon absolute -right-2 top-0 cursor-pointer text-black"
        onClick={deleteItemHandler}
      >
        <ion-icon name="close-outline"></ion-icon>
      </span>
      <img
        className="w-16"
        src={item.image}
        alt={item.name}
        crossOrigin="anonymous"
      />
      <div className="pr-5">
        <h3>{item.name}</h3>
        <p className="text-sm text-[#828282]">$ {item.price}</p>
        <p className="text-sm">quantity : {item.quantity}</p>
      </div>
    </div>
  );
};

const CartIcon = () => {
  const location = useLocation();

  let ovarlayCartIsShown = true;
  if (location.pathname === "/cart") ovarlayCartIsShown = false;

  const cartItems = useSelector((state) => state.cart.cart);
  const cartTotalItem =
    cartItems &&
    cartItems
      .map((item) => item.quantity)
      .reduce((prev, curv) => prev + curv, 0);
  const totalPrice =
    cartItems &&
    cartItems
      .map((item) => item.price * item.quantity)
      .reduce((prev, cur) => prev + cur, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <li className="customI group relative translate-y-[2px] cursor-pointer text-white">
          <div className="absolute -right-3 -top-3 rounded-full bg-orange-400 px-2 py-[1px]">
            {cartTotalItem}
          </div>
          <Link to="/cart" className="">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
          {ovarlayCartIsShown && (
            <div className="absolute right-0 z-[100] hidden w-96  rounded-sm bg-white px-6 py-6 text-primary shadow-md group-hover:block">
              <div className="mb-4 flex flex-col gap-3 ">
                {cartItems.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="flex justify-between">
                <h2 className="mb-4 font-semibold">SUBTOTAL</h2>
                <p className="text-[#828282]">$ {totalPrice}</p>
              </div>
              <Link
                to="/cart"
                className="float-right rounded-sm bg-blue-600 px-3 py-1 text-white"
              >
                view cart
              </Link>
            </div>
          )}
        </li>
      )}
    </>
  );
};

export default CartIcon;
