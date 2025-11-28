import Image from "next/image";

export default function Header() {
  return (
   <header className="fixed top-0 left-0 w-full bg-[#262626] border-b border-black px-4 py-2 z-[9999]">
      <div className="max-w-8xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-2 px-3">
          <Image
            src="/images/envato-logo.webp" 
            alt="Envato Market"
            width={130}
            height={40}
            className="object-contain"
          />
        </div>

        <a
          href="#"
          className="bg-[#82B440] text-white px-5 py-2 rounded-md text-[14px]
                      transition-all"
        >
          Buy now
        </a>

      </div>
    </header>
  );
}
