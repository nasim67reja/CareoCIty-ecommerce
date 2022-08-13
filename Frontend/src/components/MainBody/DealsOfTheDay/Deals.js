import React from "react";
import { deal, topRated } from "./Data";
import Slider from "./Slider";

const Deals = () => {
  return (
    <>
      <div className=" mt-[-15rem]">
        <Slider data={deal} />
      </div>
      <Slider data={topRated} />
      <Slider data={topRated} />
    </>
  );
};

export default Deals;
