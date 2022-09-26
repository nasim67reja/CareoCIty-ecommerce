import React from "react";
import ProductRightCol from "../components/ProductDetails/ProductRightCol/ProductRightCol";

const ProductDetails = () => {
  //   console.log(params);
  return (
    <div className="mx-auto grid max-w-st grid-cols-1 gap-10  px-8 py-12 md:grid-cols-[20%_78%]">
      <div className="border border-black">1</div>
      <ProductRightCol />
    </div>
  );
};

export default ProductDetails;
