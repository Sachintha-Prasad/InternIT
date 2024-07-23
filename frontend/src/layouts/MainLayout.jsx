import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
