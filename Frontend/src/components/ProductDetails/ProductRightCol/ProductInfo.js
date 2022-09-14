import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsActions } from "../../../store/allProducts";
import RatingStar from "../../Reuse/RatingStar";
import AddToCart from "./AddToCart";
import ImgSec from "./ImgSec";
import RelatedProd from "./RelatedProd";
import Summary from "./Summary";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="bg-white px-4">
      <div className="grid grid-cols-2  bg-white ">
        {products && (
          <>
            <ImgSec product={product} />
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
                <RatingStar rating={product.ratingsAverage} />
                <span className="text-textColor">
                  {product.ratingsQuantity} review
                </span>
              </div>
              <p className="text-sm text-textColor">{product.description}</p>
              <ul className="mt-8 flex flex-col gap-6">
                <li className="flex items-center gap-20">
                  <div className="text-sm font-semibold">Quantity :</div>
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
                </li>
                <li className="flex items-center gap-20">
                  <div className="text-sm font-semibold">Subtotal :</div>
                  <div className="text-xl font-bold text-[#0e5ec1]">
                    ${product.price * quantity}
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
                <AddToCart product={product} quantity={quantity} />
                <button className="rounded-sm border border-orange-400 py-2 px-4 text-sm transition-all hover:bg-blue-500 hover:text-white">
                  Buy it now
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <Summary product={product} />
      <RelatedProd productCategory={productCategory} product={product} />
    </div>
  );
};

export default ProductInfo;
