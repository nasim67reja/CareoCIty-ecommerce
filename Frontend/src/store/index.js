import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: authSlice.reducer,
});
export const authActions = authSlice.actions;

export default store;
