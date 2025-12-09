import {
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaRss,
  FaInstagram,
} from "react-icons/fa";

export default function AuthorCard({ image, name, description }) {
  const socialIcons = [FaTwitter, FaFacebookF, FaSkype, FaRss, FaInstagram];

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">

      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 h-56 object-cover rounded-lg"
      />

      {/* CONTENT */}
      <div className="md:w-1/2 px-4 flex flex-col items-center md:items-start text-center md:text-left">
        <h3 className="text-2xl font-semibold text-[#2f2f2f]">{name}</h3>

        <p className="text-[#2f2f2f] text-[11px] md:text-[13px] leading-[1.4] tracking-tight font-serif mt-2">
          {description}
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 mt-4">
          {socialIcons.map((Icon, i) => (
            <div
              key={i}
              className="w-5 h-5 md:w-7 md:h-7 bg-[#c1c0b4] rotate-45 flex items-center justify-center"
            >
              <div className="-rotate-45 text-white text-[11px] md:text-base">
                <Icon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
