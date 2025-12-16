import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaCalendarAlt, FaUser } from "react-icons/fa";

const BlogCard = ({ image, category, title, date, slug, description, name }) => {
  return (
    <div className="w-full">
      <Link href={`/${category}/${slug}`} className="text-decoration-none" title={title} aria-label={title}>
        <div className="relative w-full">
          <div className="relative w-full h-[280px]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 
                        bg-[#2f2f2f] text-white text-sm tracking-wide 
                        px-4 py-2 shadow-md border border-gray-300">
            <span className="mx-1">♦</span>
            {category}
            <span className="mx-1">♦</span>
          </div>
        </div>
      </Link>
      <h3 className="text-[22px] md:text-[32px] leading-[1.1] tracking-tight text-center mt-6 mb-3 font-medium px-4 line-clamp-1">
        {title}
      </h3>
      <div className="flex items-center justify-center gap-1 text-[8px] text-gray-600 mb-3 ">
        <FaUser className="text-gray-600" />
        <span>{name}</span>
        <span className="mx-2">|</span>
        <FaCalendarAlt className="text-gray-600" />
        <span>{date}</span>
      </div>
      <p className="text-center text-[#3f3f3f] text-[13px] leading-[1.3] tracking-tight px-6 mb-5 font-serif line-clamp-3">
        {description}
      </p>
      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <div className="border-t-2 border-[#2f2f2f]" />
          <div className="border-t border-[#2f2f2f] mt-0.5" />
        </div>
        <Link href={`/${category}/${slug}`} className="text-decoration-none" title={slug} aria-label={`Read full article: ${title}`}>
          <div className="my-2 flex justify-center">
            <span className="text-[#2f2f2f] font-semibold font-serif text-[14px] tracking-wide">
              Read More →
            </span>
          </div>
        </Link>
        <div className="w-full">
          <div className="border-t-2 border-[#2f2f2f]" />
          <div className="border-t border-[#2f2f2f] mt-0.5" />
        </div>
      </div>
    </div>
  );
};

export default function BlogGrid({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-7xl w-full">
        {data.slice(0, 4).map((item, index) => (
          <BlogCard
            key={index}
            image={item.image}
            category={item.category}
            title={item.title}
            date={item.date}
            slug={item.slug}
            description={item.shortdescription}
            name={item.author.name}
          />
        ))}

      </div>
    </div>
  );
}

