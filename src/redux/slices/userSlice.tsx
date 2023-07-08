import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: Draft<UserState>, action: PayloadAction<UserState["user"]>) => {
      state.user = action.payload;
    },
    removeUser: (state: Draft<UserState>) => {
      state.user = null;
    },
    addNewToSavedArticles: (state: Draft<UserState>, action: PayloadAction<Article>) => {
      state.user?.savedArticles?.push(action.payload);
    },
    removeNewFromSavedArticles: (state: Draft<UserState>, action: PayloadAction<Article>) => {
      state.user?.savedArticles?.splice(
        state.user?.savedArticles?.findIndex((article) => article.url === action.payload.url) as number,
        1
      );
    },
  },
});

export const { setUser, removeUser, addNewToSavedArticles, removeNewFromSavedArticles } = userSlice.actions;

export default userSlice;