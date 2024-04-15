import { createSlice } from "@reduxjs/toolkit";

const BagSlice = createSlice({
  name: "bag",
  initialState: [],

  reducers: {
    addToBag: (store, action) => {
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
      return store.filter((val) => val !== action.payload);
    },
  },
});

export const BagAction = BagSlice.actions;

export default BagSlice;
