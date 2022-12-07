import { configureStore, Store } from "@reduxjs/toolkit";
import { tagsSlice } from "../components/Tags/Tags.Slice";
import { authSlice } from "../pages/Auth/authSlice";
import { feedSlice } from "../components/Feed/feedSlice";

export const store = configureStore({
  reducer: {
    tags: tagsSlice.reducer,
    auth: authSlice.reducer,
    feed: feedSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
