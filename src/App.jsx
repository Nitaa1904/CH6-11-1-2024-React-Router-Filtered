import { useEffect, useState } from "react";
import "./App.css";
import NavbarWithStyling from "./components/navbar/navbarWithStyling";
import { Route, Routes } from "react-router-dom";
import AboutView from "./page/AboutView";
import HomeView from "./page/HomeView";
import NotFoundView from "./page/NotFoundView";
import { LoginPage } from "./page/Login";
import { RegisterPage } from "./page/Register";
import NavbarTailwind from "./components/navbar/NavbarTailwind";

function App() {
  return (
    <>
      <NavbarTailwind />

      <Routes>
        <Route path="/" element={<HomeView />}></Route>

        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/not-found" element={<NotFoundView />}></Route>
        <Route path="/about" element={<AboutView />}></Route>
      </Routes>
    </>
  );
}
export default App;
