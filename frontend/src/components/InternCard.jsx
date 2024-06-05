import React from "react"
import { Link } from "react-router-dom"
import { FaRegStar } from "react-icons/fa"

const InternCard = ({ intern, isGrid }) => {
    return (
        <Link
            to={`/internships/${intern.id}`}
            className="rounded-xl bg-white p-4 ring-[2px] ring-gray-100 sm:p-6 lg:p-8 hover:bg-indigo-50 hover:ring-indio-50 transition-all duration-200 ease-linear"
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
                        {" | "}
                        <span className="text-gray-500">{intern.company}</span>
                    </h2>

                    <p className="mt-1 text-sm text-gray-700">
                        {intern.description}
                    </p>

                    <div className="mt-4 sm:flex sm:items-center sm:gap-4">
                        <div className="flex items-center flex-wrap gap-1 text-gray-500">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>

                            <p className="text-xs font-medium">
                                {intern.duration}
                            </p>
                        </div>

                        <div className="mt-2 text-xs font-medium text-gray-500 sm:mt-0 flex items-center flex-wrap gap-2">
                            <FaRegStar className="text-sm" />
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
