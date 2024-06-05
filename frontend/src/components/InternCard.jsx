import React from "react"
import { Link } from "react-router-dom"
import { BsClock, BsStar } from "react-icons/bs"

const InternCard = ({ intern, isGrid }) => {
    return (
        <Link
            to={`/internships/${intern.id}`}
            className="rounded-xl bg-white p-3 ring-[2px] ring-gray-100 hover:bg-indigo-50 hover:ring-0 transition-all duration-200 ease-linear"
        >
            <div
                className={`${
                    isGrid ? "flex-col" : "flex-col md:flex-row"
                } flex gap-4 items-start sm:gap-3`}
            >
                {isGrid ? (
                    <aside className="flex gap-3">
                        <img
                            src={intern.image}
                            alt=""
                            className="w-full max-w-[60px] h-[60px] rounded-lg object-cover"
                        />
                        <div>
                            <strong className="rounded-full border border-indigo-500 bg-indigo-100 px-2 py-0.5 text-[10px] font-medium text-indigo-500">
                                {intern.type}
                            </strong>
                            <p className="mt-1 text-lg sm:text-xl font-medium">
                                {intern.title}
                            </p>
                        </div>
                    </aside>
                ) : (
                    <img
                        src={intern.image}
                        alt=""
                        className="w-full max-w-[60px] h-[60px] rounded-lg object-cover mb-2"
                    />
                )}

                <div>
                    {!isGrid && (
                        <div>
                            <strong className="rounded-full border border-indigo-500 bg-indigo-100 px-2 py-0.5 text-[10px] font-medium text-indigo-500">
                                {intern.type}
                            </strong>
                            <h2 className="mt-2 text-lg font-medium sm:text-xl">
                                {intern.title}
                            </h2>
                        </div>
                    )}

                    <p className="mt-1 text-sm text-gray-700">
                        {intern.description}
                    </p>

                    <div className="mt-3 flex gap-3">
                        <div className="flex items-center flex-wrap gap-1 text-gray-500">
                            <BsClock className="text-sm" />
                            <p className="text-xs font-medium">
                                {intern.duration}
                            </p>
                        </div>

                        <div className="text-xs font-medium text-gray-500 sm:mt-0 flex items-center flex-wrap gap-2">
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
