import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { URL } from "../../../App";
import Loading from "../../Reuse/Loading";

const CategoryNav = () => {
  const [category, setCategory] = useState("");
  const location = useLocation();
  const getProductCategory = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${URL}/api/v1/products/product-category`
      );
      setCategory(data.data.category);
    } catch (error) {
      console.log(`error: `, error);
    }
  }, []);

  useEffect(() => {
    getProductCategory();
  }, [getProductCategory]);
  let loading = false;
  if (!category) loading = true;

  return (
    <>
      {loading && (
        <div className="flex h-32 items-center justify-center gap-2">
          <Loading height="15" width="15" />
          <div>Loading..</div>
        </div>
      )}
      {!loading && (
        <div className="  border border-customBorder">
          <h3 className="bg-secondary py-3 px-4 text-white">Category</h3>
          <ul className="flex flex-col gap-2 ">
            {category &&
              category.map((el, i) => (
                <li key={i} className="border-b border-customBorder">
                  <NavLink
                    // to={`/${el._id}`}
                    to={`/${el._id}${location.search}`}
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
      )}
    </>
  );
};

export default CategoryNav;
