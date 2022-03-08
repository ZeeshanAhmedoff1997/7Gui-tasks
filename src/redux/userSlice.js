import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filteredUsers: [],
};

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    createUser: (state, action) => {
      const { payload } = action;
      state.users = [...state.users, payload];
    },
    updateUser: (state, action) => {
      const { payload } = action;
      const { key, user } = payload;
      state.users[key] = user;
    },
    removeUser: (state, key) => {
      state.users = state.users.filter(function (index) {
        return index !== key;
      });
    },
  },
});

export const { createUser, updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
