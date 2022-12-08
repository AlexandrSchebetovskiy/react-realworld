import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../http/httpClient";
import { Article, FeedResponse } from "./types";

interface FeedState {
  articles: Article[] | null;
  count: number;
  isLoading: boolean;
  error: string;
}

const initialState: FeedState = {
  articles: null,
  isLoading: false,
  count: 0,
  error: "",
};

export const fetchFeed = createAsyncThunk(
  "feed/fetchFeed",
  async function (url: string, thunkAPI) {
    const res = await httpClient.get<FeedResponse>(url);
    return res.data;
  }
);

export const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.articles = action.payload.articles;
        state.count = action.payload.articlesCount;
        state.isLoading = false;
      })
      .addCase(fetchFeed.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong...";
      });
  },
});
