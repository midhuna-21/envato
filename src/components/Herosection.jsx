"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function HeroSection({ data }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const currentSlide = data[current];

  return (
    <div className="relative w-full h-[200px] md:h-[500px] overflow-hiddenn">

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
    h-full w-[40%] md:w-[35%]
    flex flex-col items-center 
    text-center
    md:pt-30 pb-0
    p-10
  "
        >
          <h2 className="text-sm md:text-6xl text-[#2f2f2f] capitalize font-light tracking-wide md:mb-5 mb-1">
            {currentSlide.category}
          </h2>
          <svg
            width="100%"
            height="6"
            viewBox="0 0 48 6"
            className="mx-auto max-w-[20px] md:max-w-[280px] mb-3 md:mb-10"
            fill="none"
            stroke="#e6e6e1"
            strokeWidth="2"
          >
            <path d="M0 3 L3 0 L6 6 L9 0 L12 6 L15 0 L18 6 L21 0 L24 6 L27 0 L30 6 L33 0 L36 6 L39 0 L42 6 L45 0 L48 3" />
          </svg>

          <h3 className="opacity-90 text-[6px] md:text-[13px] font-semibold text-[#2f2f2f] font-serif mb-2 md:mb-8">
            {currentSlide.title}
          </h3>
          <div
            className="cursor-pointer text-white text-[6px] md:text-2xl md:mb-8 mb-3"
            onClick={nextSlide}
          >
            ✕
          </div>
          <Link
            href={`/${currentSlide.category}/${currentSlide.slug}`}
            title={`Read full article: ${currentSlide.title}`}
            aria-label={`Read full article: ${currentSlide.title}`}
            className="cursor-pointer relative group text-[6px] md:text-[13px]
             px-2 py-0.5 md:px-4 md:py-1 font-bold text-gray-200
             bg-[#2f2f2f] border-[1px] md:border-[4px] border-[#2f2f2f]
             hover:bg-white hover:border-white transition-all duration-300
             md:mb-10 mb-3 inline-block"
          >
            <span className="absolute inset-0 border md:border-[2px] border-white group-hover:border-[#2f2f2f] pointer-events-none"></span>
            <span className="relative group-hover:text-[#2f2f2f]">
              Read more
            </span>
          </Link>

          <div className="flex justify-center md:space-x-4 space-x-1">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`md:w-3 md:h-3 w-1 h-1 border border-white rotate-45 transition ${current === i ? "bg-white" : "bg-transparent"
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
