import Image from "next/image";
import Link from "next/link";
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
    <div className="max-w-xl mx-auto bg-white text-[#333] border-t-2 border-[#2f2f2f]">
      <div className="border-t border-[#2f2f2f] mt-0.5" />
      <div className="pt-4 pb-5 p-2">
        <Link href={`/${item.category}/${item.slug}`} title={item.title}>
          <div className="relative w-full h-[260px] border border-[#d7d7d7] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title || "Category Image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </Link>


        <h2 className="text-[32px] font-light mt-2 mb-2 line-clamp-1 text-center">
          {item.title}
        </h2>

        <div className="flex items-center justify-center gap-3 text-[12px] text-gray-600 mb-3 ">
          <FaUser className="text-gray-600" />
          <span>{item.author}</span>

          <span className="mx-2">|</span>

          <FaCalendarAlt className="text-gray-600" />
          <span>{item.date}</span>
        </div>

        <p className="text-[13px] text-gray-700 leading-relaxed font-serif text-center px-2">
          {item.shortdescription}
        </p>


      </div>
      <div className="flex items-center justify-between  pt-0.5 border-t border-[#2f2f2f] border-b ">

        <div className="flex items-center gap-3 text-[14px] text-[#2f2f2f]">
          <span className="font-normal font-serif">SHARE ON:</span>
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaSkype className="cursor-pointer" />
          <FaRss className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>

        <button className="bg-[#333] text-white px-3 py-2 text-[14px] font-serif font-normal tracking-widest hover:bg-black">
          read more
        </button>
      </div>
      <div className="border  mt-0.5 mb-8"></div>
    </div>
  );
}
