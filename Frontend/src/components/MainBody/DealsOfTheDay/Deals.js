import React, { useCallback, useEffect, useState } from "react";
// import { deal, topRated } from "./Data";
import Slider from "./Slider";

const Deals = () => {
  const [movies, setMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/v1/products");
      if (!response.ok) throw new Error("Something went Wrong");
      const data = await response.json();
      setMovies(data.data.products);
    } catch (error) {
      // setError(error.message);
      console.log(error);
    }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);
  return (
    <>
      <div className=" mt-[-15rem]">
        {/* <Slider data={deal} /> */}
        <Slider data={movies} />
      </div>
      {/* <Slider data={movies} /> */}
      {/* <Slider data={topRated} /> */}
    </>
  );
};

export default Deals;
