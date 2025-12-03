import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#262626] border-b border-black px-2 py-4 z-[9999]">
      <div className="max-w-8xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href='/'>
        <div className="flex items-center gap-2 px-1">
          <Image
            src="/images/envato-logo.webp"
            alt="Envato Market"
            width={100}
            height={30}
            className="object-contain 
                       w-[85px] h-auto     
                       sm:w-[95px]    
                       md:w-[130px]"
          />
        </div>
        </Link>

        {/* <a
          href="#"
          className="bg-[#82B440] text-white 
                     px-3 py-1           
                     sm:px-4 sm:py-1.5      
                     md:px-5 md:py-2      
                     rounded-md 
                     text-[11px] sm:text-[12px] md:text-[14px]
                     transition-all"
        >
          Buy now
        </a> */}

      </div>
    </header>
  );
}
