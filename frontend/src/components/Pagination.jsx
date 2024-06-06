import React from "react";

const Pagination = ({
  totalCards,
  cardsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const page = [];

  const totalPages = Math.ceil(totalCards / cardsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    page.push(i);
  }

  return (
    <div className="flex justify-center gap-3">
      {page.map((item, index) => (
        <button
          key={index}
          className={`flex size-8 cursor-pointer items-center justify-center rounded-sm p-2 ring-1 ring-gray-200 hover:bg-indigo-50 ${
            item === currentPage &&
            "bg-indigo-500 text-white hover:bg-indigo-500"
          }`}
          onClick={() => setCurrentPage(item)}
        >
          <p>{item}</p>
        </button>
      ))}
    </div>
  );
};

export default Pagination;
