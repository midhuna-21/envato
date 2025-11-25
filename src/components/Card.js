import React from "react";

const Card = ({ label, score, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 max-w-xl w-full">

      {/* Top Label */}
      <div className="relative mb-6 w-full flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-400"></div>
        </div>
        <span className="relative bg-white px-6 text-sm tracking-widest font-semibold">
          {label}
        </span>
      </div>

      {/* Score */}
      <h2 className="text-6xl font-light text-gray-400 mb-6">{score}</h2>

      {/* Title */}
      <h3 className="text-4xl font-medium text-gray-800 leading-snug mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
        {description}
      </p>

      {/* Read More Section */}
      <div className="w-full mb-8">
        <div className="border-t-[3px] border-gray-800 mb-1"></div>

        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-gray-400"></div>
          <span className="absolute bg-white px-4 text-gray-800 font-medium text-lg">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ThreeCardsSection() {
  return (
    <div className="w-full flex flex-col items-center py-20 bg-white">

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full max-w-7xl px-4">

        <Card
          label="DESIGN"
          score="6.83"
          title="Mauris ultrices dui sed accumsan"
          description="Donec ac dapibus elit. Proin facilisis nulla in est mattis, ut dapibus justo euismod. Proin sollicitudin a mi vel fermentum. Phasellus aliquam sollicitudin libero nec tincidunt."
        />

        <Card
          label="PEOPLE"
          score="7.21"
          title="Nulla nec libero sed leo facilisis"
          description="Fusce molestie nulla velit, fringilla tristique ipsum tincidunt vel. Suspendisse tincidunt arcu arcu, quis viverra tortor bibendum ut. Fusce non nulla consectetur."
        />

        <Card
          label="FASHION"
          score="9.05"
          title="Vestibulum varius urna molestie"
          description="Nam ut mattis est, a lacinia ligula. Praesent condimentum dapibus condimentum. Suspendisse potenti. Nulla tempor nulla quis justo ultrices commodo."
        />
      </div>

      {/* Bottom Navigation Diamonds */}
      <div className="flex items-center gap-6 mt-16">

        {/* Left Diamond */}
        <div className="w-12 h-12 border border-gray-800 flex items-center justify-center rotate-45">
          <div className="w-4 h-4 border-r-2 border-b-2 border-gray-800 -rotate-45"></div>
        </div>

        {/* Right Diamond */}
        <div className="w-12 h-12 border border-gray-800 flex items-center justify-center rotate-45">
          <div className="w-4 h-4 border-r-2 border-b-2 border-gray-800 -rotate-45"></div>
        </div>

      </div>
    </div>
  );
}
