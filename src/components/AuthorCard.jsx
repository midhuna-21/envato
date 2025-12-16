import { FaFacebookF, FaInstagram, FaMedium } from "react-icons/fa";
import Image from "next/image";
import SubstackIcon from "./Substack";
import Link from "next/link";

export default function AuthorCard({ image, name, role, description, facebook, instagram, medium, substack }) {
  const socialLinks = [
    { icon: FaFacebookF, link: facebook },
    { icon: FaInstagram, link: instagram },
    { icon: FaMedium, link: medium },
    { icon: SubstackIcon, link: substack },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
      <div className="relative w-full md:w-1/2 md:h-56 h-66">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="md:w-1/2 px-4 flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl font-semibold text-[#2f2f2f]">{name}</h3>
        <p className="text-[#2f2f2f] text-[12px]">{role}</p>
        <p className="text-[#2f2f2f] text-[11px] md:text-[13px] leading-[1.3] tracking-tight font-serif mt-2">
          {description}
        </p>
        <div className="flex gap-3 mt-4">
          {socialLinks.map(({ icon: Icon, link }, i) =>
            link ? (
              <Link
                key={i}
                href={link}
                title="social-links"
                aria-label="social-links"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 md:w-7 md:h-7 bg-[#c1c0b4] rotate-45 flex items-center justify-center"
              >
                <div className="-rotate-45 text-white text-[12px] md:text-base">
                  <Icon />
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
