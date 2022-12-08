import React, { createContext, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./pages/Layouts/MainLayout";
import { useAppDispatch } from "./store/hooks";
import { getCurrentUser } from "./pages/Auth/authSlice";
import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
import NonAuthRoute from "./hoc/NonAuthRoute";
import GlobalFeed from "./pages/GlobalFeed/GlobalFeed";
import YourFeed from "./pages/YourFeed/YourFeed";
import TagFeed from "./pages/TagFeed/TagFeed";
import Article from "./pages/Article/Article";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<GlobalFeed />}></Route>
        <Route
          path="/feed"
          element={
            <AuthenticatedRoute>
              <YourFeed />
            </AuthenticatedRoute>
          }
        ></Route>
        <Route path="/articles/:slug" element={<Article />} />

        <Route path="/feed/:tag" element={<TagFeed />}></Route>
        <Route
          path="/login"
          element={
            <NonAuthRoute>
              <Login />
            </NonAuthRoute>
          }
        />
        <Route
          path="/register"
          element={
            <NonAuthRoute>
              <Register />
            </NonAuthRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
