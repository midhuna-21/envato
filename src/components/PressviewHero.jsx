import { FaUser, FaCoffee, FaFlask, FaBullhorn, FaEye } from "react-icons/fa";

export default function PressviewHero() {
  return (
    <section className="w-full bg-white text-center px-4 py-16 md:py-7 mb-5">
      
      <h1 className="text-3xl md:text-[45px] font-normal tracking-wide text-[#2f2f2f]">
        WELCOME TO PRESSVIEW
      </h1>

      <h2 className="mt-2 text-xl md:text-[35px] font-light text-[#c1c0b4]">
        A clean and powerful multipurpose magazine template.
      </h2>

      <p className="max-w-3xl mx-auto mt-1 text-[#3f3f3f] leading-relaxed text-base font-serif md:text-[15px]">
        Curabitur quis tellus in eros rutrum dapibus. Curabitur non eros congue arcu
        consectetur semper id et urna. Integer scelerisque, felis nec tincidunt 
        eleifend, neque ipsum consectetur arcu, accumsan fringilla libero leo venenatis 
        tellus. In hac habitasse platea dictumst.
      </p>

      {/* Icons With X Separators */}
      <div className="flex flex-wrap justify-center items-center gap-3 mt-8">

        {/* 1 */}
        <div className="flex flex-col items-center">
          <FaUser className="text-3xl text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-sm md:text-[12px] font-serif font-semibold">
            User Centred
          </p>
        </div>

        {/* X */}
        <span className="text-2xl font-light text-[#3f3f3f]">×</span>

        {/* 2 */}
        <div className="flex flex-col items-center">
          <FaCoffee className="text-[34px] text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-sm md:text-[12px] font-serif font-semibold">
            Who We Are
          </p>
        </div>

        {/* X */}
        <span className="text-2xl font-light text-[#3f3f3f]">×</span>

        {/* 3 */}
        <div className="flex flex-col items-center">
          <FaFlask className="text-[34px] text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-sm md:text-[12px] font-serif font-semibold">
            What We Do
          </p>
        </div>

        {/* X */}
        <span className="text-2xl font-light text-[#3f3f3f]">×</span>

        {/* 4 */}
        <div className="flex flex-col items-center">
          <FaBullhorn className="text-[34px] text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-sm md:text-[12px] font-serif font-semibold">
            In the News
          </p>
        </div>

        {/* X */}
        <span className="text-2xl font-light text-[#3f3f3f]">×</span>

        {/* 5 */}
        <div className="flex flex-col items-center">
          <FaEye className="text-[34px] text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-sm md:text-[12px] font-serif font-semibold">
            Recognition
          </p>
        </div>

      </div>
    </section>
  );
}
