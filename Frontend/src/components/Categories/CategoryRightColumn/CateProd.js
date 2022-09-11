import React from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../../MainBody/Product";
import ListView from "./ListView";

const CateProd = ({ category }) => {
  const [searchParam] = useSearchParams();

  return (
    <div>
      {searchParam.get("view") === "grid" || !searchParam.get("view") ? (
        <ul className="mx-auto flex flex-wrap items-center justify-center gap-3">
          {category?.map((product, i) => (
            <div
              key={i}
              className="h-[25rem] w-[18.5rem] border border-customBorder bg-white"
            >
              <Product product={product} customClass="h-[20rem]" />
            </div>
          ))}
        </ul>
      ) : (
        <ul className="mx-auto flex flex-wrap items-center justify-center gap-3">
          {category?.map((product, i) => (
            <ListView product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CateProd;
