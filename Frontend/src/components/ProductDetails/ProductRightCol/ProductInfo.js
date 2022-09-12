import axios from "axios";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../MainBody/Product";
import Reviews from "./Reviews";
import { productsActions } from "../../../store/allProducts";

const ProductInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.allProducts);

  const [product] = products
    ? products.filter((product) => product.name === params.productId)
    : "";

  const getProduct = useCallback(async () => {
    if (product) {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:8000/api/v1/products/${product._id}`
        );
        dispatch(productsActions.storeProduct(data.data.data));
      } catch (error) {
        console.log(`error: `, error.response);
      }
    }
  }, [product, dispatch]);
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  const randomNum = Math.ceil(Math.random() * 4);
  const productCategory = products
    ? products
        .filter((product) => product.categories === params.categoriesId)
        .slice(randomNum, randomNum + 3)
    : "";

  const [imgSrc, setImgSrc] = useState(product ? product.images[1] : "");

  const [descriptionIsShown, setDescriptionIsShown] = useState(true);
  const [reviewIsShown, setReviewIsShown] = useState(false);
  const [shippingIsShown, setShippingIsShown] = useState(false);

  const hiddenClasses = "hidden";
  const activeClasses =
    "block border border-customBorder p-4 text-sm text-textColor rounded-sm";

  return (
    <div className="bg-white px-4">
      <div className="grid grid-cols-2  bg-white ">
        {products && (
          <>
            <div className="flex flex-col gap-4 ">
              <img
                crossOrigin="anonymous"
                src={imgSrc ? imgSrc : product.images[1]}
                alt={product.name}
              />
              <div className="flex gap-4 px-4">
                {product.images.map((image, i) => (
                  <img
                    key={i}
                    crossOrigin="anonymous"
                    src={image}
                    alt={product.name}
                    className="h-28 w-24 cursor-pointer"
                    onClick={(e) => {
                      setImgSrc(e.target.src);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="py-2 pl-10">
              <h2 className="text-3xl">{product.name}</h2>
              <div className="my-2 flex items-center gap-4">
                <span className="text-xl font-bold text-[#0e5ec1]">
                  ${product.price}
                </span>
                {product.priceDiscount > 0 ? (
                  <del className="text-[#bcbcbc]">
                    ${product.price + product.priceDiscount}
                  </del>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-6 flex items-center gap-4">
                <span className="text-orange-500">
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>
                </span>
                <span className="text-textColor">
                  {product.ratingsQuantity} review
                </span>
              </div>
              <p className="text-sm text-textColor">{product.description}</p>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="flex items-center gap-20">
                  <div className="text-sm font-semibold">Quantity :</div>
                  <div className="flex w-20">
                    <button className="border border-customBorder px-3">
                      -
                    </button>
                    <input
                      className="w-10 border border-customBorder px-3 focus:outline-none"
                      type="number"
                      min="1"
                      // value="1"
                    />
                    <button className="border border-customBorder px-3">
                      +
                    </button>
                  </div>
                </li>
                <li className="flex items-center gap-20">
                  <div className="text-sm font-semibold">Subtotal :</div>
                  <div className="text-xl font-bold text-[#0e5ec1]">
                    ${product.price}
                  </div>
                </li>
                <li className="flex items-center gap-16">
                  <div className="text-sm font-semibold">Availability :</div>
                  <div className="text-sm text-orange-400">Many In Stock</div>
                </li>
                <li className="flex items-center gap-20">
                  <div className="text-sm font-semibold">Category :</div>
                  <div className="text-sm">{product.categories}</div>
                </li>
              </ul>
              <div className="mt-6 flex gap-4">
                <button className="flex items-center gap-2 rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white">
                  <span className="block translate-y-[2px]">
                    <ion-icon name="cart-outline"></ion-icon>
                  </span>
                  <span> Add to Cart</span>
                </button>
                <button className="rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white">
                  Buy it now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-14 mb-6">
        <div className="my-4 flex gap-2">
          <button
            className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
              descriptionIsShown ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => {
              setDescriptionIsShown(true);
              setReviewIsShown(false);
              setShippingIsShown(false);
            }}
          >
            Description
          </button>
          <button
            className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
              reviewIsShown ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => {
              setDescriptionIsShown(false);
              setReviewIsShown(true);
              setShippingIsShown(false);
            }}
          >
            Reviews
          </button>
          <button
            className={`rounded-sm border border-orange-400 px-5 py-2 text-sm transition-all hover:bg-blue-600 hover:text-white ${
              shippingIsShown ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => {
              setDescriptionIsShown(false);
              setReviewIsShown(false);
              setShippingIsShown(true);
            }}
          >
            Shipping Details
          </button>
        </div>

        <div
          className={`${descriptionIsShown ? activeClasses : hiddenClasses}`}
        >
          {product?.summary}
        </div>
        <div className={`${reviewIsShown ? activeClasses : hiddenClasses}`}>
          <Reviews />
        </div>
        <div
          className={`px-6 ${shippingIsShown ? activeClasses : hiddenClasses}`}
        >
          <h3 className="my-3  text-base text-textColor">Returns Policy</h3>
          <p>
            You may return most new, unopened items within 30 days of delivery
            for a full refund. We'll also pay the return shipping costs if the
            return is a result of our error (you received an incorrect or
            defective item, etc.).
          </p>
          <p className="my-3">
            You should expect to receive your refund within four weeks of giving
            your package to the return shipper, however, in many cases you will
            receive a refund more quickly. This time period includes the transit
            time for us to receive your return from the shipper (5 to 10
            business days), the time it takes us to process your return once we
            receive it (3 to 5 business days), and the time it takes your bank
            to process our refund request (5 to 10 business days).
          </p>
          <p>
            If you need to return an item, simply login to your account, view
            the order using the 'Complete Orders' link under the My Account menu
            and click the Return Item(s) button. We'll notify you via e-mail of
            your refund once we've received and processed the returned item.
          </p>
          <h3 className="my-3  text-base text-textColor"> Shipping</h3>
          <p>
            We can ship to virtually any address in the world. Note that there
            are restrictions on some products, and some products cannot be
            shipped to international destinations.
          </p>
          <p className="my-3">
            When you place an order, we will estimate shipping and delivery
            dates for you based on the availability of your items and the
            shipping options you choose. Depending on the shipping provider you
            choose, shipping date estimates may appear on the shipping quotes
            page.
          </p>
          <p>
            Please also note that the shipping rates for many items we sell are
            weight-based. The weight of any such item can be found on its detail
            page. To reflect the policies of the shipping companies we use, all
            weights will be rounded up to the next full pound.
          </p>
        </div>
      </div>
      <div>
        <h3 className="my-8 text-xl">Related Products</h3>
        <div className="flex gap-6">
          {productCategory &&
            productCategory.map((product, i) => (
              <div
                key={i}
                className="h-[25rem] w-[18.5rem] border border-customBorder bg-white"
              >
                <Product product={product} customClass="h-[20rem]" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
