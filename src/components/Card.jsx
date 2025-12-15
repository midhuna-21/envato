import Link from "next/link";
import React from "react";
import { FaUser, FaCalendarAlt} from "react-icons/fa";

const Card = ({ category, slug, title, description, name, date }) => {
  return (
    <div
      className="
        flex flex-col items-center text-center 
       h-[180px]
        md:h-[290px]     
        justify-between   
       
      "
    >

      <div className="relative w-full flex items-center justify-center md:mb-6 mb-4 ">
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="w-full border-t-2 border-[#2f2f2f] " />
          <div className="w-full border-t border-[#2f2f2f] mt-1" />
        </div>

        <span
          className="
            relative bg-[#2f2f2f] text-white 
            md:px-10 py-2 px-6 text-sm tracking-[0.2em] 
            font-semibold uppercase flex items-center gap-4 z-10
            border-b-4 border-[#f0f0f0d5]
          "
        >
          <span>♦</span>
          {category}
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
          <div className="flex items-center justify-center gap-1 text-[8px] text-gray-600 mb-3 ">
                               <FaUser className="text-gray-600" />
                               <span>{name}</span>
                     
                               <span className="mx-2">|</span>
                     
                               <FaCalendarAlt className="text-gray-600" />

                               <span>{date}</span>
                             </div>
        <div className="w-full flex flex-col items-center cursor-pointer">
          <div className="w-full">
            <div className="border-t-2 border-[#2f2f2f]" />
            <div className="border-t border-[#2f2f2f] mt-0.5" />
          </div>

          <Link href={`/${category}/${slug}`} className="text-decoration-none" title={slug}>
            <div className="my-2 flex justify-center">
              <span className="text-[#2f2f2f] font-semibold font-serif text-[14px] tracking-wide">
                Read More →
              </span>
            </div>
          </Link>

          <div className="w-full">
            <div className="border-t-2 border-[#2f2f2f]" />
            <div className="border-t border-[#2f2f2f] mt-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default function ThreeCardsSection({ data }) {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10">

      {/* Heading */}
      <div className="w-full py-7 md:py-10 text-center ">
        <h2
          className="
            font-normal text-[#2f2f2f] leading-[1.1] tracking-tight
            text-[42px] md:text-[45px]
            w-[220px] mx-auto md:w-auto md:mx-0
          "
        >
        Latest Updates
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-18 md:gap-0">
        {data.slice(0, 3).map((item, index) => (

          <div key={index} className="relative px-0.5">

            <Card
              category={item.category}
              score={item.score}
              title={item.title}
              slug={item.slug}
              description={item.shortdescription}
              name={item.author.name}
              date={item.date}
            />
          </div>

        ))}
      </div>


      {/* Navigation Buttons */}
      <div className="flex items-center gap-3 mt-17 md:mt-0">
        <div className="relative md:w-8 md:h-8 w-5 h-5 flex items-center justify-center rotate-45">
          <div className="absolute inset-0 border-2 border-[#2f2f2f]" />
          <div className="absolute inset-1 border border-[#d9d9d9]" />
          <div className="absolute inset-[3px] bg-[#2f2f2f]" />
          <span className="absolute text-white text-xl -rotate-45 select-none">
            ‹
          </span>
        </div>
        <div className="relative md:w-8 md:h-8 w-5 h-5 flex items-center justify-center rotate-45">
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

