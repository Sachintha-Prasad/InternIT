import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <div className="container flex items-center justify-between gap-3 py-8">
        <Link to={"/admin"} className="logo-container flex flex-col items-end">
          <strong className="rounded border border-indigo-500 bg-indigo-500 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white">
            Admin
          </strong>
          <p className="text-2xl font-medium md:text-3xl">
            Intern
            <span className="text-indigo-500">IT</span>
          </p>
        </Link>

        <Link to="/" className="cta-btn">
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
