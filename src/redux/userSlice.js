import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    createUser: (state, action) => {
      // state.user = payload;
    },
    updateUser: (state, action) => {
      // state.user.email = payload.email;
      // state.user.name = payload.name;
      // state.user.role = payload.role;
    },
    removeUser: (state) => {
      // state.user = null;
    },
  },
});

export const { createUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
