import React, { useEffect, useState } from 'react'
import InternCard from './InternCard'
import Spinner from '../components/Spinner'
import Searchbar from '../components/Searchbar'
import Pagination from './Pagination'
import resultNotFoundImg from '../assets/result-not-found.svg'
import { CiGrid2H, CiGrid41, CiSearch } from 'react-icons/ci'
import { IoIosArrowRoundBack } from 'react-icons/io'

const InternList = () => {
    const [internList, setInternList] = useState([])
    const [loading, setLoading] = useState(true)
    const [isGrid, setIsGrid] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(6)

    useEffect(() => {
        const fetchInterns = async () => {
            setLoading(true)
            try {
                const res = await fetch('http://localhost:5000/internships')
                const data = await res.json()
                setInternList(data)
            } catch (error) {
                console.error('Data fetching error', error)
            } finally {
                setLoading(false)
            }
        }
        return () => {
            fetchInterns()
            console.log('return success')
        }
    }, [])

    const handleListView = () => setIsGrid((prevState) => !prevState)

    const paginatedInternList = internList.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    )

    return (
        <div className="container flex flex-col gap-6 py-6">
            <div className="mb-6 flex w-full items-center justify-between gap-3">
                <Searchbar
                    internList={internList}
                    setInternList={setInternList}
                />
                <div
                    className="cursor-pointer rounded-full p-3 hover:bg-indigo-50"
                    onClick={handleListView}
                >
                    {isGrid ? (
                        <CiGrid2H className="text-3xl text-indigo-500" />
                    ) : (
                        <CiGrid41 className="text-3xl text-indigo-500" />
                    )}
                </div>
            </div>

            {loading ? (
                <Spinner loading={loading} />
            ) : (
                <div
                    className={`relative grid gap-8 ${isGrid ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}
                >
                    {paginatedInternList.length === 0 ? (
                        <div className="absolute left-1/2 top-0 -translate-x-1/2">
                            <div className="flex flex-col items-center">
                                <h1 className="text-center text-xl font-medium lg:text-2xl">
                                    Sorry, no result found!
                                </h1>
                                <p className="mb-3 text-center text-sm font-medium text-gray-400 lg:text-base">
                                    What you searched was unfortunately not
                                    found or doesn't exist.
                                </p>
                                <img
                                    src={resultNotFoundImg}
                                    alt="No results found"
                                    className="w-full max-w-[300px]"
                                />
                            </div>
                        </div>
                    ) : (
                        paginatedInternList.map((intern) => (
                            <InternCard
                                key={intern.id}
                                intern={intern}
                                isGrid={isGrid}
                            />
                        ))
                    )}
                </div>
            )}

            <Pagination
                totalCards={internList.length}
                cardsPerPage={cardsPerPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default InternList
