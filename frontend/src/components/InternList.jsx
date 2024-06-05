import React, { useEffect, useState } from "react"
import InternCard from "./InternCard"
import Spinner from "../components/Spinner"
import { CiGrid2H, CiGrid41 } from "react-icons/ci"
import Pagination from "./Pagination"

const InternList = () => {
    const [internList, setInternList] = useState([])
    const [loading, setLoading] = useState(true)

    const [isGrid, setIsGrid] = useState(false)

    const handleListView = () => {
        setIsGrid((prevState) => !prevState)
    }

    // pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(6)

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage

    const newInternList = internList.slice(firstCardIndex, lastCardIndex)

    // pagination

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
            <div className="container py-6 flex flex-col gap-6">
                <div
                    className="self-end p-3 hover:bg-indigo-50 rounded-full cursor-pointer"
                    onClick={handleListView}
                >
                    {isGrid ? (
                        <CiGrid2H className="text-indigo-500 text-2xl " />
                    ) : (
                        <CiGrid41 className="text-indigo-500 text-2xl " />
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
                        {newInternList.map((intern) => (
                            <InternCard
                                key={intern.id}
                                intern={intern}
                                isGrid={isGrid}
                            />
                        ))}
                    </div>
                )}

                <Pagination
                    totalCards={internList.length}
                    cardsPerPage={cardsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default InternList
