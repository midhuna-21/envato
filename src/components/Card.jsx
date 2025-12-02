import React from "react";

const Card = ({ label, score, title, description }) => {
  return (
    <div
      className="
        flex flex-col items-center text-center 
       h-[180px]
        md:h-[290px]          /* 🌟 FIXED HEIGHT */
        justify-between    /* 🌟 Forces consistent spacing */
       
      "
    >

      {/* Top Label */}
      <div className="relative w-full flex items-center justify-center md:mb-6 mb-4">

        {/* Double top border */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="w-full border-t-2 border-[#2f2f2f]" />
          <div className="w-full border-t border-[#2f2f2f] mt-1" />
        </div>

        {/* Black Label */}
        <span
          className="
            relative bg-[#2f2f2f] text-white 
            md:px-10 py-2 px-6 text-sm tracking-[0.2em] 
            font-semibold uppercase flex items-center gap-4 z-10
            border-b-4 border-[#f0f0f0d5]
          "
        >
          <span>♦</span>
          {label}
          <span>♦</span>
        </span>
      </div>
      <div className="flex flex-col items-center px-2 flex-grow">
        <h2
          className="text-[26px] font-normal text-[#2f2f2f] leading-[1.1] tracking-tight line-clamp-1 md:line-clamp-2 md:mb-3 mb-2"
        >
          {title}
        </h2>
        <p
          className="
            text-gray-600 leading-[1.3] tracking-tight text-[13px] font-serif
            overflow-hidden
            mb-4
            line-clamp-3        /* 🌟 Ensures equal space */
          "
        >
          {description}
        </p>
      </div>

      <div className="w-full mt-4">
        <div className="border-t-2 border-[#2f2f2f]" />
        <div className="border-t border-[#2f2f2f] mt-1" />

        <div className="my-2 md:my-4">
          <span className="text-[#2f2f2f] font-medium text-lg tracking-wide">
            Read More →
          </span>
        </div>

        <div className="border-t-2 border-[#2f2f2f]" />
        <div className="border-t border-[#2f2f2f] mt-1" />
      </div>

    </div>
  );
};


export default function ThreeCardsSection({ data }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full py-7 md:py-10 text-center"
      >
        <h2 className="text-[42px] md:text-[45px] font-normal text-[#2f2f2f] leading-[1.1] tracking-tight">
          LATEST REVIEWS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:max-w-7xl">
        <div className="px-3 md:py-0 py-8">
          <Card
            label={data[0].category}
            score="6.83"
            title={data[0].title}
            description={data[0].shortdescription}
          />
        </div>
        <div className="px-3 md:py-0 py-8 ">
          <Card
            label={data[1].category}
            score="7.21"
            title={data[1].title}
            description={data[1].shortdescription}
          />
        </div>
        <div className="px-3 md:py-0 py-8">
          <Card
            label={data[2].category}
            score="9.05"
            title={data[2].title}
            description={data[2].shortdescription}
          />
        </div>
      </div>
      <div className="flex items-center gap-3 md:mt-15 mt-10">
        <div className="relative md:w-8 md:h-8 w-5 h-5 flex items-center justify-center rotate-45">
          <div className="absolute inset-0 border-2 border-[#2f2f2f]" />
          <div className="absolute inset-1 border border-[#d9d9d9]" />
          <div className="absolute inset-[3px] bg-[#2f2f2f]" />
          <span className="absolute text-white text-xl -rotate-45 select-none">
            ‹
          </span>
        </div>
        <div className="relative  md:w-8 md:h-8 w-5 h-5 flex items-center justify-center rotate-45">
          <div className="absolute inset-0 border-2 border-[#2f2f2f]" />
          <div className="absolute inset-1 border border-[#d9d9d9]" />
          <div className="absolute inset-[3px] bg-[#2f2f2f]" />
          <span className="absolute text-white text-xl -rotate-45 select-none">
            ›
          </span>
        </div>
      </div>
    </div>
  );
}
