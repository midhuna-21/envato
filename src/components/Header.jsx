import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#262626] border-b border-black  md:px-10 py-4 z-[9999]">
      <div className=" mx-auto flex items-start">

        {/* Logo */}
        <Link href='/'>
        <div className="flex items-center gap-2 px-1">
          <Image
            src="/images/fiscalfusion-logo.webp"
            alt="Fiscal Fusion"
            width={100}
            height={30}
            className="object-contain 
                       w-[85px] h-auto     
                       sm:w-[95px]    
                       md:w-[100px]"
          />
        </div>
        </Link>

       

      </div>
    </header>
  );
}
