import {
  FaTwitter,
  FaFacebookF,
  FaSkype,
  FaRss,
  FaInstagram,
} from "react-icons/fa";

export default function ProfileCard({author}) {
  console.log(author,'author')
  const socialIcons = [
    <FaTwitter />,
    <FaFacebookF />,
    <FaSkype />,
    <FaRss />,
    <FaInstagram />,
  ];

  return (
    <div className="w-full border-t-2 border-[#2f2f2f]">

      {/* Top Inner Border */}
      <div className="border-t border-[#2f2f2f] mt-0.5 my-4"></div>

      {/* Main Grid — mobile: column, desktop: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-0 bg-[#f3f3f3]">

        {/* Image */}
        <div className="w-full h-64 md:h-72">
          <img
            src="/images/marcus-bennett.webp"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center text-center p-6 md:p-8">

          {/* Name */}
          <h2 className="text-2xl md:text-[32px] text-[#2f2f2f] font-normal mb-2 md:mb-3">
       {author.name}
          </h2>

          {/* Description */}
          <p className="text-[#2f2f2f] font-serif leading-relaxed max-w-xl mx-auto text-[12px]">
    {author.bio}   </p>

          {/* Close Icon */}
          <div className="text-[25px] mt-2 text-[#2f2f2f] cursor-pointer">
            ×
          </div>

          {/* Social Icons */}
          <div className="flex justify-center mt-3 space-x-3 md:space-x-4">
            {socialIcons.map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 bg-[#c1c0b4] rotate-45 flex items-center justify-center"
              >
                <div className="-rotate-45 text-white text-base">{Icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Borders */}
      <div className="border-b border-[#2f2f2f] mt-4"></div>
      <div className="border-b-2 border-[#2f2f2f] mt-0.5"></div>
    </div>
  );
}
