import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMedium
} from "react-icons/fa";
import Image from "next/image";
import SubstackIcon from "./Substack";
import Link from "next/link";

export default function ProfileCard({ author }) {
  const socialIcons = [
    { icon: <FaFacebookF />, url: author.facebook },
    { icon: <FaInstagram />, url: author.instagram },
    { icon: <FaMedium />, url: author.medium },
    { icon: <SubstackIcon />, url: author.substack },
  ];

  return (
    <div className="w-full border-t-2 border-[#2f2f2f]">

      <div className="border-t border-[#2f2f2f] mt-0.5 my-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 bg-[#f3f3f3]">

        {/* Image */}
        <div className="w-full h-64 md:h-72 relative">
          <Image
            src={author.image}
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center text-center p-6 md:p-8">
          <span className="text-2xl md:text-[32px] text-[#2f2f2f] font-normal mb-2 md:mb-3">
            {author.name}
          </span>

          <p className="text-[#2f2f2f] font-serif leading-[1.3] tracking-tight max-w-xl mx-auto text-[11px] md:text-[13px]">
            {author.bio}
          </p>

          {/* Close Icon */}
          <div className="text-[25px] mt-2 text-[#2f2f2f] cursor-pointer">
            ×
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-3 space-x-3 md:space-x-4">
            {socialIcons.map((item, i) => {
              if (!item.url) return null; // Skip if link is empty

              return (
                <Link
                  key={i}
                  href={item.url}
                  target="_blank"
                  aria-label="social-links"
                  rel="noopener noreferrer"
                  className="w-6 h-6 md:w-7 md:h-7 bg-[#c1c0b4] rotate-45 flex items-center justify-center"
                >
                  <div className="-rotate-45 text-white text-[12px] md:text-base">
                    {item.icon}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="border-b border-[#2f2f2f] mt-4"></div>
      <div className="border-b-2 border-[#2f2f2f] mt-0.5"></div>
    </div>
  );
}
