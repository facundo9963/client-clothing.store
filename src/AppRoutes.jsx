import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
