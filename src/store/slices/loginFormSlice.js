import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.email = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;