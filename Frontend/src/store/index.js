import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./currentUser";
import allProductsReducer from "./allProducts";

const store = configureStore({
  reducer: { user: userReducer, allProducts: allProductsReducer },
});

export default store;
