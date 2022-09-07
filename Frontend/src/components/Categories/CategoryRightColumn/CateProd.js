import React from "react";
import { SingleProduct } from "../../MainBody/DealsOfTheDay/Slider";

const CateProd = ({ category }) => {
  return (
    <div>
      <ul className="grid grid-cols-4">
        {category?.map((product, i) => (
          // <li key={i}>{product.name}</li>
          <SingleProduct product={product} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default CateProd;
