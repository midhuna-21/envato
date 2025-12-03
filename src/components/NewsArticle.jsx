import Image from "next/image";
import { FaFacebookF, FaInstagram, FaRss, FaSkype, FaTwitter, FaUser } from "react-icons/fa";

export default function NewsArticle({ article }) {

  return (
    <div className="mx-auto">
      {/* IMAGE */}
      <div className="relative w-full h-80 md:h-150 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-[32px] text-[#2f2f2f] font-normal hover:underline max-w-[750px] mt-6 leading-[1.1] tracking-tight">
        {article.title}
      </h1>

      {/* Meta */}
      <div className="text-[#2f2f2f] mt-2 space-x-3 font-serif text-[12px] flex flex-wrap justify-center items-center">

        {/* USER ICON */}
        <FaUser className="text-[#333] text-[14px]" />

        <span>By {article.author}</span>
        <span className="text-[#ccc]">|</span>
        <span>{article.date}</span>
      </div>

      {/* Content */}
      <div className="mt-4 space-y-5 text-[#2f2f2f] text-[12px] md:text-[15px] font-serif leading-[1.3] tracking-tight ">
        <p>{article.description}</p>
      </div>

      {/* Share Section */}
      <div className="flex items-center justify-between  pt-0.5 border-t border-[#2f2f2f] border-b mt-10 pb-2 pt-2">

        <div className="flex items-center gap-3 text-[14px] text-[#2f2f2f]">
          <span className="font-normal font-serif">SHARE ON:</span>
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaSkype className="cursor-pointer" />
          <FaRss className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
      <div className="border  mt-0.5 mb-8"></div>
    </div>
  );
}
