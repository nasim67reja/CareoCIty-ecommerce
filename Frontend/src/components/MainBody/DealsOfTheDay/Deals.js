// import React from "react";
import { useState } from "react";
import img1 from "../../../assets/jacket1.webp";
import img2 from "../../../assets/jacket2.webp";

const deal = [
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
  { img: img1, imgH: img2, title: "Winter Brand New Casual", price: 30.2 },
];

const SingleProduct = ({ product }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div className="testclass flex flex-col items-center justify-center gap-1 border-2 border-black">
      <img
        src={mouseEnter ? product.imgH : product.img}
        alt=""
        className="w-full cursor-pointer border-2 border-blue-700"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      />
      <p className="text-sm">{product.title}</p>
      <p className="text-sm">{product.price}</p>
    </div>
  );
};

const Deals = () => {
  return (
    <div className="mx-auto mb-10 mt-[-10rem] max-w-[130rem] border-2 border-black bg-white">
      <div className="mb-6 flex items-center justify-between border-b border-tertiary p-4">
        <h2 className="fontm text-xl">Deals of the Day</h2>
        <button className="rounded border bg-blue-600 px-3 py-2 text-white transition-all hover:bg-white hover:text-primary">
          View all
        </button>
      </div>
      <div className="sec mx-4 mb-10 flex gap-2 overflow-x-scroll">
        {deal.map((product, i) => (
          <SingleProduct product={product} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Deals;
