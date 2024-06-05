import React from "react"

const Pagination = ({
    totalCards,
    cardsPerPage,
    setCurrentPage,
    currentPage
}) => {
    const page = []

    const totalPages = Math.ceil(totalCards / cardsPerPage)

    for (let i = 1; i <= totalPages; i++) {
        page.push(i)
    }

    return (
        <div className="flex gap-3 justify-center">
            {page.map((item, index) => (
                <button
                    key={index}
                    className={`flex items-center justify-center cursor-pointer p-2 size-8 ring-1 ring-gray-200 rounded-sm hover:bg-indigo-50 ${
                        item === currentPage &&
                        "bg-indigo-500 hover:bg-indigo-500  text-white"
                    }`}
                    onClick={() => setCurrentPage(item)}
                >
                    <p>{item}</p>
                </button>
            ))}
        </div>
    )
}

export default Pagination
