import React, { useEffect, useState } from "react"
import InternCard from "./InternCard"
import Spinner from "../components/Spinner"
import { IoGridOutline, IoGrid } from "react-icons/io5"

const InternList = () => {
    const [internList, setInternList] = useState([])
    const [loading, setLoading] = useState(true)

    const [isGrid, setIsGrid] = useState(false)

    const handleListView = () => {
        setIsGrid((prevState) => !prevState)
    }

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

    return (
        <div>
            <div className="container py-12 flex flex-col gap-6">
                <div className="self-end">
                    {isGrid ? (
                        <IoGrid
                            className="text-indigo-500 text-2xl cursor-pointer"
                            onClick={handleListView}
                        />
                    ) : (
                        <IoGridOutline
                            className="text-gray-500 text-2xl cursor-pointer"
                            onClick={handleListView}
                        />
                    )}
                </div>

                {loading ? (
                    <Spinner loading={loading} />
                ) : (
                    <div
                        className={`${
                            isGrid &&
                            "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                        } grid grid-cols-1 gap-8`}
                    >
                        {internList.map((intern) => (
                            <InternCard
                                key={intern.id}
                                intern={intern}
                                isGrid={isGrid}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default InternList
