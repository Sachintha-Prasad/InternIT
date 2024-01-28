/* eslint-disable no-unused-vars */
import React from "react"
import { IoSearch } from "react-icons/io5"

const Search = () => {
    return (
        <div className="md:col-span-full lg:col-auto self-start">
            <form
                action=""
                className="flex flex-col mobile:flex-row gap-3 w-full justify-between lg:justify-start"
            >
                <input
                    type="text"
                    placeholder="search for internships . . ."
                    className="px-[24px] py-[12px] capitalize bg-white text-dark-gray outline outline-1 outline-dark-blue rounded-[8px] focus:ring-2 ring-black w-full lg:w-[60%]"
                />
                <button className="cta-btn flex items-center justify-center">
                    <IoSearch className="text-2xl" />
                </button>
            </form>
        </div>
    )
}

export default Search
