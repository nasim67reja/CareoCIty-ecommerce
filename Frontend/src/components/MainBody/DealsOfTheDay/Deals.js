import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
// import { deal, topRated } from "./Data";
import Slider from "./Slider";

const Deals = () => {
  const [products, setProducts] = useState([]);
  const [topRated, setTopRated] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchAllProductsHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/v1/products");
      setProducts(data.data.data);
    } catch (error) {
      // setError(error.message);
      console.log(`error: `, error);
    }
    // setIsLoading(false);
  }, []);

  const fetchTopRatedProductsHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/v1/products/top-10-rated"
      );
      setTopRated(data.data.data);
    } catch (error) {
      // setError(error.message);
      console.log(error);
    }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchAllProductsHandler();
    fetchTopRatedProductsHandler();
  }, [fetchAllProductsHandler, fetchTopRatedProductsHandler]);

  const Electronics = products.filter(
    (products) => products.categories === "Electronics"
  );
  const Man = products.filter((products) => products.categories === "Man");
  const Women = products.filter((products) => products.categories === "Women");
  const Home = products.filter((products) => products.categories === "Home");

  return (
    <>
      <div className=" mt-[-15rem]">
        <Slider data={Electronics} />
      </div>
      <Slider data={topRated} title={"Top Rated"} />
      <Slider data={Man} />
      <Slider data={Women} />
      <Slider data={Home} />
    </>
  );
};

export default Deals;
