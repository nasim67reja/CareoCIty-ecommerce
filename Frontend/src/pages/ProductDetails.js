import React from "react";
import { useParams } from "react-router-dom";
import ProductRightCol from "../components/ProductDetails/ProductRightCol/ProductRightCol";

const ProductDetails = () => {
  const params = useParams();
  //   console.log(params);
  return (
    <div className="mx-auto grid max-w-st grid-cols-[20%_78%] gap-10  px-8 py-12">
      <div className="border border-black">1</div>
      <ProductRightCol />
    </div>
  );
};

export default ProductDetails;
