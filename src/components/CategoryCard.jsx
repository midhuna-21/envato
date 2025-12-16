import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaCalendarAlt,
  FaComments,
  FaFacebookF,
  FaInstagram,
  FaMedium
} from "react-icons/fa";
import SubstackIconBlack from "./SubstackIconBlack";

export default function CategoryCard({ item }) {
  return (
    <div className="max-w-xl mx-auto bg-white text-[#333] border-t-2 border-[#2f2f2f]">
      <div className="border-t border-[#2f2f2f] mt-0.5" />
      <div className="pt-4 pb-5 p-2">
        <Link href={`/${item.category}/${item.slug}`} title={item.title} aria-label={item.title}>
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


        <h3 className="text-[32px] font-light mt-2 mb-2 line-clamp-1 text-center">
          {item.title}
        </h3>

        <div className="flex items-center justify-center gap-1 text-[12px] text-gray-600 mb-3 ">
          <FaUser className="text-gray-600" />
          <span>{item.author.name}</span>

          <span className="mx-2">|</span>

          <FaCalendarAlt className="text-gray-600" />
          <span>{item.date}</span>
        </div>

        <p className="text-[13px] text-gray-700 font-serif text-center leading-[1.3] tracking-tight px-2">
          {item.shortdescription}
        </p>


      </div>
      <div className="flex items-center justify-between  pt-0.5 border-t border-[#2f2f2f] border-b ">

        <div className="flex items-center gap-3 text-[14px] text-[#2f2f2f]">
          <span className="font-normal font-serif">SHARE ON:</span>
          {/* <Link
            href={article.author.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >

          <FaTwitter className="cursor-pointer" />
          </Link> */}
          <Link
            title="facebook"
            href={item.author.facebook}
            target="_blank"
            aria-label="facebook"
            rel="noopener noreferrer"
            className="no-underline"
          >

            <FaFacebookF className="cursor-pointer" />
          </Link>
          <Link
            title="instagram"
            href={item.author.instagram}
            target="_blank"
            aria-label="instagram"
            rel="noopener noreferrer"
            className="no-underline"
          >

            <FaInstagram className="cursor-pointer" />
          </Link>
          <Link
            title="medium"
            href={item.author.medium}
            target="_blank"
            aria-label="medium"
            rel="noopener noreferrer"
            className="no-underline"
          >

            <FaMedium className="cursor-pointer" />
          </Link>
          <Link
            title="substack"
            href={item.author.substack}
            target="_blank"
            aria-label="substack"
            rel="noopener noreferrer"
            className="no-underline"
          >

            <SubstackIconBlack className="cursor-pointer" />
          </Link>
        </div>

        <Link
          href={`/${item.category}/${item.slug}`}
          title={`Read full article: ${item.title}`}
          aria-label={`Read full article: ${item.title}`}
          className="inline-block bg-[#333] text-white px-3 py-2 text-[14px]
             font-serif font-normal tracking-widest hover:bg-[#171616]
             cursor-pointer"
        >
          Continue
        </Link>

      </div>
      <div className="border  mt-0.5 mb-8"></div>
    </div>
  );
}
