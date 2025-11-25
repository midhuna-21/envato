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

export default function BlogGrid() {
  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl px-4">

        <BlogCard
          image="/images/image01.jpg"
          category="DESIGN"
          title="Aliquam fringilla metus."
          date="October 05 2014"
          comments="2"
          description="Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan, a sollicitudin risus vestibulum."
        />

        <BlogCard
          image="/images/image02.jpg"
          category="PEOPLE"
          title="Cras viverra egestas."
          date="September 12 2014"
          comments="5"
          description="Fusce molestie nulla velit, fringilla tristique ipsum tincidunt vel. Suspendisse tincidunt arcu quis viverra tortor bibendum ut. Nulla consectetur, tempor mauris nec vehicula."
        />

        <BlogCard
          image="/images/image03.jpg"
          category="TRAVEL"
          title="Lorem ipsum dolor."
          date="July 18 2014"
          comments="4"
          description="Nam ut mattis est, a lacinia ligula. Praesent condimentum dapibus nunc. Suspendisse potenti. Nullam commodo massa et sem laoreet, vitae laoreet ligula dictum."
        />

        <BlogCard
          image="/images/image04.jpg"
          category="FASHION"
          title="Vestibulum varius urna."
          date="June 01 2014"
          comments="7"
          description="Maecenas vel turpis a nisi cursus posuere. Curabitur ultricies metus sed orci interdum aliquam. Duis non sapien eget magna lacinia viverra."
        />

      </div>
    </div>
  );
}
