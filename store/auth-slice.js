import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../utils/firebase";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
  },
  reducers: {
    login(state, action) {
      auth
        .signInWithEmailAndPassword(
          action.payload.email,
          action.payload.password
        )
        .then(() => console.log(auth.currentUser))
        .catch((e) => alert(e.message));
      const newState = { currentUser: auth.currentUser };
      //   console.log("email ", action.payload.email);
      //   console.log(action.payload.password);
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
