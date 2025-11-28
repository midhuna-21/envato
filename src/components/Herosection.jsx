"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection({ data }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const currentSlide = data[current];

  return (
    <div className="relative w-full h-[500px] overflow-hidden">

      {data?.map((item, index) => (
        <div
          key={item.slug || index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div
          className="
    bg-[#c1c0b4]/80
    h-full w-[75%] md:w-[35%]
    flex flex-col items-center 
    text-center
    pt-30 pb-0
    p-10
  "
        >

          {/* CATEGORY */}
          <h1 className="text-4xl md:text-6xl text-[#2f2f2f] capitalize font-light tracking-wide mb-5">
            {currentSlide.category}
          </h1>

          {/* LINE */}
          <svg
            width="100%"
            height="6"
            viewBox="0 0 48 6"
            className="mx-auto max-w-[280px] mb-10"
            fill="none"
            stroke="#e6e6e1"
            strokeWidth="2"
          >
            <path d="M0 3 L3 0 L6 6 L9 0 L12 6 L15 0 L18 6 L21 0 L24 6 L27 0 L30 6 L33 0 L36 6 L39 0 L42 6 L45 0 L48 3" />
          </svg>

          {/* TITLE */}
          <p className="opacity-90 text-[13px] font-semibold text-[#2f2f2f] font-serif mb-8">
            {currentSlide.title}
          </p>

          {/* X BUTTON */}
          <div
            className="cursor-pointer text-white text-2xl mb-8"
            onClick={nextSlide}
          >
            ✕
          </div>

          {/* READ MORE BUTTON */}
          <button className="relative group px-4 py-1 font-bold text-gray-200 bg-[#2f2f2f] border-[4px] border-[#2f2f2f] hover:bg-white hover:border-white transition-all duration-300 mb-10">
            <span className="absolute inset-0 border-[2px] border-white group-hover:border-[#2f2f2f] pointer-events-none"></span>
            <span className="relative group-hover:text-[#2f2f2f]">
              read more
            </span>
          </button>

          {/* DOTS */}
          <div className="flex justify-center space-x-4">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 border border-white rotate-45 transition ${current === i ? "bg-white" : "bg-transparent"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
