import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "./Slider";

const Deals = () => {
  // const [products, setProducts] = useState([]);
  const [topRated, setTopRated] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const dispatch = useDispatch();

  // const fetchAllProductsHandler = useCallback(async () => {
  //   // setIsLoading(true);
  //   // setError(null);
  //   try {
  //     const { data } = await axios.get("http://127.0.0.1:8000/api/v1/products");
  //     setProducts(data.data.data);
  //     dispatch(productsActions.storeProducts(data.data.data));
  //   } catch (error) {
  //     // setError(error.message);
  //     console.log(`error: `, error);
  //   }
  //   // setIsLoading(false);
  // }, []);

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
    fetchTopRatedProductsHandler();
  }, [fetchTopRatedProductsHandler]);

  const products = useSelector((state) => state.allProducts.allProducts);

  // const Electronics = products.filter(
  //   (products) => products.categories === "Electronics"
  // );
  // const Man = products.filter((products) => products.categories === "Man");
  // const Women = products.filter((products) => products.categories === "Women");
  // const Home = products.filter((products) => products.categories === "Home");
  const Electronics =
    products &&
    products.filter((products) => products.categories === "Electronics");
  const Man =
    products && products.filter((products) => products.categories === "Man");
  const Women =
    products && products.filter((products) => products.categories === "Women");
  const Home =
    products && products.filter((products) => products.categories === "Home");

  return (
    <>
      <div className=" mt-[-15rem]">
        <Slider data={Electronics} />
      </div>
      <Slider data={topRated} title={"Top Rated"} route="top-rated" />
      <Slider data={Man} />
      <Slider data={Women} />
      <Slider data={Home} />
    </>
  );
};

export default Deals;
