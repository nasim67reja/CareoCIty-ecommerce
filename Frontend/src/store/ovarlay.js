import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  backdropVisible: false,
  reviewOvarlayIsVisible: false,
};

const ovarlaySlice = createSlice({
  name: "overlay-controller",
  initialState: initialUserState,
  reducers: {
    backdropVisible(state) {
      state.backdropVisible = true;
    },
    backdropHidden(state) {
      state.backdropVisible = false;
    },
    reviewOvarlayIsVisible(state) {
      state.reviewOvarlayIsVisible = true;
    },
    reviewOvarlayIsHidden(state) {
      state.reviewOvarlayIsVisible = false;
    },
  },
});

export const overlayActions = ovarlaySlice.actions;

export default ovarlaySlice.reducer;
