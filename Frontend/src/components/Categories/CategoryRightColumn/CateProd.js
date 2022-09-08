import React from "react";
import Product from "../../MainBody/Product";

const CateProd = ({ category }) => {
  return (
    <div>
      <ul className="mx-auto flex flex-wrap items-center justify-center gap-3  ">
        {category?.map((product, i) => (
          <div
            key={i}
            className="h-[25rem] w-[18.5rem] border border-customBorder bg-white"
          >
            <Product product={product} customClass="h-[20rem]" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CateProd;
