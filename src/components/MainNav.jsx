"use client";

import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaRss,
  FaInstagram,
  FaSearch
} from "react-icons/fa";

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== MOBILE TOP BAR ===== */}
      <div className="md:hidden w-full bg-[#EEEDE3] flex items-center justify-between px-2 py-1 fixed top-[36px] left-0 z-[9999]">
        <span className="text-[#2f2f2f] font-serif text-[15px]">Menu</span>

        <button
          onClick={() => setOpen(!open)}
          className="w-9 h-9 bg-[#2f2f2f] border border-[#c1c0b4] flex items-center justify-center"
        >
          <div className="flex flex-col gap-[3px]">
            <span className="block w-5 h-[2px] bg-[#c1c0b4]"></span>
            <span className="block w-5 h-[2px] bg-[#c1c0b4]"></span>
            <span className="block w-5 h-[2px] bg-[#c1c0b4]"></span>
          </div>
        </button>
      </div>

      {/* ===== NAV WRAPPER ===== */}
      <nav
        className="
          fixed left-0 w-full border-t border-black z-[9998]
          top-[80px]
          bg-[#EEEDE3]
          md:bg-[#4a4a4a]
          md:top-[50px]
        "
      >

        {!open && (
          <div className="md:hidden bg-[#2f2f2f] w-full flex items-center justify-center gap-4 py-2 text-[#c1c0b4] text-[18px]">
            <FaTwitter />
            <FaFacebookF />
            <FaSkype />
            <FaRss />
            <FaInstagram />
            <FaSearch />
          </div>
        )}
 

        {/* DESKTOP NAV */}
        <div className="max-w-[1891px] mx-auto px-10 py-1 hidden md:flex items-center justify-between">

          <ul className="flex items-center text-[#C1C0B4] text-[13px] tracking-wide gap-4 font-serif">
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

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-4 text-[#d4d1c7]">
              <FaTwitter size={16} />
              <FaFacebookF size={16} />
              <FaSkype size={16} />
              <FaRss size={16} />
              <FaInstagram size={16} />
            </div>

            <div className="relative">
              <input
                type="text"
                className="bg-[#6b6b6b] text-white w-[170px] h-[25px] px-3 pr-10 placeholder-gray-300 focus:outline-none"
              />
              <FaSearch
                size={16}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4d1c7]"
              />
            </div>
          </div>
        </div>

        {/* ===== MOBILE DROPDOWN ===== */}
        {open && (
          <div className="md:hidden bg-[#2f2f2f] px-10 py-4 font-serif">

            <ul className="flex flex-col text-[#d4d1c7] text-[13px] tracking-wide gap-3">
              {["HOME", "FEATURES", "PAGES", "PORTFOLIO", "BLOG", "SHOP", "CONTACTS"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center border-b border-[#4a4a4a] pb-2"
                  >
                    <span>
                      {String(index + 1).padStart(2, "0")}.{" "}
                      <span className={index === 2 ? "text-white" : ""}>{item}</span>
                    </span>
                  </li>
                )
              )}
            </ul>

            <div className="flex items-center gap-4 text-[#c1c0b4] text-[18px] justify-center mt-4">
              <FaTwitter />
              <FaFacebookF />
              <FaSkype />
              <FaRss />
              <FaInstagram />
              <FaSearch />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
