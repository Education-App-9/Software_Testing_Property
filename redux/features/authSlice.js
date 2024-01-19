import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    isAuth: false,
    uid: "",
    username: "",
    email: "",
    accountType: "",
  },
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => initialState,
    logIn: (state, action) => {
      return {
        value: {
          isAuth: true,
          uid: action.payload.uid,
          username: action.payload.username,
          email: action.payload.email,
          accountType: action.payload.accountType,
        },
      };
    },
    signUp: (state, action) => {
      return {
        value: {
          isAuth: true,
          uid: action.payload.uid,
          username: action.payload.username,
          email: action.payload.email,
          accountType: action.payload.accountType,
        },
      };
    },
    setAccountType: (state, action) => {
      return {
        value: {
          isAuth: true,
          uid: state.value.uid,
          username: state.value.username,
          email: state.value.email,
          accountType: action.payload.accountType,
        },
      };
    },
  },
});

export const { logOut, logIn } = auth.actions;
export default auth.reducer;
