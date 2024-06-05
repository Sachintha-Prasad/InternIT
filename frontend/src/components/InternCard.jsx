import React from "react"
import { Link } from "react-router-dom"
import { BsClock, BsStar } from "react-icons/bs"

const InternCard = ({ intern, isGrid }) => {
    return (
        <Link
            to={`/internships/${intern.id}`}
            className="rounded-xl bg-white p-4 ring-[2px] ring-gray-100 sm:p-6 lg:p-8 hover:bg-indigo-50 hover:ring-0 transition-all duration-200 ease-linear"
        >
            <div
                className={`${
                    isGrid ? "flex-col" : "flex-col md:flex-row"
                } flex gap-4 items-start sm:gap-8`}
            >
                <div className="flex items-center justify-center w-full max-w-[80px] h-[80px] p-2 rounded-full border-2 border-gray-100 overflow-hidden">
                    <img
                        src={intern.image}
                        alt=""
                        className="rounded-full w-full max-w-[60px] h-[60px] object-fill"
                    />
                </div>

                <div>
                    <strong className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white">
                        {intern.type}
                    </strong>

                    <h2 className="mt-4 text-lg font-medium sm:text-xl">
                        {" "}
                        {intern.title}
                    </h2>

                    <p className="mt-1 text-sm text-gray-700">
                        {intern.description}
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-4">
                        <div className="flex items-center flex-wrap gap-1 text-gray-500">
                            <BsClock className="text-sm" />

                            <p className="text-xs font-medium">
                                {intern.duration}
                            </p>
                        </div>

                        <div className="mt-2 text-xs font-medium text-gray-500 sm:mt-0 flex items-center flex-wrap gap-2">
                            <BsStar className="text-sm" />
                            {intern.skills.map((item, index) => (
                                <p
                                    key={index}
                                    className="underline hover:text-gray-700"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default InternCard
