import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaPencilAlt, FaUser } from "react-icons/fa";

export default function PostGrid({ data }) {
  return (
    <section className="bg-[#f0f0f0] py-2">
      <div
        className="w-full px-4 md:px-10 py-8"
        style={{
          backgroundImage: "url('/images/widget.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundColor: "#e9e9e7",
        }}
      >
        <div className="w-full flex items-center justify-center mb-6">

          <div className="flex-1 flex flex-col">
            <div className="border-t-2 border-[#2f2f2f]" />
            <div className="border-t border-[#2f2f2f] mt-1" />
          </div>

          <div className="mx-4">
            <FaPencilAlt />
          </div>

          <div className="flex-1 flex flex-col">
            <div className="border-t-2 border-[#2f2f2f]" />
            <div className="border-t border-[#2f2f2f] mt-1" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item) => (
            <div key={item.slug} className="text-center">
              <Link href={`/${item.category}/${item.slug}`} className="text-decoration-none" title={item.title} aria-label={item.title}>
                <div className="relative group cursor-pointer">
                  <div className="relative w-full h-[250px] overflow-hidden border border-gray-200 shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#2f2f2f] text-white text-sm tracking-wide px-3 py-1 shadow-md border border-gray-300">
                    <span className="mx-1">♦</span>
                    {item.category}
                    <span className="mx-1">♦</span>
                  </div>
                </div>
              </Link>
              <h3
                className="mt-5 text-[22px] line-clamp-1 md:line-clamp-2 md:text-[26px] font-light text-[#2f2f2f] leading-tight"
              >
                {item.title}
              </h3>
              <div className="flex items-center justify-center gap-1 text-[8px] text-gray-600 mb-3 ">
                <FaUser className="text-gray-600" />
                <span>{item.author.name}</span>

                <span className="mx-2">|</span>

                <FaCalendarAlt className="text-gray-600" />
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
