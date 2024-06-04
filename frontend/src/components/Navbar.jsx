import React, { useState } from "react"
import logo from "../assets/logo.svg"
import { NavLink, Link } from "react-router-dom"
import { FaBarsStaggered } from "react-icons/fa6"
import { IoClose } from "react-icons/io5"

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Internships", path: "/internships" },
        { name: "About", path: "/about" }
    ]

    const navClass = ({ isActive }) =>
        isActive
            ? "text-dark-gray text-lg w-auto relative after:absolute after:block after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-dark-blue"
            : "text-light-gray text-lg w-auto relative after:absolute after:block after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-dark-blue hover:after:w-full after:transition-all duration-1000 ease-in-out"

    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenuToggle = () => setMenuOpen((prevState) => !prevState)

    return (
        <div className="container py-6 flex gap-3 items-center justify-between">
            <div className="logo-container w-full max-w-36">
                <img src={logo} alt="" />
            </div>

            {/* large screens */}
            <div className="hidden md:block">
                <nav className="flex gap-4 lg:gap-8 items-center">
                    {navItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={navClass}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                    <Link to="add-internship" className="cta-btn">
                        Add Internships
                    </Link>
                </nav>
            </div>

            {/* small screens */}
            <div className="md:hidden" onClick={handleMenuToggle}>
                {menuOpen ? (
                    <div>
                        <IoClose className="text-white text-4xl relative z-50" />

                        <div className="w-screen h-screen bg-black opacity-40 absolute inset-0"></div>

                        <nav className="absolute top-0 right-0 h-screen px-4 py-6 w-[60%] flex gap-6 flex-col items-center justify-center bg-dark-blue">
                            {navItems.map((item, index) => (
                                <NavLink
                                    to={item.path}
                                    key={index}
                                    className="text-lg text-white"
                                >
                                    {item.name}
                                </NavLink>
                            ))}
                            <Link
                                to="add-internship"
                                className="cta-btn bg-dark-gray"
                            >
                                Add Internships
                            </Link>
                        </nav>
                    </div>
                ) : (
                    <FaBarsStaggered className="text-dark-gray text-3xl" />
                )}
            </div>
        </div>
    )
}

export default Navbar
