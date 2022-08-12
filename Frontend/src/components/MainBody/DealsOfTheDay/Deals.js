// import React from "react";
import { useEffect, useRef, useState } from "react";
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
  const [clicked, setClicked] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    console.log(element.current.offsetWidth);
  }, []);
  return (
    <div
      className="testclass relative flex flex-col items-center  gap-1 border-2 border-black"
      ref={element}
    >
      <div
        className="sliderIcon absolute top-0 right-0 cursor-pointer"
        onClick={() => setClicked((prevSt) => !prevSt)}
      >
        {clicked ? (
          <ion-icon name="heart" size="large"></ion-icon>
        ) : (
          <ion-icon name="heart-outline" size="large"></ion-icon>
        )}
      </div>
      <img
        src={mouseEnter ? product.imgH : product.img}
        alt=""
        className="mb-4 w-full cursor-pointer border-2 border-blue-700"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
      />
      <p className="text-sm">{product.title}</p>
      <p className="text-sm text-orange-500">{product.price}</p>
    </div>
  );
};

const Deals = () => {
  return (
    <div className="  mx-auto mb-10 mt-[-15rem] max-w-[130rem] border-2 border-black bg-white">
      <div className="mb-6 flex items-center justify-between border-b border-[#dcdcdc] p-4">
        <h2 className="fontm text-xl">Deals of the Day</h2>
        <button className="rounded border bg-blue-600 px-3 py-2 text-white transition-all hover:bg-white hover:text-primary">
          View all
        </button>
      </div>

      <div className="group relative w-full ">
        <div className="absolute left-0 top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer items-center justify-center rounded-r-lg bg-backg px-2 py-7 shadow-lg group-hover:flex">
          <ion-icon name="chevron-back-outline" size="large"></ion-icon>
        </div>

        <div className="absolute -right-1 top-[50%] z-10 hidden translate-y-[-50%] cursor-pointer items-center justify-center rounded-r-lg bg-backg px-2 py-7 shadow-lg group-hover:flex">
          <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
        </div>
        <div className="sec mx-4 mb-10 flex gap-2 overflow-x-scroll">
          {deal.map((product, i) => (
            <SingleProduct product={product} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
