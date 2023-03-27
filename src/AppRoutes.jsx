import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Products from "./pages/Products.jsx";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
