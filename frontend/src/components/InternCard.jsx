import React from "react"
import { Link } from "react-router-dom"

const InternCard = ({ intern }) => {
    return (
        <div className="px-4 py-6 bg-white shadow-lg w-full max-w-[600px] rounded-lg">
            <div className="flex flex-col items-center gap-2">
                <div className="w-full max-w-[50px] h-[50px] flex items-center justify-center border-[1px] border-slate-300 p-1 rounded-full overflow-hidden">
                    <img
                        src={intern.image}
                        alt=""
                        className="w-full max-w-[40px] h-[40px] rounded-full object-cover"
                    />
                </div>
                <h2 className="text-xl font-medium">{intern.title}</h2>
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
                <Link to={`/internships/${intern.id}`} className="cta-btn">
                    Apply
                </Link>
            </div>
        </div>
    )
}

export default InternCard
