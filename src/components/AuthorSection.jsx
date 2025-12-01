export default function AuthorsSection() {
  const authors = [
    "/images/author-01.jpg",
    "/images/author-02.jpg",
    "/images/author-03.jpg",
    "/images/author-04.jpg",
    "/images/author-05.jpg",
    "/images/author-06.jpg",
  ];

  return (
   <div>
      {/* TITLE WITH SMALL DIAMONDS */}
      <div className="flex items-center justify-center gap-2 mb-5 mt-3">
        
        {/* LEFT SMALL DIAMOND */}
        <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />

        <h2 className="text-center text-[28px] font-light">
          Our Authors
        </h2>

        {/* RIGHT SMALL DIAMOND */}
        <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />
      </div>

      {/* GRID IMAGES */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 px-4 max-w-4xl mx-auto">
        {authors.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Author"
            className="w-full h-30 object-cover"
          />
        ))}
      </div>

      {/* BOTTOM DIAMONDS CENTERED */}
      <div className="flex justify-center gap-4 mt-5">

        {/* LEFT DIAMOND */}
        <div className="relative w-6 h-6 flex items-center justify-center rotate-45">
          <div className="absolute inset-0 border-2 border-[#2f2f2f]" />
          <div className="absolute inset-1 border border-[#d9d9d9]" />
          <div className="absolute inset-[3px] bg-[#2f2f2f]" />
          <span className="absolute text-white text-lg -rotate-45 select-none">
            ‹
          </span>
        </div>

        {/* RIGHT DIAMOND */}
        <div className="relative w-6 h-6 flex items-center justify-center rotate-45">
          <div className="absolute inset-0 border-2 border-[#2f2f2f]" />
          <div className="absolute inset-1 border border-[#d9d9d9]" />
          <div className="absolute inset-[3px] bg-[#2f2f2f]" />
          <span className="absolute text-white text-lg -rotate-45 select-none">
            ›
          </span>
        </div>

      </div>

    </div>
  );
}
