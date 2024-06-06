import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const AdminLayout = () => {
  return (
    <>
      <AdminNavbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default AdminLayout;
