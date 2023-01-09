import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { URL } from "../../App";
import RatingStar from "./RatingStar";
import { itemActions } from "../../store/cartItem";

export const truncateString = (str, num) => {
  if (str?.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};

const Product = ({ product, customClass }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [clicked, setClicked] = useState(false);

  const name = truncateString(product?.name, 28);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const [activeItem] = cartItems.filter((item) => item.change === true);

  let item = {
    id: product._id,
    image: product.images[0],
    name: product.name,
    categories: product.categories,
    rating: product.ratingsAverage,
    price: product.price,
    quantity: 1,
    change: false,
    new: true,
  };
  const [addCart, setAddCart] = useState(false);

  const postCartItem = useCallback(async () => {
    if (activeItem) {
      if (addCart && activeItem.new) {
        try {
          await axios.post(`${URL}/api/v1/carts`, {
            product: activeItem.id,
            quantity: activeItem.quantity,
          });
          setTimeout(() => {
            document.location.reload();
          }, 500);
        } catch (error) {
          console.log(`error: `, error.response);
        }
      } else if (!activeItem.new) {
        try {
          await axios.patch(`${URL}/api/v1/carts/${activeItem.cartId}`, {
            quantity: activeItem.quantity,
          });
        } catch (error) {
          console.log(`update: `, error);
        }
      }
    }
  }, [addCart, activeItem]);
  useEffect(() => {
    postCartItem();
  }, [postCartItem]);

  const addToCartHandler = () => {
    dispatch(itemActions.storeItem(item));
    setAddCart(true);
  };

  return (
    <div className="relative flex h-full w-full  flex-col  items-center gap-1 ">
      <div
        className="sliderIcon absolute top-3 right-3 cursor-pointer"
        onClick={() => setClicked((prevSt) => !prevSt)}
      >
        {clicked ? (
          <ion-icon name="heart" size="large"></ion-icon>
        ) : (
          <ion-icon
            name="heart-outline"
            size="large"
            onClick={addToCartHandler}
          ></ion-icon>
        )}
      </div>
      <Link
        to={`/${product.categories}/${product.name}`}
        className="w-full"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img
          src={
            mouseEnter
              ? `${URL}/Products/${product.categories}/${product.images[0]}`
              : `${URL}/Products/${product.categories}/${product.images[1]}`
          }
          alt="product_image"
          crossOrigin="anonymous"
          className={`w-full cursor-pointer ${customClass}`}
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        />
      </Link>
      <p className="text-sm text-secondary">{name}</p>
      <div className="flex items-center gap-4">
        <span className="text-sm text-[#0e5ec1]">${product.price}</span>
        {product.priceDiscount > 0 ? (
          <del className="text-sm text-[#bcbcbc]">
            ${product.price + product.priceDiscount}
          </del>
        ) : (
          ""
        )}
      </div>
      <div className="flex gap-1">
        <span>
          <RatingStar rating={product.ratingsAverage} />
        </span>
        <span className="text-sm text-[#888]">
          ({product.ratingsQuantity}) review
        </span>
      </div>
    </div>
  );
};

export default Product;
