export default function AuthorsSection() {
  const authors = [
    "/author1.jpg",
    "/author2.jpg",
    "/author3.jpg",
    "/author4.jpg",
    "/author5.jpg",
    "/author6.jpg",
  ];

  return (
    <div className="w-full bg-[#f3f3f3] py-10 border-t border-b border-gray-400">
      {/* TITLE */}
      <h2 className="text-center text-4xl font-light mb-8">
        <span className="px-4">
          ◆ Our Authors ◆
        </span>
      </h2>

      {/* GRID IMAGES */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 px-4 max-w-4xl mx-auto">
        {authors.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Author"
            className="w-full h-40 object-cover"
          />
        ))}
      </div>

      {/* NAV ICONS */}
      <div className="flex justify-center mt-6 gap-3">
        <button className="w-10 h-10 flex items-center justify-center border border-gray-700">
          <span className="text-xl">◄</span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-gray-700">
          <span className="text-xl">►</span>
        </button>
      </div>
    </div>
  );
}
