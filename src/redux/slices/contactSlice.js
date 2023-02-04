import { createSlice } from "@reduxjs/toolkit";
import shortid from "shortid";
const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = contactSlice.actions;
export default contactSlice.reducer;
