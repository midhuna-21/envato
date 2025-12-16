import Image from "next/image";
import Link from "next/link";

export default function AuthorsSection() {
  const authors = [
    { name: "Claire Addison", img: "/images/claire-addison.webp" },
    { name: "Marcus Bennett", img: "/images/marcus-bennett.webp" },
    { name: "Jenna Whitmore", img: "/images/jenna-whitmore.webp" },
    { name: "Sophie Langford", img: "/images/sophie-langford.webp" },
    { name: "Travis Monroe", img: "/images/travis-monroe.webp" },
    { name: "Evan Carlisle", img: "/images/evan-carlisle.webp" },
  ];

  return (
    <div className="py-6" style={{ backgroundImage: "url('/images/widget.webp')" }}>
      <div className="flex items-center  justify-center gap-2 mb-2" >
        <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />
        <span className="text-center text-[32px]  font-light">
          Our Authors
        </span>
        <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-0.5 px-4 max-w-4xl mx-auto">
        {authors.map((author, i) => (
          <Link key={i} href="/our-team" title="contact">
            <div className="relative w-full h-32 cursor-pointer hover:opacity-90 transition">
              <Image
                src={author.img}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <div className="relative w-6 h-6 flex items-center justify-center rotate-45">
          <div className="absolute inset-0 border-2 border-[#2f2f2f]" />
          <div className="absolute inset-1 border border-[#d9d9d9]" />
          <div className="absolute inset-[3px] bg-[#2f2f2f]" />
          <span className="absolute text-white text-lg -rotate-45 select-none">
            ‹
          </span>
        </div>
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
