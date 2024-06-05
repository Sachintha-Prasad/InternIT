import React, { useEffect, useState } from "react"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"

const SingleInternPage = () => {
    const [intern, setIntern] = useState({
        title: "",
        company: "",
        location: "",
        description: "",
        requirements: [],
        skills: [],
        duration: "",
        startDate: "",
        image: "",
        postedTime: "",
        type: "",
        salary: "",
        brief: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            const fetchIntern = async () => {
                const res = await fetch(
                    `http://localhost:5000/internships/${id}`
                )
                const data = await res.json()
                setIntern(data)
            }

            fetchIntern()
        } catch (error) {
            console.log("Error in fetching data", error)
        }
    }, [])

    return (
        <div className="container py-12 md:py-20">
            <div className="grid grid-cols-3 gap-6 gap-y-12 md:gap-12">
                <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full col-span-3">
                    <aside className="flex flex-col gap-2 bg-indigo-50 px-4 py-6 rounded-lg">
                        <img
                            src={intern.image}
                            alt=""
                            className="w-full max-w-[60px] h-[60px] rounded-lg object-cover"
                        />
                        <p className="text-xl font-medium">{intern.company}</p>
                        <p>{intern.location}</p>
                    </aside>

                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl md:text-4xl font-medium">
                            {intern.title}
                        </h1>
                        <p className="w-full max-w-[800px]">
                            {intern.description}
                        </p>
                    </div>
                </div>

                <hr className="col-span-3" />

                <div className="col-span-3 sm:col-span-1">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-1 flex-wrap">
                            <h2 className="font-semibold">Job Type |</h2>
                            <p>{intern.type}</p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <h2 className="font-semibold">Requirements |</h2>
                            <div className="flex gap-3 flex-wrap">
                                {intern.requirements.map((item, index) => (
                                    <p key={index} className="underline">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <h2 className="font-semibold">Skills |</h2>
                            <div className="flex gap-3 flex-wrap">
                                {intern.skills.map((item, index) => (
                                    <p key={index} className="underline">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap">
                            <h2 className="font-semibold">Duration |</h2>
                            <p>{intern.duration}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap">
                            <h2 className="font-semibold">Start Date |</h2>
                            <p>{intern.startDate}</p>
                        </div>
                        <div className="flex items-center gap-1 flex-wrap">
                            <h2 className="font-semibold">Salary |</h2>
                            <p>{intern.salary}</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 sm:col-span-2 flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-lg">Brief</h2>
                        <p>{intern.brief}</p>
                    </div>
                    <div className="mt-12">
                        <Link
                            to={`/edit-intern/${intern.id}`}
                            className="cta-btn"
                        >
                            Apply now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleInternPage
