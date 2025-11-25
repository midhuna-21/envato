import React from "react";

export default function PressViewHeader() {
  return (
    <div className="w-full bg-gradient-to-b from-[#fafafa] to-[#efefef] border-t border-b border-gray-300 py-10 text-center select-none">
      {/* Title */}
      <h1 className="text-6xl font-light tracking-wide text-[#3a3a3a] mb-12">
        PressView
      </h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-16 px-4">
        {[
          { num: "01", label: "Design" },
          { num: "02", label: "Fashion" },
          { num: "03", label: "Style" },
          { num: "04", label: "Photography" },
          { num: "05", label: "Music" },
          { num: "06", label: "People" },
          { num: "07", label: "Travel" },
        ].map((item) => (
          <div key={item.num} className="text-center">
            <div className="text-sm text-gray-400 tracking-widest mb-2">
              — {item.num} —
            </div>
            <div className="text-xl font-semibold text-[#2b2b2b] mb-1">
              {item.label}
            </div>
            <div className="w-12 h-[2px] bg-[#2b2b2b] mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
