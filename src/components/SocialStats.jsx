import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

export default function SocialStats() {
  const stats = [
    { icon: <FaTwitter className="text-[22px]" />, value: "15500", label: "followers" },
    { icon: <FaFacebookF className="text-[22px]" />, value: "23081", label: "funs" },
    { icon: <FaGooglePlusG className="text-[22px]" />, value: "15323", label: "people" },
  ];

  return (
    <div className="w-full border border-gray-300 p-2" style={{
          backgroundImage: "url('/images/widget.webp')",
        }}>
      <div className="grid grid-cols-1 md:grid-cols-3 bg-[#2c2c2c] text-[#e5e5e5]">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 py-3 px-3 
            ${i !== 2 ? "md:border-r border-[#555]" : ""}`}
          >
            {/* LEFT ICON — fixed width for perfect alignment */}
            <div className="w-6 flex justify-center text-[#d3d2cc]">
              {item.icon}
            </div>

            {/* RIGHT TEXT */}
            <div className="flex flex-col leading-tight">
              <span className="text-[17px] text-[#d3d2cc] font-semibold">
                {item.value}
              </span>
              <span className="text-[10px] text-[#d3d2cc] opacity-80">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
