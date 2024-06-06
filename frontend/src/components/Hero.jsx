import React from "react";
import heroImg from "../assets/hero-img.svg";

const Hero = ({ title, subTitle }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-700 to-indigo-500">
      <div className="container py-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-2xl font-semibold text-white md:text-4xl">
            {title}
          </h1>
          <p className="text-center text-lg text-slate-100 md:text-xl">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
