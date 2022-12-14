import { configureStore, Store } from "@reduxjs/toolkit";
import { tagsSlice } from "../components/Tags/Tags.Slice";
import { authSlice } from "../pages/Auth/authSlice";
import { feedSlice } from "../components/Feed/feedSlice";
import { articleSlice } from "../pages/Article/articleSlice";
import { commentsSlice } from "../components/Comments/commentsSlice";
import { profileSlice } from "../pages/Profile/profileSlice";

export const store = configureStore({
  reducer: {
    tags: tagsSlice.reducer,
    auth: authSlice.reducer,
    feed: feedSlice.reducer,
    article: articleSlice.reducer,
    comments: commentsSlice.reducer,
    profile: profileSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
