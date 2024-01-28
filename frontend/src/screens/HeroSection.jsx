/* eslint-disable no-unused-vars */
import React from "react"
import NavBar from "../components/NavBar/NavBar"
import HeroImg from "../../src/assets/HeroImg.svg"
import Search from "../components/SearchDiv/Search"

const HeroSection = () => {
    return (
        <div className="w-auto">
            <NavBar />
            <div className="hero-container common-container mt-8 grid gap-y-6 gap-x-4 md:grid-cols-2 items-center justify-center ">
                <img
                    src={HeroImg}
                    alt=""
                    className="w-[80%] mx-auto col-span-full md:col-auto lg:row-span-2"
                />
                <div className="hero-desc-container flex flex-col gap-4 self-end">
                    <h1 className="text-[36px] max-w-[600px] font-bold leading-tight text-center md:text-start md:text-[56px]">
                        Launch Your Career with{" "}
                        <sapn className="text-dark-blue">InternIT</sapn>
                    </h1>
                    <p className="text-light-gray text-[16px] text-center md:text-[20px] md:text-start">
                        Your Gateway to Exclusive Internship Opportunities all
                        around the world
                    </p>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default HeroSection
