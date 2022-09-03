import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./currentUser";

// const initialAuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "authentication",
//   initialState: initialAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = !state.isAuthenticated;
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: authSlice.reducer,
// });
// export const authActions = authSlice.actions;
const store = configureStore({
  reducer: { user: userReducer },
});

export default store;
