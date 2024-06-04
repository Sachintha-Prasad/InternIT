import React, { useEffect, useState } from "react"
import InternCard from "./InternCard"
import Spinner from "../components/Spinner"

const InternList = ({ isHome }) => {
    const [internList, setInternList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const fetchInterns = async () => {
                const res = await fetch("http://localhost:5000/internships")
                const data = await res.json()
                setInternList(data)
            }

            fetchInterns()
        } catch (error) {
            console.log("Data fetching error", error)
        } finally {
            setLoading(false)
        }
    }, [])

    const newInternList = isHome ? internList.slice(0, 3) : internList

    return (
        <div className="bg-blue-50">
            <div className="container py-12 flex flex-col gap-6">
                <div className="flex justify-center">
                    <h2 className="text-2xl lg:text-3xl text-dark-gray font-semibold">
                        {isHome ? "Featured " : "Available "}
                        <span className="text-dark-blue">Internships</span>
                    </h2>
                </div>
                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {newInternList.map((intern) => (
                            <InternCard key={intern.id} intern={intern} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InternList
