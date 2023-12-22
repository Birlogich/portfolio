import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
};

const addCommentSlice = createSlice({
  name: "@@comment",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
  },
});
export const { addComment } = addCommentSlice.actions;
export const addCommentReducer = addCommentSlice.reducer;
