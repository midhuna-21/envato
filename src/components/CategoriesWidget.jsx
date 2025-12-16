import Link from "next/link";

export default function CategoriesWidget() {
  const categories = [
    { name: "World", slug: "world" },
    { name: "Business", slug: "business" },
    { name: "Politics", slug: "politics" },
    { name: "U.S", slug: "us" },
    { name: "Finance", slug: "finance" },
    { name: "Sports", slug: "sports" },
    { name: "Entertainment", slug: "entertainment" },
  ];

  return (
    <div
      className="w-full p-3"
      style={{ backgroundImage: "url('/images/widget.webp')" }}
    >
      <div className="flex items-center justify-center gap-3 mb-5 mt-2">
        <div className="w-2 h-2 rotate-45 bg-[#2f2f2f]" />
        <span className="text-center text-[28px] font-light tracking-wide">
          Categories
        </span>
        <div className="w-2 h-2 rotate-45 bg-[#2f2f2f]" />
      </div>
      <div className="space-y-2">
        {categories.map((cat, i) => (
          <Link key={i} href={`/${cat.slug}`} title={cat.title} aria-label={cat.title}>
            <div className="flex w-full border border-[#d1d1d1] hover:bg-gray-100 transition">
              <div className="bg-[#2f2f2f] text-white px-2 py-1 text-lg font-bold m-0.5">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c1c0b4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 6l6 6-6 6" />
                </svg>
              </div>
              <div className="flex-1 flex px-4 py-2 font-serif text-[14px]">
                {cat.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
