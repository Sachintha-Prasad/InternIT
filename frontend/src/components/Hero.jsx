import React from "react"
import heroImg from "../assets/hero-img.svg"

const Hero = () => {
    return (
        <div className="container py-24 lg:min-h-[800px] flex items-center">
            <div className="w-full max-w-[500px]">
                <img src={heroImg} alt="" />
            </div>
        </div>
    )
}

export default Hero
