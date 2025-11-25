import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    category: "DESIGN",
    score: "6.83",
    title: "Mauris ultrices dui sed accumsan",
    text: `Donec ac dapibus elit. Proin facilisis nulla in est mattis, ut dapibus justo euismod. 
    Proin sollicitudin a mi vel fermentum. Phasellus aliquam sollicitudin libero nec tincidunt. 
    Sed posuere nisl sit amet.faucibus, vitae pharetra ante iaculis.`,
  },
  {
    id: 2,
    category: "PEOPLE",
    score: "7.21",
    title: "Nulla nec libero sed leo facilisis",
    text: `Fusce molestie nulla velit, fringilla tristique ipsum tincidunt vel. Suspendisse tincidunt 
    arcu arcu, quis viverra tortor bibendum ut. Fusce non nulla consectetur, tempor mauris. 
    Maecenas et arcu laoreet.`,
  },
  {
    id: 3,
    category: "FASHION",
    score: "9.05",
    title: "Vestibulum varius urna molestie",
    text: `Nam ut mattis est, a lacinia ligula. Praesent condimentum dapibus ultricies commodo. 
    Suspendisse potenti. Nulla tempor nulla quis justo ornare commodo. Duis urna sapien, 
    semper in placerat vitae, tempor ut orci. Vestibulum.`,
  },
];

export default function LatestReviews() {
  return (
    <section className="w-full bg-white pt-20 pb-24">
      {/* Heading */}
      <h1 className="text-center text-5xl md:text-6xl font-light tracking-wide text-gray-800">
        LATEST REVIEWS
      </h1>

      {/* TOP BORDER LINE */}
      <div className="mt-6 w-[92%] mx-auto border-t-4 border-gray-900 opacity-80"></div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-20 px-6 lg:px-16">

        {reviews.map((item) => (
          <div key={item.id} className="text-center relative">

            {/* Category Label */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white shadow-md border border-gray-300 px-8 py-2 text-sm font-serif tracking-wide">
              ♦ {item.category} ♦
            </div>

            {/* Score */}
            <div className="text-[80px] md:text-[95px] font-light text-[#BFBEB2] mt-6">
              {item.score}
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight mt-2">
              {item.title}
            </h2>

            {/* Text */}
            <p className="text-gray-700 mt-6 px-4 leading-relaxed text-lg font-serif">
              {item.text}
            </p>

            {/* Bottom Border */}
            <div className="mt-10 border-t-2 border-gray-900 w-[90%] mx-auto"></div>

            {/* Read More */}
            <button className="mt-5 text-lg font-semibold text-gray-900 font-serif tracking-wide hover:opacity-70 transition">
              Read More →
            </button>

            {/* Bottom Border */}
            <div className="mt-4 border-t-[3px] border-gray-900 w-[90%] mx-auto"></div>
          </div>
        ))}

      </div>

      {/* ARROWS */}
      <div className="flex justify-center gap-8 mt-12">
        <button className="w-12 h-12 bg-black text-white flex justify-center items-center text-xl border border-gray-500 hover:bg-gray-800 transition">
          <FaAngleLeft />
        </button>
        <button className="w-12 h-12 bg-black text-white flex justify-center items-center text-xl border border-gray-500 hover:bg-gray-800 transition">
          <FaAngleRight />
        </button>
      </div>
    </section>
  );
}
