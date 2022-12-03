import React, {createContext} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./pages/layouts/MainLayout";



function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index  element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
    </>
  );
}

export default App;
