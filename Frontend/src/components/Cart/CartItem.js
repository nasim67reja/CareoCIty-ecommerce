import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import RatingStar from "../Reuse/RatingStar";
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

  const increaseCartItem = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/v1/carts/${item.cartId}`, {
        quantity: item.quantity + 1,
      });
    } catch (error) {
      console.log(`update: `, error);
    }
  };
  const increaseHandler = () => {
    dispatch(itemActions.increaseItem(item));
    increaseCartItem();
  };

  const decreaseCartItem = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/v1/carts/${item.cartId}`, {
        quantity: item.quantity - 1,
      });
    } catch (error) {
      console.log(`update: `, error);
    }
  };
  const decreaseHandler = () => {
    dispatch(itemActions.decreaseItem(item));
    decreaseCartItem();
  };

  const updateCartItem = async () => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/v1/carts/${item.cartId}`, {
        quantity: item.quantity,
      });
    } catch (error) {
      console.log(`update: `, error);
    }
  };
  const updateQuantityHandler = (e) => {
    dispatch(itemActions.UpdateItem({ item, value: e.target.value }));
    setTimeout(() => {
      updateCartItem();
    }, 1000);
  };

  return (
    <>
      {item && (
        <>
          <div className="flex gap-4 border-b border-customBorder py-6 pr-6">
            <div className="w-1/4 md:w-[15%] lg:w-[12%]">
              <img
                src={item.image}
                alt={item.name}
                crossOrigin="anonymous"
                className="w-full xl:w-[80%]"
              />
            </div>
            <div className="pr-2">
              <p className="mb-2 text-sm">{item.name}</p>
              <RatingStar rating={item.rating} />
            </div>
          </div>
          <div className="flex items-center border-b border-customBorder  text-sm">
            $ {item.price}
          </div>
          <div className="flex items-center border-b border-customBorder ">
            <div className="flex w-20">
              <button
                className="border border-customBorder px-3"
                onClick={decreaseHandler}
              >
                -
              </button>
              <input
                className="w-10 border border-customBorder px-2 focus:outline-none"
                type="number"
                min="1"
                value={item.quantity}
                onChange={updateQuantityHandler}
              />
              <button
                className="border border-customBorder px-3"
                onClick={increaseHandler}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex items-center border-b border-customBorder">
            $ {item.quantity * item.price}
          </div>
          <div className="flex items-center border-b border-customBorder">
            <span className="cursor-pointer" onClick={deleteItemHandler}>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </div>
        </>
      )}
    </>
  );
};

export default CartItem;