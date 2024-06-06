import React, { useEffect, useState } from 'react'
import InternCard from './InternCard'
import Spinner from '../components/Spinner'
import Pagination from './Pagination'
import resultNotFoundImg from '../assets/result-not-found.svg'
import { CiGrid2H, CiGrid41, CiSearch } from 'react-icons/ci'

const InternList = () => {
    const [internList, setInternList] = useState([])
    const [loading, setLoading] = useState(true)
    const [isGrid, setIsGrid] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredInternList, setFilteredInternList] = useState([])

    // handle search
    const handleSearch = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch('http://localhost:5000/internships')
            const data = await res.json()
            const filteredData = data.filter((intern) =>
                intern.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase().trim())
            )
            setFilteredInternList(filteredData ? filteredData : [])
        } catch (error) {
            console.log('Data fetching error', error)
        } finally {
            setLoading(false)
        }
    }

    // get all the data
    useEffect(() => {
        const fetchInterns = async () => {
            try {
                const res = await fetch('http://localhost:5000/internships')
                const data = await res.json()
                setInternList(data)
                setFilteredInternList(data)
            } catch (error) {
                console.log('Data fetching error', error)
            } finally {
                setLoading(false)
            }
        }

        fetchInterns()
    }, [])

    // handle list view
    const handleListView = () => {
        setIsGrid((prevState) => !prevState)
    }

    // Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const [cardsPerPage, setCardsPerPage] = useState(6)

    const lastCardIndex = currentPage * cardsPerPage
    const firstCardIndex = lastCardIndex - cardsPerPage

    console.log(filteredInternList)

    const paginatedInternList = filteredInternList.slice(
        firstCardIndex,
        lastCardIndex
    )

    return (
        <div>
            <div className="container flex flex-col gap-6 py-6">
                <div className="mb-6 flex w-full justify-between gap-3">
                    <form
                        className="flex w-full max-w-lg items-center"
                        onSubmit={handleSearch}
                    >
                        <div className="w-full">
                            <input
                                type="text"
                                id="simple-search"
                                className="sda-s block size-[42px] w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-800 focus:border-blue-500 focus:outline-indigo-500 focus:ring-blue-500"
                                placeholder="Search intern name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="group ms-2 flex size-[42px] items-center justify-center rounded-lg border bg-indigo-500 text-sm font-medium text-white hover:bg-indigo-50"
                        >
                            <CiSearch className="text-xl group-hover:text-gray-800" />
                        </button>
                    </form>
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
                        className={`${
                            isGrid &&
                            'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                        } relative grid grid-cols-1 gap-8`}
                    >
                        {paginatedInternList.length === 0 ? (
                            <div className="absolute left-1/2 top-0 -translate-x-1/2">
                                <div className="flex flex-col items-center">
                                    <h1 className="text-center text-xl font-medium lg:text-2xl">
                                        Sorry, no result found!
                                    </h1>
                                    <p className="mb-3 text-center text-sm font-medium text-gray-400 lg:text-base">
                                        what you searched was unfortunately not
                                        found or doesn't exist
                                    </p>
                                    <img
                                        src={resultNotFoundImg}
                                        alt=""
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
                    totalCards={filteredInternList.length}
                    cardsPerPage={cardsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default InternList
