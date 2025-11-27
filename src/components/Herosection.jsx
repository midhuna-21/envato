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
      {/* Background Slides */}
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

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="
      bg-[#C1C0B4CC]/80 
      h-full w-[75%] md:w-[35%]   /* Decreased width */
      flex flex-col items-center justify-center 
      text-center 
  ">

          <h1 className="text-4xl md:text-6xl text-[#2f2f2f] capitalize font-light tracking-wide mb-4">
            {currentSlide.category}
          </h1>

          <p className="mt-2 opacity-90 text-[13px] font-semibold text-[#2f2f2f] font-serif">
            {currentSlide.title}
          </p>
          {/* Close icon / Next slide */}
          <div
            className="mt-6 cursor-pointer text-white text-xl"
            onClick={nextSlide}
          >
            ✕
          </div>


          <button class="relative group px-5 py-2 font-bold text-gray-200
                bg-[#2f2f2f] border-[4px] border-[#2f2f2f] hover:bg-white hover:border-white
                transition-all duration-300">

            <span class="absolute inset-0 border-[2px] border-white hover:border-[#2f2f2f]
               pointer-events-none group-hover:border-[#2f2f2f]">
            </span>

            <span class="relative group-hover:text-[#2f2f2f]">
              read more
            </span>

          </button>




          {/* Slider Dots */}
          <div className="flex justify-center mt-6 space-x-4">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}

                className={`w-4 h-4 border border-white rotate-45 transition ${current === i ? "bg-white" : "bg-transparent"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
