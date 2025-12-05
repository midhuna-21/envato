import Image from "next/image";
import { FaFacebookF, FaInstagram, FaRss, FaSkype, FaTwitter, FaUser } from "react-icons/fa";

export default function JulioArticles({ article }) {

  return (
    <div className="mx-auto">
      <div className="relative w-full h-80 md:h-150 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-2xl md:text-[32px] text-[#2f2f2f] font-normal hover:underline max-w-[750px] mt-6 leading-[1.1] tracking-tight">
        {article.title}
      </h1>

      <div className="text-[#2f2f2f] mt-2 space-x-3 font-serif text-[12px] flex flex-wrap justify-center items-center">
        <FaUser className="text-[#333] text-[14px]" />
        <span>By {article.author}</span>
        <span className="text-[#ccc]">|</span>
        <span>{article.date}</span>
      </div>

      <div className="mt-6 space-y-4 text-[#2f2f2f] font-serif leading-[1.6] tracking-tight">

        {article.sub.map((item, index) => (
          <div key={index} className="space-y-3">
            {/* Title */}
            <h2 className="text-[18px] md:text-[22px] font-extrabold uppercase tracking-wide relative inline-block">
              {item.title}
              <span className="absolute left-0 -bottom-1 w-12 h-[2px] bg-[#2f2f2f] rounded"></span>
            </h2>

            {/* Paragraph */}
            <p className="text-[14px] md:text-[16px] text-[#4a4a4a]">
              {item.descr}
            </p>
          </div>
        ))}

      </div>



      {/* Share Section */}
      <div className="flex items-center justify-between pt-0.5 border-t border-[#2f2f2f] border-b mt-10 pb-2 pt-2">
        <div className="flex items-center gap-3 text-[14px] text-[#2f2f2f]">
          <span className="font-normal font-serif">SHARE ON:</span>
          <FaTwitter className="cursor-pointer" />
          <FaFacebookF className="cursor-pointer" />
          <FaSkype className="cursor-pointer" />
          <FaRss className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
      </div>
      <div className="border mt-0.5 mb-8"></div>
    </div>
  );
}
