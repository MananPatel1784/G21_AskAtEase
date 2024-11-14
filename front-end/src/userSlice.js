import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,  // Initial state is `null`
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Set the user data when login action is dispatched
    },
    logout: (state) => {
      state.user = null;  // Reset to `null` when logout action is dispatched
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;  // Selector to access the user

export default userSlice.reducer;
