import Image from "next/image";
import Link from "next/link";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

export default function RelatedNewsCard({ image, category, author, slug, title, date, comments }) {
  return (
    <div className="text-center">
      <div className="pt-4 pb-5 p-2">
        <div className="relative group mb-4 ">
          <Link href={`/${category}/${slug}`} className="text-decoration-none" title={title} aria-label={title}>
            <div className="relative w-full h-[250px] overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
          </Link>

          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2f2f2f] text-white text-sm tracking-wide px-3 py-1 shadow-md border border-gray-300">
            <span className="mx-1">♦</span>
            {category}
            <span className="mx-1">♦</span>
          </div>

        </div>
        <h3 className="text-[22px] md:text-[32px] font-light mt-2 mb-2 line-clamp-1 md:line-clamp-2 text-center leading-[1.1] tracking-tight">
          {title}
        </h3>
        <div className="flex items-center justify-center gap-1 text-[12px] text-gray-600 mb-3 ">
          <FaUser className="text-gray-600" />
          <span>{author}</span>
          <span className="mx-2">|</span>
          <FaCalendarAlt className="text-gray-600" />
          <span>{date}</span>
        </div>

      </div>
    </div>
  );
}
