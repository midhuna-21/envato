import React from "react";

const BlogCard = ({ image, category, title, date, comments, description }) => {
  return (
    <div className="w-full bg-white pb-12">
      {/* IMAGE */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[320px] object-cover"
        />
      </div>

      {/* CATEGORY LABEL */}
      <div className="flex justify-center -mt-6">
        <span className="bg-black text-white px-6 py-2 text-sm tracking-widest font-semibold flex items-center gap-2">
          ◆ {category} ◆
        </span>
      </div>

      {/* TITLE */}
      <h2 className="text-4xl text-center mt-6 mb-3 font-medium">
        {title}
      </h2>

      {/* DATE + COMMENTS */}
      <div className="flex items-center justify-center gap-4 text-gray-600 mb-6 text-sm">
        <span className="font-semibold">{date}</span>
        <span className="flex items-center gap-1">
          ● {comments} Comments
        </span>
      </div>

      {/* DESCRIPTION */}
      <p className="text-center text-gray-700 leading-relaxed px-6 mb-10">
        {description}
      </p>

      {/* READ MORE SECTION */}
      <div className="w-full px-10">
        <div className="border-t-[3px] border-gray-900 mb-1"></div>

        <div className="relative flex items-center justify-center">
          <div className="w-full border-t border-gray-400"></div>
          <span className="absolute bg-white px-4 text-gray-800 font-medium text-lg">
            Read More →
          </span>
        </div>
      </div>
    </div>
  );
};

export default function BlogGrid({data}) {

  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl px-4">

        <BlogCard
          image={data[0].image}
          category={data[0].category}
          title={data[0].title}
          date={data[0].date}
          comments="2"
          description={data[0].shortdescription}
        />

        <BlogCard
          image={data[1].image}
          category={data[1].category}
          title={data[1].title}
          date={data[1].date}
          comments="5"
          description={data[1].shortdescription}
        />

        <BlogCard
          image={data[2].image}
          category={data[2].category}
          title={data[2].title}
          date={data[2].title}
          comments="4"
          description={data[2].shortdescription}
        />

        <BlogCard
          image={data[3].image}
          category={data[3].category}
          title={data[3].title}
          date={data[3].date}
          comments="7"
          description={data[3].shortdescription}
        />

      </div>
    </div>
  );
}
