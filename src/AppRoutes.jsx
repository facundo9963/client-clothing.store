import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import { Product } from "./components/Product/Product.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
