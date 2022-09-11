import React from "react";

const ListView = ({ product }) => {
  return (
    <>
      {product && (
        <div className="grid grid-cols-[30%_75%] gap-4">
          <div>
            <img src={product.images[1]} crossOrigin="anonymous" alt="" />
          </div>
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.summary}</p>
            <button className="mt-6 rounded-sm bg-white py-1 px-3">
              Add to cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ListView;
