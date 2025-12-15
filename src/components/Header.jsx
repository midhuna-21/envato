import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#262626] flex items-center md:h-13 h-10 px-4 z-[9999]">
      <Link href='/' title="home" className="flex items-center gap-1">
        <span className="text-white font-semibold text-[15px] md:text-[20px]">Fiscal</span>
        <span className="text-white font-light text-[15px] md:text-[20px]">Fusion</span>
      </Link>
    </header>
  );
}
