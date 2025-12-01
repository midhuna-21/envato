import React from "react";

const BlogCard = ({ image, category, title, date, comments, description }) => {
  return (
    <div className="w-full">
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
      <h2 className="text-[32px] text-center mt-6 font-medium px-4 line-clamp-1">
        {title}
      </h2> 
      <div className="flex items-center justify-center gap-4 text-[#3f3f3f]  mb-3 text-sm">
        <span className="font-semibold">{date}</span>
      </div>
      <p className="text-center text-[#3f3f3f] leading-relaxed text-[13px] px-6 mb-5 font-serif line-clamp-3">
        {description}
      </p>

    {/* Read More Section */}
<div className="w-full flex flex-col items-center">
  <div className="w-full">
    <div className="border-t-2 border-[#2f2f2f]" />
    <div className="border-t border-[#2f2f2f] mt-0.5" />
  </div>

  <div className="my-2 flex justify-center">
    <span className="text-[#2f2f2f] font-semibold font-serif text-[14px] tracking-wide">
      Read More →
    </span>
  </div>

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
            comments={item.comments || "0"}
            description={item.shortdescription}
          />
        ))}

      </div>
    </div>
  );
}

