import Link from "next/link";
import React from "react";

const BlogCard = ({ image, category, title, date, slug, description }) => {
  return (
    <div className="w-full">
      <Link href={`/${category}/${slug}`} className="text-decoration-none" title={slug}>
        <div className="relative w-full">
          <img
            src={image}
            alt={title}
            className="w-full h-[280px] object-cover"
          />
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 
                        bg-[#2f2f2f] text-white text-sm tracking-wide 
                        px-4 py-2 shadow-md border border-gray-300">
            <span className="mx-1">♦</span>
            {category}
            <span className="mx-1">♦</span>
          </div>
        </div>
      </Link>
      <h2 className="text-[22px] md:text-[32px] leading-[1.1] tracking-tight text-center mt-6 mb-3 font-medium px-4 line-clamp-1">
        {title}
      </h2>
      <div className="flex items-center justify-center gap-4 text-[#3f3f3f]  mb-3 text-[12px]">
        <span className="font-semibold">{date}</span>
      </div>
      <p className="text-center text-[#3f3f3f] text-[13px] leading-[1.3] tracking-tight px-6 mb-5 font-serif line-clamp-3">
        {description}
      </p>

      <div className="w-full flex flex-col items-center">
        <div className="w-full">
          <div className="border-t-2 border-[#2f2f2f]" />
          <div className="border-t border-[#2f2f2f] mt-0.5" />
        </div>
        <Link href={`/${category}/${slug}`} className="text-decoration-none" title={slug}>
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
          />
        ))}

      </div>
    </div>
  );
}

