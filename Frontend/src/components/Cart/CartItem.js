import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import RatingStar from "../Reuse/RatingStar";
import { itemActions } from "../../store/cartItem";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
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
    <>
      {item && (
        <>
          <div className="flex gap-4 border-b border-customBorder py-5 pr-6">
            <div className="w-1/4">
              <img
                src={item.image}
                alt=""
                crossOrigin="anonymous"
                className="w-full"
              />
            </div>
            <div className="pr-2">
              <p className="mb-2 text-sm">{item.name}</p>
              <RatingStar rating={item.rating} />
            </div>
          </div>
          <div className="flex items-center border-b border-customBorder py-5 text-sm">
            $ {item.price}
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
            $ {quantity * item.price}
          </div>
          <div className="flex items-center border-b border-customBorder py-5">
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
