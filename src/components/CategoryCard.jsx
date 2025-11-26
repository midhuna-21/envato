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
    <div className="max-w-xl mx-auto bg-white text-[#333] border-t border-black pt-4 pb-10">
      <Link
        href={`/${item.category}/${item.slug}`}
        title={item.title}
      >
        <div className="w-full border border-[#d7d7d7]">
          <Image
            src={item.image}
            alt={item.title || "Category Image"}
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </Link>

      <h2 className="text-3xl font-light mt-6 mb-4">
        {item.title}
      </h2>

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

      <p className="text-[15px] text-gray-700 leading-relaxed text-center px-2">
        {item.shortdescription}
      </p>

      <div className="flex items-center justify-between mt-8 pt-4 border-t border-gray-300 px-2">

        <div className="flex items-center gap-3 text-sm">
          <span className="font-semibold">SHARE ON:</span>
          <FaTwitter className="text-gray-600 hover:text-black cursor-pointer" />
          <FaFacebookF className="text-gray-600 hover:text-black cursor-pointer" />
          <FaSkype className="text-gray-600 hover:text-black cursor-pointer" />
          <FaRss className="text-gray-600 hover:text-black cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-black cursor-pointer" />
        </div>

        <button className="bg-[#333] text-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-black">
          read more
        </button>
      </div>
    </div>
  );
}
