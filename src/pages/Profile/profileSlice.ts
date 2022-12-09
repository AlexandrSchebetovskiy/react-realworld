import { ProfileResponse, ProfileState } from "./types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpClient } from "../../http/httpClient";

const initialState: ProfileState = {
  profile: null,
  isLoading: false,
  error: null,
};
export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async function (slug: string) {
    const res = await httpClient.get<ProfileResponse>("profiles/" + slug);
    return res.data.profile;
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong...";
      });
  },
});
