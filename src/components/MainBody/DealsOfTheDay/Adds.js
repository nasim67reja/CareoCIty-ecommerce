import React from "react";

const Adds = ({ text, img1, img2, img3 }) => {
  return (
    <div className="mx-auto my-12 max-w-st px-4 lg:px-0">
      <div className="flex justify-between gap-4">
        <div className="relative w-full overflow-hidden">
          <img
            src={img1}
            alt="television"
            className="w-full cursor-pointer transition-all duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 right-0 rounded-sm bg-red-500 px-4 py-1 text-sm uppercase text-white">
            {text}
          </div>
        </div>
        <div className="relative w-full overflow-hidden">
          <img
            src={img2}
            alt="cloth heater"
            className="w-full cursor-pointer transition-all duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 right-0 rounded-sm bg-red-500 px-4 py-1 text-sm uppercase text-white">
            {text}
          </div>
        </div>
        <div className="relative hidden w-full overflow-hidden sm:block">
          <img
            src={img3}
            alt="food Processor"
            className="w-full cursor-pointer transition-all duration-500 hover:scale-110"
          />
          <div className="absolute bottom-0 right-0 rounded-sm bg-red-500 px-4 py-1 text-sm uppercase text-white">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adds;
