"use client";

import {
  FaUser,
  FaCalendarAlt,
  FaComments,
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaRss,
  FaInstagram
} from "react-icons/fa";

export default function CategoryCard({ item }) {
  return (
    <div className="max-w-xl mx-auto bg-white text-[#333] border-t border-black pt-4 pb-10">

      {/* Image */}
      <img
        src={item.image}
        className="w-full border border-[#d7d7d7]"
      />

      {/* Title */}
      <h2 className="text-3xl font-light mt-6 mb-4">
        {item.title}
      </h2>

      {/* Meta Info */}
      <div className="flex items-center justify-center gap-3 text-sm text-gray-600 mb-6">
        <FaUser className="text-gray-600" />
        <span>{item.author}</span>

        <span className="mx-2">|</span>

        <FaCalendarAlt className="text-gray-600" />
        <span>{item.date}</span>

        <span className="mx-2">|</span>

        <FaComments className="text-gray-600" />
        <span>{item.comments} Comments</span>
      </div>

      {/* Description */}
      <p className="text-[15px] text-gray-700 leading-relaxed text-center px-2">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {item.tags.map((tag, i) => (
          <span
            key={i}
            className="px-4 py-1 border border-[#333] text-sm tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* SHARE + READ MORE */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-300 px-2">

        {/* Share */}
        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold">SHARE ON:</span>
          <FaTwitter className="text-gray-600 hover:text-black cursor-pointer" />
          <FaFacebookF className="text-gray-600 hover:text-black cursor-pointer" />
          <FaSkype className="text-gray-600 hover:text-black cursor-pointer" />
          <FaRss className="text-gray-600 hover:text-black cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-black cursor-pointer" />
        </div>

        {/* Read more */}
        <button className="bg-[#333] text-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-black">
          read more
        </button>
      </div>
    </div>
  );
}
