import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-50">
      <div className="container sm:flex sm:items-center sm:justify-between">
        <div className="flex w-full max-w-[100px] justify-center text-teal-600 sm:justify-start">
          <img src={logo} alt="" />
        </div>

        <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
