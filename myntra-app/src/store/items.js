import { createSlice } from "@reduxjs/toolkit";

const ItemsSlice = createSlice({
  name: "items",
  initialState: [],

  reducers: {
    addInitialItems: (store, action) => {
      return action.payload.items;
    },
  },
});

export const ItemsAction = ItemsSlice.actions;

export default ItemsSlice;
