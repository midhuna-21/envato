"use client";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

export default function PaginatedGrid({ data, itemsPerPage = 9 }) {
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="space-y-6">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedData.map((item, i) => (
          <CategoryCard key={i} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="px-4 py-2">
          {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
