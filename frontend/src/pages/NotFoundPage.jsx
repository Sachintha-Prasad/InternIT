import React from "react"
import notFoundImg from "../assets/not-found-img.svg"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="container flex gap-8 flex-col py-12 items-center">
            <div className="w-full max-w-[400px]">
                <img src={notFoundImg} alt="" />
            </div>
            <h1 className="text-2xl lg:text-6xl font-bold">
                Page <span className="text-dark-blue">not Found</span>
            </h1>
            <p className="text-lg font-medium">
                This page is currently not available or still developing
            </p>

            <Link to={"/"} className="cta-btn">
                Return to Homepage
            </Link>
        </div>
    )
}

export default NotFoundPage
