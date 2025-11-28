import React from "react";

const Card = ({ label, score, title, description }) => {
  return (
    <div 
      className="
        flex flex-col items-center text-center 
        max-w-xl w-full 
        h-[290px]          /* 🌟 FIXED HEIGHT */
        justify-between    /* 🌟 Forces consistent spacing */
        px-4
      "
    >

      {/* Top Label */}
      <div className="relative w-full flex items-center justify-center mb-6">

        {/* Double top border */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="w-full border-t-2 border-[#2f2f2f]" />
          <div className="w-full border-t border-[#2f2f2f] mt-1" />
        </div>

        {/* Black Label */}
        <span
          className="
            relative bg-[#2f2f2f] text-white 
            px-10 py-2 text-sm tracking-[0.2em] 
            font-semibold uppercase flex items-center gap-4 z-10
            border-b-4 border-[#f0f0f0d5]
          "
        >
          <span>♦</span>
          {label}
          <span>♦</span>
        </span>
      </div>

      {/* Middle Content (score + title + description) */}
      <div className="flex flex-col items-center px-2 flex-grow">

        {/* Title */}
        <h2
          className="text-[26px] font-normal text-[#2f2f2f] leading-snug mb-3"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "clip",
            whiteSpace: "normal",
          }}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          className="
            text-gray-600 leading-relaxed text-[13px] font-serif
            overflow-hidden
            mb-4
            line-clamp-3        /* 🌟 Ensures equal space */
          "
        >
          {description}
        </p>
      </div>

      {/* Read More Section */}
      <div className="w-full mt-4">
        <div className="border-t-2 border-[#2f2f2f]" />
        <div className="border-t border-[#2f2f2f] mt-1" />

        <div className="my-4">
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

      {/* 🔥 SUB HEADING (MATCHES YOUR SCREENSHOT) */}
      <div
        className="w-full py-10 text-center"

      >
        <h2 className="text-[45px] font-normal tracking-widest text-[#2f2f2f]">
          LATEST REVIEWS
        </h2>
      </div>

      {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl">

  <div className="border-r border-[#d2d2d2] px-8">
    <Card
      label={data[0].category}
      score="6.83"
      title={data[0].title}
      description={data[0].shortdescription}
    />
  </div>

  <div className="border-r border-[#d2d2d2] px-8">
    <Card
      label={data[1].category}
      score="7.21"
      title={data[1].title}
      description={data[1].shortdescription}
    />
  </div>

  <div className="px-8">
    <Card
      label={data[2].category}
      score="9.05"
      title={data[2].title}
      description={data[2].shortdescription}
    />
  </div>

</div>


      {/* Bottom Navigation Diamonds */}
<div className="flex items-center gap-3 mt-15">

  {/* LEFT DIAMOND */}
  <div className="relative w-8 h-8 flex items-center justify-center rotate-45">

    {/* Outer Border */}
    <div className="absolute inset-0 border-2 border-[#2f2f2f]" />

    {/* Inner Border */}
    <div className="absolute inset-1 border border-[#d9d9d9]" />

    {/* Black Fill */}
    <div className="absolute inset-[3px] bg-[#2f2f2f]" />

    {/* Arrow */}
    <span className="absolute text-white text-xl -rotate-45 select-none">
      ‹
    </span>
  </div>

  {/* RIGHT DIAMOND */}
  <div className="relative w-8 h-8 flex items-center justify-center rotate-45">

    {/* Outer Border */}
    <div className="absolute inset-0 border-2 border-[#2f2f2f]" />

    {/* Inner Border */}
    <div className="absolute inset-1 border border-[#d9d9d9]" />

    {/* Black Fill */}
    <div className="absolute inset-[3px] bg-[#2f2f2f]" />

    {/* Arrow */}
    <span className="absolute text-white text-xl -rotate-45 select-none">
      ›
    </span>
  </div>

</div>


    </div>
  );
}
