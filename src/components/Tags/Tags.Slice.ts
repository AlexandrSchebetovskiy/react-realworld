import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TagsState } from "./Types";
import { httpClient } from "../../http/httpClient";

const initialState: TagsState = {
  tags: [],
  isLoading: false,
  error: null,
};
export const fetchTags = createAsyncThunk(
  "tags/fetchTags",
  async function (_, thunkAPI) {
    try {
      const res = await httpClient.get("tags");
      return res.data.tags;
    } catch (e) {
      return thunkAPI.rejectWithValue("Something went wrong...");
    }
  }
);

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isLoading = true;
        state.tags = [];
        state.error = null;
      })
      .addCase(fetchTags.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        console.log(action);
        state.error = action.payload;
      });
  },
});

// export const {fetchTags} = tagsSlice.actions
export default tagsSlice.reducer;
