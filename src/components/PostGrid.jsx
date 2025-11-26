import Image from "next/image";
import { FaComment } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Suspendisse sit amet gravida",
    category: "DESIGN",
    date: "October 14 2014",
    comments: 2,
    img: "/images/image01.jpg", 
  },
  {
    id: 2,
    title: "Praesent ut dui sit amet scelerisque",
    category: "ART",
    date: "October 21 2014",
    comments: 5,
    img: "/images/image02.jpg",
  },
  {
    id: 3,
    title: "Vivamus tincidunt ac dui et dictum",
    category: "GRAPHICS",
    date: "October 25 2014",
    comments: 1,
    img: "/images/image03.jpg",
  },
  {
    id: 4,
    title: "Aenean dapibus egestas vulputate",
    category: "CINEMA",
    date: "October 29 2014",
    comments: 9,
    img: "/images/image04.jpg",
  },
];

export default function PostGrid({data}) {

  return (
    <section className="w-full px-4 md:px-10 py-10 bg-[#f5f5f5] border-t">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {data.map((item) => (
          <div key={item.slug} className="text-center">
            {/* IMAGE + CATEGORY TAG */}
            <div className="relative group">
              <div className="overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Category Label */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black text-white text-sm tracking-wide px-6 py-2 shadow-md border border-gray-300">
                <span className="mx-1">♦</span>
                {item.category}
                <span className="mx-1">♦</span>
              </div>
            </div>

            {/* TITLE */}
            <h2 className="mt-10 text-3xl font-light text-gray-900 leading-tight">
              {item.title}
            </h2>

            {/* META INFO */}
            <div className="mt-4 text-gray-700 font-serif text-sm flex justify-center items-center gap-3">
              <span>{item.date}</span>
              <span className="w-1 h-1 bg-black rounded-full"></span>
              <div className="flex items-center gap-1">
                <FaComment className="text-xs" />
                {/* {item.comments}  */}
                Comments
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
