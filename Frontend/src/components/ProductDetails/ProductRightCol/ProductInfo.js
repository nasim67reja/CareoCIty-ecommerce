import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../MainBody/Product";

const ProductInfo = () => {
  const params = useParams();
  const products = useSelector((state) => state.allProducts.allProducts);
  // if (!products) return;
  const [product] = products
    ? products.filter((product) => product.name === params.productId)
    : "";

  const randomNum = Math.ceil(Math.random() * 4);
  const productCategory = products
    ? products
        .filter((product) => product.categories === params.categoriesId)
        .slice(randomNum, randomNum + 3)
    : "";

  const [imgSrc, setImgSrc] = useState(product ? product.images[1] : "");

  return (
    <div>
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
                <span className="text-[#888]">
                  {product.ratingsQuantity} review
                </span>
              </div>
              <p className="text-sm text-[#888]">{product.summary}</p>
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
