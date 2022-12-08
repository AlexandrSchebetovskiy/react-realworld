import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { httpClient } from "../../http/httpClient";
import { Article } from "../../components/Feed/types";
import { ArticleResponse } from "./types";

interface ArticleState {
  article: Article | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ArticleState = {
  article: null,
  isLoading: false,
  error: null,
};

export const getCurrentArticle = createAsyncThunk(
  "article/getCurrentArticle",
  async function (slug: string, thunkAPI) {
    const res = await httpClient.get<ArticleResponse>("articles/" + slug);
    console.log();
    return res.data.article;
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentArticle.fulfilled, (state, action) => {
        state.article = action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentArticle.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Something went wrong";
      });
  },
});
