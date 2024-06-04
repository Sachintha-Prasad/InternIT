import React, { useEffect, useState } from "react"
import { Link, useLoaderData, useParams } from "react-router-dom"

const InternPage = () => {
    const [intern, setIntern] = useState({})
    const { id } = useParams()

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
        <div className="container py-24">
            <div className="flex gap-12 flex-col items-start">
                <div className="w-full max-w-[120px] h-[120px] flex items-center justify-center border-[1px] border-slate-300 p-1 rounded-full overflow-hidden">
                    <img
                        src={intern.image}
                        alt=""
                        className="w-full max-w-[100px] h-[100px] rounded-full object-cover"
                    />
                </div>
                <h2 className="text-2xl font-semibold">{intern.title}</h2>
                <div className="flex flex-col gap-2">
                    <p>
                        <span className="font-semibold">Company :</span>{" "}
                        {intern.company}
                    </p>
                    <p>
                        <span className="font-semibold">Location :</span>{" "}
                        {intern.location}
                    </p>
                    <p>
                        <span className="font-semibold">Breif :</span>{" "}
                        {intern.description}
                    </p>
                    <p>
                        <span className="font-semibold">Requirements :</span>{" "}
                        {intern.requirements}
                    </p>
                    <p>
                        <span className="font-semibold">Duration :</span>{" "}
                        {intern.duration}
                    </p>
                    <p>
                        <span className="font-semibold">Started date :</span>{" "}
                        {intern.startDate}
                    </p>
                </div>
                <div className="btn-container">
                    <Link></Link>
                </div>
            </div>
        </div>
    )
}

export default InternPage
