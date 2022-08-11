// import React from "react";
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

const Deals = () => {
  return (
    <div className="mx-auto mb-10 max-w-[130rem] border-2 border-black bg-white">
      <div className="sec mx-4 mb-10 flex gap-2 overflow-x-scroll">
        {deal.map((product, i) => (
          <div className="testclass" key={i}>
            <img src={product.img} alt="" />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
