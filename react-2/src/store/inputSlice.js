import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // status:false,
  inputNumber: 0,
};

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    newInput: (state, action) => {
      state.inputNumber = action.payload;
    },
    clear: (state) => {
      state.inputNumber = 0;
    },
  },
});

export const { newInput, clear } = inputSlice.actions;

export default inputSlice.reducer;
