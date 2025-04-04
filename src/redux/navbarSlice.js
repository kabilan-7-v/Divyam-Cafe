// src/redux/navbarSlice.js
import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
    openNavbar: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleNavbar, closeNavbar, openNavbar } = navbarSlice.actions;
export default navbarSlice.reducer;
