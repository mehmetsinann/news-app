import { createSlice, PayloadAction, Draft } from "@reduxjs/toolkit";

const initialState: FilterState = {
  options: {
    keyword: "",
    orderBy: "",
  },
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setOptions: (
      state: Draft<FilterState>,
      action: PayloadAction<FilterState>
    ) => {
      state.options = action.payload.options;
    },
  },
});

export const { setOptions } = FilterSlice.actions;

export default FilterSlice;
