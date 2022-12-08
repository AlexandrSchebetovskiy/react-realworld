import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CommentResponse, CommentState } from "./types";
import { httpClient } from "../../http/httpClient";

const initialState: CommentState = {
  comments: null,
  isLoading: false,
  error: null,
};
export const fetchComments = createAsyncThunk(
  "comments/fetchComment",
  async function (slug: string, thunkAPI) {
    const res = await httpClient.get<CommentResponse>(
      `articles/${slug}/comments`
    );
    return res.data.comments;
  }
);

export const commentsSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong...";
      });
  },
});
