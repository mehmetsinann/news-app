import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    headlineNews: [],
  },
  reducers: {
    setNews: (state, action) => {
      state.news = action.payload;
    },
    setHeadlineNews: (state, action) => {
      state.headlineNews = action.payload;
    },
  },
});

export const { setNews, setHeadlineNews } = newsSlice.actions;

export default newsSlice;