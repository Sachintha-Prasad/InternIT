/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react"
import AboutImg from "../assets/AboutImg.svg"

const AboutSection = () => {
    return (
        <div className="about-container common-container mt-12 md:mt-24 grid md:grid-cols-2 items-center justify-between gap-y-6">
            <h2 className="text-[24px] md:text-[36px] font-bold self-end text-center md:text-start">
                About <span className="text-dark-blue">InternIT</span>
            </h2>
            <img
                src={AboutImg}
                alt="about image"
                className="w-[70%] col-span-2 md:col-span-1 md:row-span-2 mx-auto"
            />
            <p className="text-[16px] md:text-[18px] text-light-gray self-start">
                Welcome to InternIT, where opportunities meet ambition. At
                InternIT, we're dedicated to connecting talented individuals
                with transformative internship experiences. Our platform is
                designed to bridge the gap between aspiring professionals and
                dynamic companies, fostering growth and innovation. Join us on a
                journey of learning, collaboration, and success. InternIT -
                Shaping Futures, Empowering Careers.
            </p>
        </div>
    )
}

export default AboutSection
