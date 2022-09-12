import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./currentUser";
import allProductsReducer from "./allProducts";
import ovarlayReducer from "./ovarlay";

const store = configureStore({
  reducer: {
    user: userReducer,
    allProducts: allProductsReducer,
    overlay: ovarlayReducer,
  },
});

export default store;
