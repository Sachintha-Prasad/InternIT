import React from "react"
import heroImg from "../assets/hero-img.svg"

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-500">
            <div className="container py-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl md:text-4xl font-semibold text-center text-white">
                        Empower Your Future with Top IT Internships
                    </h1>
                    <p className="text-lg md:text-xl text-slate-100 text-center">
                        Connect with top companies and start your journey in
                        technology.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
