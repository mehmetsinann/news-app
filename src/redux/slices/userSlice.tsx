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
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice;