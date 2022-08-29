import { useCallback, useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import MainHeader from "../components/Header/MainHeader";
import Hero from "../components/Hero/Hero";
import MainBody from "../components/MainBody/MainBody";

const Main = () => {
  const [products, setProducts] = useState([]);

  const fetchAllProductsHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      console.log("request is processed");
      const response = await fetch(
        "http://127.0.0.1:8000/api/v1/products/top-10-rated"
      );
      if (!response.ok) throw new Error("Something went Wrong");
      const data = await response.json();
      setProducts(data.data.data);
    } catch (error) {
      // setError(error.message);
      console.log(error);
    }
    // setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   fetchAllProductsHandler();
  // }, [fetchAllProductsHandler]);
  const fetchHandler = () => {
    fetchAllProductsHandler();
  };
  console.log(products);

  return (
    <>
      {/* <MainHeader /> */}
      {/* <Hero /> */}
      {/* <MainBody /> */}
      <button className="bg-red-500 p-3 text-3xl" onClick={fetchHandler}>
        hello
      </button>

      {/* <Footer /> */}
    </>
  );
};

export default Main;
