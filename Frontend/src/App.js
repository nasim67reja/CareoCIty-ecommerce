import { Fragment, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Categories from "./pages/Categories";
import ProductDetails from "./pages/ProductDetails";
import MainBody from "./components/MainBody/MainBody";
import AccountInfo from "./components/Account/AccountInfo/AccountInfo";
import Profile from "./components/Account/AccountInfo/Profile";
import { productsActions } from "./store/allProducts";

axios.defaults.withCredentials = true; //it's for getting and storing cookies in browser for future request

export default function App() {
  const dispatch = useDispatch();

  const fetchAllProductsHandler = useCallback(async () => {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/v1/products");
      dispatch(productsActions.storeProducts(data.data.data));
    } catch (error) {
      console.log(`error: `, error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAllProductsHandler();
  }, [fetchAllProductsHandler]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<MainBody />} />
          <Route path="account" element={<Account />}>
            <Route index element={<Profile />} />
            <Route path=":accountId" element={<AccountInfo />} />
          </Route>
          <Route path=":categoriesId" element={<Categories />}></Route>
          <Route
            path=":categoriesId/:productId"
            element={<ProductDetails />}
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </Fragment>
  );
}
