import React from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../../MainBody/Product";

const CateProd = ({ category }) => {
  const [searchParam] = useSearchParams();

  const classes =
    searchParam.get("view") === "grid" || !searchParam.get("view")
      ? "flex flex-wrap items-center justify-center gap-3"
      : "flex flex-col";

  return (
    <div>
      <ul className={`mx-auto ${classes}`}>
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
