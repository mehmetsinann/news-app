import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./slices/newsSlice";

const store = configureStore({
  reducer: {
    // Here we will be adding reducers
    news: newsSlice.reducer,
  },
});

export default store;