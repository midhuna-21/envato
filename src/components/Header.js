// components/EnvatoHeader.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-[#262626] border-b border-black px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/envato-logo.webp" 
            alt="Envato Market"
            width={130}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Right: Buy Now Button */}
        <a
          href="#"
          className="bg-[#7CB342] text-white px-5 py-2 rounded-md font-medium 
                     hover:bg-[#6aa539] transition-all"
        >
          Buy now
        </a>

      </div>
    </header>
  );
}
