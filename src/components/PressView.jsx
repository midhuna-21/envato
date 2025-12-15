"use client";
import React, { useState } from "react";
import Link from "next/link";

const categories = [
  { label: "World", slug: "world" },
  { label: "U.S", slug: "us" },
  { label: "Business", slug: "business" },
  { label: "Politics", slug: "politics" },
  { label: "Finance", slug: "finance" },
  { label: "Sports", slug: "sports" },
  { label: "Entertainment", slug: "entertainment" },
];

export default function PressViewHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-[80px] md:mt-[80px] w-full bg-gradient-to-b from-[#fafafa] to-[#efefef] py-2 text-center select-none">

      {/* Title */}
      <Link href='/' title='home'>
      <h1 className="text-[45px] md:text-[50px] font-semibold tracking-wide text-[#2f2f2f] mb-2">
       Fiscal<span className="font-light">Fusion</span>
      </h1>
      </Link>

      {/* === MOBILE ARROW TO OPEN CATEGORY SECTION === */}
      <div className="md:hidden flex justify-center mb-3">
        <button
          onClick={() => setOpen(!open)}
          className="transition"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3b3b3b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`mx-auto transition-transform duration-300 ${open ? "" : "rotate-180"}`}

          >
            <polyline points="6 15 12 9 18 15" />
          </svg>
        </button>
      </div>


      {/* === MOBILE CATEGORY SECTION (COLLAPSIBLE + SCROLL) === */}
      {open && (
<div className="md:hidden overflow-x-auto scrollbar-hide px-4 max-w-[300px] pb-3 mx-auto">

          <div className="flex gap-10 w-max">
            {categories.map((item, index) => {
              const width = item.label.length * 6;

              return (
                <Link key={item.slug} href={`/${item.slug}`} title={item.title}>
                  <div className="text-center cursor-pointer hover:opacity-70 transition">
                    <div className="text-sm text-gray-400 tracking-widest mb-1">
                      — {index + 1} —
                    </div>

                    <div className="text-[14px] font-semibold text-[#2f2f2f] mb-1 font-serif">
                      {item.label}
                    </div>

                    <svg
                      width={width}
                      height="4"
                      viewBox="0 0 48 6"
                      className="mx-auto"
                      fill="none"
                      stroke="#525151"
                      strokeWidth="2"
                    >
                      <path d="M0 3 L3 0 L6 6 L9 0 L12 6 L15 0 L18 6 L21 0 L24 6 L27 0 L30 6 L33 0 L36 6 L39 0 L42 6 L45 0 L48 3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* === DESKTOP LAYOUT (same as original) === */}
      <div className="hidden md:flex flex-wrap justify-center gap-12 px-4 mt-4">
        {categories.map((item, index) => {
          const width = item.label.length * 6;

          return (
            <Link key={item.slug} href={`/${item.slug}`} title={item.title}>
              <div className="text-center cursor-pointer hover:opacity-70 transition">
                <div className="text-sm text-gray-400 tracking-widest mb-1">
                  — {index + 1} —
                </div>

                <div className="text-[14px] font-semibold text-[#2f2f2f] mb-1 font-serif">
                  {item.label}
                </div>

                <svg
                  width={width}
                  height="4"
                  viewBox="0 0 48 6"
                  className="mx-auto"
                  fill="none"
                  stroke="#525151"
                  strokeWidth="2"
                >
                  <path d="M0 3 L3 0 L6 6 L9 0 L12 6 L15 0 L18 6 L21 0 L24 6 L27 0 L30 6 L33 0 L36 6 L39 0 L42 6 L45 0 L48 3" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
