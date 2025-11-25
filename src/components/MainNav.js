"use client";

import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaRss,
  FaInstagram,
  FaSearch,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#4a4a4a] border-t border-black">
      {/* MAIN WRAPPER */}
      <div className="max-w-[1891px] mx-auto px-4 h-[51px] flex items-center justify-between">

        {/* LEFT MENU (DESKTOP) */}
        <ul className="hidden md:flex items-center text-[#d4d1c7] text-[15px] tracking-wide gap-6">
          <li className="hover:text-white transition">Home</li>
          <li>*</li>

          <li className="hover:text-white transition">Features</li>
          <li>*</li>

          <li className="text-white font-semibold">Pages</li>
          <li>*</li>

          <li className="hover:text-white transition">Portfolio</li>
          <li>*</li>

          <li className="hover:text-white transition">Blog</li>
          <li>*</li>

          <li className="hover:text-white transition">Shop</li>
          <li>*</li>

          <li className="hover:text-white transition">Contacts</li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* RIGHT SECTION (DESKTOP) */}
        <div className="hidden md:flex items-center gap-5">

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 text-[#d4d1c7]">
            <FaTwitter size={18} className="opacity-90" />
            <FaFacebookF size={18} className="opacity-90" />
            <FaSkype size={18} className="opacity-90" />
            <FaRss size={18} className="opacity-90" />
            <FaInstagram size={18} className="opacity-90" />
          </div>

          {/* SEARCH BOX */}
          <div className="relative">
            <input
              type="text"
              className="bg-[#6b6b6b] text-white w-[170px] h-[32px] px-3 pr-10 placeholder-gray-300 focus:outline-none"
              placeholder="Search..."
            />
            <FaSearch
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4d1c7] opacity-90"
            />
          </div>

        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden bg-[#4a4a4a] border-t border-black px-4 py-4">

          {/* MOBILE MENU LINKS */}
          <ul className="flex flex-col text-[#d4d1c7] text-[15px] tracking-wide gap-4">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">Features</li>
            <li className="text-white font-semibold">Pages</li>
            <li className="hover:text-white transition">Portfolio</li>
            <li className="hover:text-white transition">Blog</li>
            <li className="hover:text-white transition">Shop</li>
            <li className="hover:text-white transition">Contacts</li>
          </ul>

          {/* SOCIAL ICONS (MOBILE) */}
          <div className="flex items-center gap-4 text-[#d4d1c7] mt-6">
            <FaTwitter size={18} />
            <FaFacebookF size={18} />
            <FaSkype size={18} />
            <FaRss size={18} />
            <FaInstagram size={18} />
          </div>

          {/* MOBILE SEARCH */}
          <div className="relative mt-6">
            <input
              type="text"
              className="bg-[#6b6b6b] text-white w-full h-[38px] px-3 pr-10 placeholder-gray-300 focus:outline-none rounded"
              placeholder="Search..."
            />
            <FaSearch
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4d1c7]"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
