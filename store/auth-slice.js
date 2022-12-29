import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../utils/firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
  },
  reducers: {
    login(state, action) {
      const newState = { currentUser: action.payload.user };
      return newState;
    },
    logout(state, action) {
      const newState = { user: null };
      return newState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
