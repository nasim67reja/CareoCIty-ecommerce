import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import CateProd from "./CateProd";

const CategoryRightColumn = ({ params }) => {
  const [products, setProducts] = useState("");

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

  useEffect(() => {
    fetchAllProductsHandler();
  }, [fetchAllProductsHandler]);

  const Electronics =
    products &&
    products.filter((products) => products.categories === "Electronics");
  const Man =
    products && products.filter((products) => products.categories === "Man");
  const Women =
    products && products.filter((products) => products.categories === "Women");
  const Home =
    products && products.filter((products) => products.categories === "Home");

  const [Category] = [Electronics, Man, Women, Home].filter(
    (product) => product[0]?.categories === params
  );

  return (
    <div>
      <CateProd category={Category} />
    </div>
  );
};

export default CategoryRightColumn;
