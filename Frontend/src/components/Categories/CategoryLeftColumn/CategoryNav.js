import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const CategoryNav = () => {
  const [category, setCategory] = useState("");
  const getProductCategory = useCallback(async () => {
    // setIsLoading(true);
    // setError(null);
    try {
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/v1/products/product-category"
      );
      setCategory(data.data.category);
    } catch (error) {
      // setError(error.message);
      console.log(`error: `, error);
    }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    getProductCategory();
  }, [getProductCategory]);

  return (
    <div className="  border border-customBorder">
      <h3 className="bg-secondary py-3 px-4 text-white">Category</h3>
      <ul className="flex flex-col gap-2 ">
        {category &&
          category.map((el, i) => (
            <li key={i} className="border-b border-customBorder">
              <NavLink
                to={`/${el._id}`}
                className="block w-full  py-2 px-4"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "",
                  };
                }}
              >
                {el._id}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryNav;
