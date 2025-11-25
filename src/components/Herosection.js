"use client";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    id: 1,
    src: "/images/item-1.jpg", 
  },
  {
    id: 2,
    src: "/images/item-2.jpg",
  },
  {
    id: 3,
    src: "/images/item-3.jpg",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt="Hero slide"
            fill
            className="object-cover"
            priority={index === current}
          />
        </div>
      ))}

      {/* Center Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/40 backdrop-blur-md px-10 py-16 md:px-16 md:py-24 text-center max-w-2xl mx-auto text-white rounded-lg">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide mb-4">
            Responsive <br />
            <span className="font-medium">Design</span>
          </h1>

          <p className="mt-4 md:text-lg opacity-90">
            PressView comes with responsive and flexible layout.
          </p>

          <p className="md:text-lg mt-2 opacity-90">
            All pages look identically great regardless of the device’s resolution and
            pixel density.
          </p>

          <button className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition rounded-md text-lg">
            read more
          </button>

          {/* Close icon */}
          <div
            className="mt-6 cursor-pointer text-white text-xl"
            onClick={nextSlide}
          >
            ✕
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-6 space-x-4">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-4 h-4 border border-white rotate-45 ${
                  current === i ? "bg-white" : "bg-transparent"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
