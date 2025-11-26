export default function CategoriesWidget() {
  const categories = [
    { name: "Design", count: 10 },
    { name: "Fashion", count: 12 },
    { name: "Photo", count: 19 },
    { name: "People", count: 15 },
    { name: "Music", count: 32 },
    { name: "Style", count: 21 },
    { name: "Travel", count: 15 },
  ];

  return (
    <div className="w-full mt-10">
      {/* Top Border */}
      <div className="border-t-4 border-gray-700 mb-4"></div>

      {/* Title */}
      <h2 className="text-center text-xl font-semibold mb-4">
        ✦ Categories ✦
      </h2>

      {/* Category List */}
      <div className="space-y-2">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex items-center bg-[#f3f3f3] border border-gray-300"
          >
            {/* Left Arrow Box */}
            {/* <div className="w-10 bg-gray-800 text-white flex items-center justify-center text-lg">
              <span>&gt;</span>
            </div> */}

            {/* Category Name */}
            <div className="flex-1 px-3 py-2 text-gray-800 font-medium">
              {cat.name}
            </div>

            {/* Count */}
            <div className="w-12 text-center bg-gray-200 text-gray-700 font-semibold">
              {cat.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
