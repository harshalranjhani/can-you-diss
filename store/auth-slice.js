import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../utils/firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
  },
  reducers: {
    login(state, action) {
      const newState = { currentUser: action.payload.currentUser };
      //   console.log("email ", action.payload.email);
      //   console.log(action.payload.password);
      console.log("setting state")
      return newState;
    },
    logout(state, action) {
      const initialState = { user: null };
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
