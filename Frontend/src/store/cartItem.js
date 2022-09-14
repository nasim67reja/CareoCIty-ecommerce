import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const itemSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    storeItem(state, action) {
      let item = action.payload;
      const existingItem = state.cart.find((el) => el.id === item.id);
      state.cart.forEach((item) => (item.change = false));
      if (!existingItem) {
        item.change = true;
        state.cart.push(item);
      } else {
        existingItem.change = true;
        existingItem.new = false;
        existingItem.quantity = existingItem.quantity + item.quantity;
      }
    },
    storeItemFromServer(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (Element) => Element.id !== action.payload
      );
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;
