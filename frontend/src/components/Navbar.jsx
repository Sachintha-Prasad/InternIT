import React, { useState } from 'react'
// import logo from '../assets/logo.svg'
import { NavLink, Link } from 'react-router-dom'
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2'
import { IoClose } from 'react-icons/io5'

const Navbar = () => {
    // const navItems = [
    //     { name: "Home", path: "/" },
    //     { name: "Internships", path: "/internships" },
    //     { name: "About", path: "/about" }
    // ]

    // const navClass = ({ isActive }) =>
    //     isActive
    //         ? "text-gray-800 w-auto relative after:absolute after:block after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-500"
    //         : "text-gray-400 w-auto relative after:absolute after:block after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-indigo-500 hover:after:w-full after:transition-all duration-1000 ease-in-out"

    // const [menuOpen, setMenuOpen] = useState(false)
    // const handleMenuToggle = () => setMenuOpen((prevState) => !prevState)

    return (
        <div>
            <div className="container flex items-center justify-between gap-3 py-8">
                <Link to={'/'} className="logo-container w-full max-w-28">
                    <p className="text-2xl font-medium md:text-3xl">
                        Intern<span className="text-indigo-500">IT</span>
                    </p>
                </Link>

                <Link to="/admin" className="cta-btn">
                    Admin
                </Link>

                {/* for future implementation  */}

                {/* large screens
                <nav className="hidden md:flex gap-4 lg:gap-8 items-center">
                    {navItems.map((item, index) => (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={navClass}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav> */}

                {/* small screens */}
                {/* <div className="md:hidden" onClick={handleMenuToggle}>
                    {menuOpen ? (
                        <div>
                            <IoClose className="text-white text-4xl relative z-50" />
                            <div className="w-screen h-screen bg-black opacity-40 absolute inset-0"></div>
                            <nav className="absolute top-0 right-0 h-screen px-4 py-6 w-[60%] flex gap-6 flex-col items-center justify-center bg-indigo-500">
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
                                    to="/admin"
                                    className="cta-btn bg-gray-800"
                                >
                                    Admin
                                </Link>
                            </nav>
                        </div>
                    ) : (
                        <HiOutlineBars3CenterLeft className="text-dark-gray text-3xl" />
                    )}
                </div> */}
            </div>
        </div>
    )
}

export default Navbar
