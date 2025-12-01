import React from "react";
import CategoryList from "./CategoryList";

export default function PressViewHeader() {
  return (
    <div className="mt-[80px] w-full bg-gradient-to-b from-[#fafafa] to-[#efefef] py-5 text-center select-none">
      <h1 className="text-6xl font-light tracking-wide text-[#2f2f2f] mb-5">
        PressView
      </h1>
      <CategoryList />
    </div>
  );
}
