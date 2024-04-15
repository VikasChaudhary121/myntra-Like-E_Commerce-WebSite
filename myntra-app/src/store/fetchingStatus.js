import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "items",
  initialState: {
    fetchDone: false,
    fetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetching: (state) => {
      state.fetching = true;
    },
    markFetchingDone: (state) => {
      state.fetching = false;
    },
  },
});

export const FetchStatusAction = FetchStatusSlice.actions;

export default FetchStatusSlice;
