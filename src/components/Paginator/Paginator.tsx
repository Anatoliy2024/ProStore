import React from "react"

type PaginatorProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Paginator({
  currentPage,
  totalPages,
  onPageChange,
}: PaginatorProps) {
  const pages = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <div className="flex justify-center space-x-2 mt-4 flex-wrap">
      {/* <button
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </button> */}

      {pages.map((page) => (
        <button
          key={page}
          className="px-3 py-1 border border-gray-300 rounded cursor-pointer hover:bg-gray-500 "
          onClick={() => onPageChange(page)}
          style={{ color: currentPage === page ? "red" : "" }}
        >
          {page}
        </button>
      ))}

      {/* <button
        className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Вперед
      </button> */}
    </div>
  )
}
