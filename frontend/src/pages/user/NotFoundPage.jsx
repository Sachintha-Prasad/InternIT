import React from 'react'
import notFoundImg from '../../assets/not-found-img.svg'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className="container flex flex-col items-center gap-6 py-12">
            <div className="w-full max-w-[400px]">
                <img src={notFoundImg} alt="" />
            </div>
            <h1 className="text-2xl font-medium lg:text-5xl">
                Page <span className="text-indigo-500">not Found</span>
            </h1>
            <p className="text-center text-lg font-medium">
                This page is currently not available or still developing
            </p>

            <Link to={'/'} className="cta-btn">
                Return to Homepage
            </Link>
        </div>
    )
}

export default NotFoundPage
