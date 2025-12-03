"use client";
import { useState } from "react";
import CategoryCard from "./CategoryCard";

export default function PaginatedGrid({ data, itemsPerPage = 9 }) {
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const paginatedData = data.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="w-full px-4 sm:px-2 lg:px-4 xl:px-12 space-y-6 mb-22">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {paginatedData.map((item, i) => (
          <div key={i} className="break-inside-avoid mb-6">
            <CategoryCard item={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center border border-[#ccc]">
        <div className="flex items-center space-x-0">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 text-[13px] cursor-pointer font-serif hover:underline border-r border-[#ccc] disabled:text-gray-400"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => {
            const pageNumber = i + 1;
            const isActive = pageNumber === page;

            return (
              <button
                key={i}
                onClick={() => setPage(pageNumber)}
                className={`px-4 py-2 text-[13px] border-r border-[#ccc] cursor-pointer
                  ${isActive ? "bg-[#2f2f2f] text-white border border-black" : "text-[#2f2f2f]"}`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 text-[13px] cursor-pointer font-serif disabled:text-gray-400 hover:underline"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
