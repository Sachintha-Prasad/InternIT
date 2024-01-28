/* eslint-disable no-unused-vars */
import React from "react"
import ifsLogo from "../assets/partners/ifs.svg"
import virtusaLogo from "../assets/partners/virtusa.svg"
import x99Logo from "../assets/partners/99x.svg"
import wso2Logo from "../assets/partners/wso2.svg"
import codegenLogo from "../assets/partners/codegen.svg"
import travelLogo from "../assets/partners/travelbox.svg"

const OurPartners = () => {
    return (
        <div className="partners-container common-container mt-6 flex flex-col gap-6">
            <h2 className="text-[24px] md:text-[36px] font-bold text-center">
                Our <span className="text-dark-blue">Partners</span>
            </h2>

            <p className="text-[16px] md:text-[18px] text-light-gray text-center">
                Over 100+ top companies jon with us to provide internships
            </p>

            <div className="partners-logo-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center">
                <img src={ifsLogo} alt="" className="w-1/3" />
                <img src={x99Logo} alt="" className="w-1/3" />
                <img src={virtusaLogo} alt="" className="w-1/2" />
                <img src={wso2Logo} alt="" className="w-1/2" />
                <img src={codegenLogo} alt="" className="w-[60%]" />
                <img src={travelLogo} alt="" className="w-[60%]" />
            </div>
        </div>
    )
}

export default OurPartners
