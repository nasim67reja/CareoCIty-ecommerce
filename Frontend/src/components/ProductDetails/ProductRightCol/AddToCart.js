import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ productId, quantity }) => {
  //   console.log(productId, quantity);
  // http://127.0.0.1:8000/api/v1/carts
  const navigate = useNavigate();

  const postCartItem = async () => {
    try {
      await axios.post(" http://127.0.0.1:8000/api/v1/carts", {
        product: productId,
        quantity,
      });
      setTimeout(() => {
        navigate("/cart");
        // window.location.assign("/");
      }, 1500);
    } catch (error) {
      // enter your logic for when there is an error (ex. error toast)
      console.log(`error: `, error.response);
    }
  };
  return (
    <button
      className="flex items-center gap-2 rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white"
      onClick={() => postCartItem()}
    >
      <span className="block translate-y-[2px]">
        <ion-icon name="cart-outline"></ion-icon>
      </span>
      <span> Add to Cart</span>
    </button>
  );
};

export default AddToCart;
