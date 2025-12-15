import Image from "next/image";

export default function AuthorsWidget() {
  const authors = [
    "/demo/a1.jpg",
    "/demo/a2.jpg",
    "/demo/a3.jpg",
    "/demo/a4.jpg",
    "/demo/a5.jpg",
    "/demo/a6.jpg",
  ];

  return (
    <div className="w-full mt-10">
      {/* Top Border */}
      <div className="border-t-4 border-gray-700 mb-4"></div>

      {/* Title */}
      <h2 className="text-center text-xl font-semibold mb-4">
        ✦ Our Authors ✦
      </h2>

      {/* Author Grid */}
      <div className="grid grid-cols-3 gap-2 bg-[#f3f3f3] p-3 border border-gray-300 shadow-sm">
        {authors.map((src, i) => (
       <div key={i} className="relative w-full h-24">
            <Image
              src={src}
              alt="Author"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Carousel Buttons */}
      <div className="flex justify-center space-x-3 mt-3">
        <button className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center">
          &lt;
        </button>
        <button className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center">
          &gt;
        </button>
      </div>

      {/* Social Stats */}
      <div className="mt-6 grid grid-cols-3 gap-2">
        {/* Twitter */}
        <div className="bg-gray-800 text-white text-center py-3 text-sm">
          <div className="text-lg font-bold">15500</div>
          <div className="text-xs">followers</div>
        </div>

        {/* Facebook */}
        <div className="bg-gray-800 text-white text-center py-3 text-sm">
          <div className="text-lg font-bold">23081</div>
          <div className="text-xs">funs</div>
        </div>

        {/* Google+ */}
        <div className="bg-gray-800 text-white text-center py-3 text-sm">
          <div className="text-lg font-bold">15323</div>
          <div className="text-xs">people</div>
        </div>
      </div>
    </div>
  );
}
