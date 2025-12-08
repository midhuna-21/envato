export default function AuthorsSection() {
  const authors = [
    "/images/claire-addison.webp",
    "/images/marcus-bennett.webp",
    "/images/jenna-whitmore.webp",
    "/images/sophie-langford.webp",
    "/images/travis-monroe.webp",
    "/images/evan-carlisle.webp",
  ];

  return (
    <div className="py-6" style={{ backgroundImage: "url('/images/widget.webp')" }}>
      {/* TITLE WITH SMALL DIAMONDS */}
      <div className="flex items-center justify-center gap-2 mb-2" >

        {/* LEFT SMALL DIAMOND */}
        <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />

        <h2 className="text-center text-[32px]  font-light ">
          Our Authors
        </h2>

        {/* RIGHT SMALL DIAMOND */}
        <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />
      </div>

      {/* GRID IMAGES */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-0.5 px-4 max-w-4xl mx-auto">
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
