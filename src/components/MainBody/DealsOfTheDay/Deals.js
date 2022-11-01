import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../../App";
import Loading from "../../Reuse/Loading";
import Adds from "./Adds";
import Slider from "./Slider";

import foodProcessor from "../../../assets/adds/foodProcessor.webp";
import heat from "../../../assets/adds/heat.webp";
import tv from "../../../assets/adds/tv.webp";

import bag from "../../../assets/offers/bag.webp";
import toys from "../../../assets/offers/toys.webp";
import women from "../../../assets/offers/women.webp";

const Deals = () => {
  const [topRated, setTopRated] = useState([]);

  const fetchTopRatedProductsHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(`${URL}/api/v1/products/top-10-rated`);
      setTopRated(data.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTopRatedProductsHandler();
  }, [fetchTopRatedProductsHandler]);

  const products = useSelector((state) => state.allProducts.allProducts);

  const Electronics =
    products &&
    products.filter((products) => products.categories === "Electronics");
  const Man =
    products && products.filter((products) => products.categories === "Man");
  const Women =
    products && products.filter((products) => products.categories === "Women");
  const Home =
    products && products.filter((products) => products.categories === "Home");

  let isLoading = false;
  if (!products) isLoading = true;

  let isLoadingForTopRated = false;
  if (topRated.length < 1) isLoadingForTopRated = true;

  return (
    <>
      <div className="relative z-10 mt-[-15rem]">
        {isLoading && <Loading classes="my-8" height="30" width="30" />}
        <Slider data={Electronics} />
      </div>
      <Adds text="Your ads  here" img1={foodProcessor} img2={heat} img3={tv} />
      <div>
        {isLoadingForTopRated && (
          <Loading classes="my-8" height="30" width="30" />
        )}
        {!isLoadingForTopRated && (
          <Slider data={topRated} title={"Top Rated"} route="top-rated" />
        )}
      </div>
      <Adds
        text="Your special offers here"
        img1={bag}
        img2={toys}
        img3={women}
      />

      {[Man, Women, Home].map((el, i) => (
        <div key={i}>
          {isLoading && <Loading classes="my-8" height="30" width="30" />}
          <Slider data={el} />
        </div>
      ))}
    </>
  );
};

export default Deals;
