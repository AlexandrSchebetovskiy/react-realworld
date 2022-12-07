import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BackendErrors, LoginRequest, RegisterRequest, User } from "./Types";
import { httpClient } from "../../http/httpClient";
import { useNavigate } from "react-router-dom";

interface AuthState {
  user: User | null;
  backendErrors: BackendErrors | null;
  isLoading: boolean;
}
const initialState: AuthState = {
  user: null,
  isLoading: true,
  backendErrors: null,
};
export const login = createAsyncThunk(
  "auth/login",
  async function (body: LoginRequest, thunkAPI) {
    try {
      const res = await httpClient.post("users/login", body);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const registration = createAsyncThunk(
  "auth/registration",
  async function (body: RegisterRequest, thunkAPI) {
    try {
      const res = await httpClient.post("users", body);
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async function (_, thunkAPI) {
    try {
      const res = await httpClient.get("user");
      return res.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.user.token);
        state.user = action.payload.user;
        window.location.pathname = "/";
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.user = null;
        state.backendErrors = action.payload;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.user = null;
        state.isLoading = false;
        localStorage.removeItem("token");
      })
      .addCase(registration.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.user.token);
        state.user = action.payload.user;
        window.location.pathname = "/";
      })
      .addCase(registration.rejected, (state, action) => {
        state.user = null;
        localStorage.removeItem("token");
      });
  },
});
