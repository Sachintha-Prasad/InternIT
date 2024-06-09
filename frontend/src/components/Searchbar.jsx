import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'

const Searchbar = ({ setInternList, setCurrentPage }) => {
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const handleSearch = async (search) => {
            try {
                const res = await fetch('http://localhost:5000/internships')
                const data = await res.json()
                const filteredData = data.filter((intern) =>
                    intern.title
                        .toLowerCase()
                        .includes(search.toLowerCase().trim())
                )
                console.log(filteredData)
                setInternList(filteredData)
                setCurrentPage(1)
            } catch (error) {
                console.error('Data fetching error', error)
            }
        }

        handleSearch(searchQuery)
    }, [searchQuery])

    return (
        <form className="relative w-full" onSubmit={(e) => e.preventDefault()}>
            <input
                type="search"
                id="search"
                className="group w-full max-w-[600px] rounded-lg border-[1.5px] border-indigo-500 bg-gray-50 px-2 py-1 ps-8 text-gray-800 placeholder:font-light focus:outline-none focus:ring-1 focus:ring-indigo-600"
                placeholder="search by intern name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <CiSearch className="absolute top-1/2 z-10 ms-2 -translate-y-1/2 text-xl text-indigo-500" />
        </form>
    )
}

export default Searchbar
