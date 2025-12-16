"use client";

import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaMedium
} from "react-icons/fa";
import Link from "next/link";
import SubstackIconGray from "./SubstackIconGray";

export default function MainNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden w-full bg-[#EEEDE3] flex items-center justify-between px-2 py-1 fixed top-[36px] left-0 z-[9999]">
        <span className="text-[#2f2f2f] font-serif text-[15px]">Menu</span>

     <button
  onClick={() => setOpen(!open)}
  aria-label={open ? "Close menu" : "Open menu"}
  aria-expanded={open}
  aria-controls="mobile-menu"
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
        <div className="max-w-[1891px] mx-auto px-10 py-1 hidden md:flex items-center justify-between">

          <ul className="flex items-center text-[#C1C0B4] text-[13px] tracking-wide gap-4 font-serif">
            <li>
              <Link href="/" title="home" aria-label="home" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>*</li>
            <li>
              <Link href="/about" title="about" aria-label="about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>*</li>
            <li>
              <Link href="/contact" title="contact" aria-label="contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <div className="relative">
              <input
                type="text"
                aria-label="Search"
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
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" }
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b border-[#4a4a4a] pb-2"
                >
                  <Link href={item.href} aria-label={item.label} onClick={() => setOpen(false)}>
                    <span>
                      {String(index + 1).padStart(2, "0")}.{" "}
                      <span className="text-white">{item.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>



          </div>
        )}
      </nav>
    </>
  );
}
