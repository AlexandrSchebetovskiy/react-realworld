import React, { createContext, useEffect } from "react";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./pages/layouts/MainLayout";
import { useAppDispatch } from "./store/hooks";
import { getCurrentUser } from "./pages/Auth/authSlice";
import AuthenticatedRoute from "./hoc/AuthenticatedRoute";
import NonAuthRoute from "./hoc/NonAuthRoute";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("app");
    dispatch(getCurrentUser());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />}>
          <Route
            path="feed"
            element={<AuthenticatedRoute children={<h1>Hello world</h1>} />}
          />
        </Route>
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
