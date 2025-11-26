"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection({ data }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const currentSlide = data[current]; // active slide data

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
        <div className="bg-black/40 backdrop-blur-md px-10 py-16 md:px-16 md:py-24 
                        text-center max-w-2xl mx-auto text-white rounded-lg">

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl capitalize font-light tracking-wide mb-4">
            {currentSlide.category}
          </h1>

          {/* SHORT DESCRIPTION */}
          <p className="mt-4 md:text-lg opacity-90">
            {currentSlide.title}
          </p>

          {/* OPTIONAL LONG DESCRIPTION */}
          {currentSlide.description && (
            <p className="md:text-lg mt-2 opacity-90">
              {currentSlide.shortdescription}
            </p>
          )}


          <button className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition rounded-md text-lg">
            read more
          </button>

          {/* Close icon / Next slide */}
          <div
            className="mt-6 cursor-pointer text-white text-xl"
            onClick={nextSlide}
          >
            ✕
          </div>

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
