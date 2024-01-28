/* eslint-disable no-unused-vars */
import React from "react"
import { useRef } from "react"
import logo from "../../assets/Logo.svg"
import { IoMenu, IoClose } from "react-icons/io5"
import "../NavBar/NavBar.css"

const NavBar = () => {
    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle("hidden")
    }
    return (
        <div className="navbar common-container flex justify-between items-center gap-8">
            <div className="logo-div">
                <img
                    src={logo}
                    alt="intern IT logo"
                    className="max-w-[100px]"
                />
            </div>

            <div className="nav-link-container w-[900px] hidden gap-8 justify-between font-medium text-light-gray tablet:flex">
                <ul className="left-link-container flex gap-8 items-center ">
                    <li className="menu-item active">
                        <a href="#">Home</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Internships</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Companies</a>
                    </li>
                </ul>

                <ul className="right-link-container flex gap-8 items-center">
                    <li className="menu-item">
                        <a href="#">Post a Job</a>
                    </li>
                    <button className="cta-btn">Register</button>
                </ul>
            </div>

            <IoMenu
                onClick={showNav}
                className="text-4xl text-dark-gray tablet:hidden"
            />

            <div
                ref={navRef}
                className="mobile-nav-container flex items-center justify-center absolute inset-0 font-medium text-light-gray bg-light-blue tablet:hidden"
            >
                <ul className="flex flex-col gap-8 items-center">
                    <li className="active">
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Internships</a>
                    </li>
                    <li>
                        <a href="#">Companies</a>
                    </li>
                    <li>
                        <a href="#">Post a job</a>
                    </li>
                    <button className="cta-btn">Register</button>

                    <IoClose
                        onClick={showNav}
                        className="text-4xl text-dark-gray absolute top-[40px] right-[64px] tablet:hidden"
                    />
                </ul>
            </div>
        </div>
    )
}

export default NavBar
