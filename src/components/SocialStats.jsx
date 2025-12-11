import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function SocialStats() {
  const stats = [
    { icon: <FaTwitter className="text-[22px]" /> },
    { icon: <FaFacebookF className="text-[22px]" /> },
    { icon: <FaInstagram className="text-[22px]" /> },
  ];

  return (
    <div
      className="w-full border border-gray-300 p-2"
      style={{ backgroundImage: "url('/images/widget.webp')" }}
    >
      <div className="grid grid-cols-3 bg-[#2c2c2c] text-[#e5e5e5]">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`flex items-center justify-center py-4 
              ${i !== stats.length - 1 ? "md:border-r border-[#555]" : ""}`}
          >
            <div className="text-[#d3d2cc]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
