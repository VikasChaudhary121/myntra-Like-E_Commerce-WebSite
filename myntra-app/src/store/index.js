import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./items";
import FetchStatusSlice from "./fetchingStatus";
import BagSlice from "./bagSlice";

const MyntraStore = configureStore({
  reducer: {
    items: ItemsSlice.reducer,
    FetchStatus: FetchStatusSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default MyntraStore;
