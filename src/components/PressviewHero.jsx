import { FaUser, FaCoffee, FaFlask, FaBullhorn, FaEye } from "react-icons/fa";

export default function PressviewHero() {
  return (
    <section className="max-w-3xl mx-auto bg-white text-center px-4 py-8 md:py-7 md:mb-4">

      <h1 className="text-[40px] leading-[1.1] tracking-tight md:text-[45px] font-normal text-[#2f2f2f]">
        WELCOME TO PRESSVIEW
      </h1>

      <h2 className="mt-2 text-[28px] md:text-[35px] leading-[1.1] tracking-tight font-light text-[#c1c0b4]">
        A clean and powerful multipurpose magazine template.
      </h2>

      <p className="mx-auto mt-1 text-[#3f3f3f] leading-[1.3] tracking-tight text-base font-serif text-[13px] md:text-[15px]">
        Curabitur quis tellus in eros rutrum dapibus. Curabitur non eros congue arcu
        consectetur semper id et urna. Integer scelerisque, felis nec tincidunt
        eleifend, neque ipsum consectetur arcu, accumsan fringilla libero leo venenatis
        tellus. In hac habitasse platea dictumst.
      </p>

      {/* Icons + X separators */}
      <div className="flex flex-wrap justify-center items-center gap-3 mt-8">

        <div className="flex flex-col items-center">
          <FaUser className="text-2xl md:text-3xl text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-[10px] md:text-[12px] font-serif font-semibold">
            User Centred
          </p>
        </div>

        {/* X — hidden on mobile */}
        <span className="hidden md:inline text-2xl font-light text-[#3f3f3f]">×</span>

        <div className="flex flex-col items-center">
          <FaCoffee className="text-2xl md:text-3xl text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-[10px] md:text-[12px] font-serif font-semibold">
            Who We Are
          </p>
        </div>

        <span className="hidden md:inline text-2xl font-light text-[#3f3f3f]">×</span>

        <div className="flex flex-col items-center">
          <FaFlask className="text-2xl md:text-3xl text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-[10px] md:text-[12px] font-serif font-semibold">
            What We Do
          </p>
        </div>

        <span className="hidden md:inline text-2xl font-light text-[#3f3f3f]">×</span>

        <div className="flex flex-col items-center">
          <FaBullhorn className="text-2xl md:text-3xl text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-[10px] md:text-[12px] font-serif font-semibold">
            In the News
          </p>
        </div>

        <span className="hidden md:inline text-2xl font-light text-[#3f3f3f]">×</span>

        <div className="flex flex-col items-center">
          <FaEye className="text-2xl md:text-3xl text-[#3f3f3f]" />
          <p className="mt-2 text-gray-700 text-[10px] md:text-[12px] font-serif font-semibold">
            Recognition
          </p>
        </div>
      </div>
    </section>
  );
}
