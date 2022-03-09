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
      state.filteredUsers = state.users;
    },
    updateUser: (state, action) => {
      const { payload } = action;
      const { key, user } = payload;
      state.users[key] = user;
      state.filteredUsers = state.users;

    },
    removeUser: (state, action) => {
      const { payload } = action
      const { key } = payload
      state.users = state.users.filter(function ( _user,index) {
        return index !== key;
      });
      state.filteredUsers = state.users;
    },
    filterUsers: (state, action) => {
      const { payload} = action
      if(payload === ""){
        state.filteredUsers = state.users
      } else {
        state.filteredUsers = state.users.filter(function (user) {
          return (user.firstName).includes(payload) || (user.lastName).includes(payload);
        });
      }
    }
  },
});

export const { createUser, updateUser, removeUser, filterUsers } = userSlice.actions;

export default userSlice.reducer;
