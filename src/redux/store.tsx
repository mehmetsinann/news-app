import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import FilterSlice from "./slices/filterSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    filter: FilterSlice.reducer,
  },
});

export default store;
