import React from "react";
import Link from "next/link";

const categories = [
  { label: "Business", slug: "business" },
  { label: "Politics", slug: "politics" },
  { label: "World", slug: "world" },
  { label: "U.S", slug: "us" },
  { label: "Finance", slug: "finance" },
  { label: "Sports", slug: "sports" },
  { label: "Entertainment", slug: "entertainment" },
];

export default function CategoryList() {
  return (
    <div className="flex flex-wrap justify-center gap-12 px-4">
      {categories.map((item, index) => {
        const width = item.label.length * 6; 
        return (
          <Link key={item.slug} href={`/${item.slug}`}>
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
  );
}
