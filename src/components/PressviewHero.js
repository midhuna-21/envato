import { FaUser, FaCoffee, FaFlask, FaBullhorn, FaEye } from "react-icons/fa";

export default function PressviewHero() {
  return (
    <section className="w-full bg-white text-center px-4 py-16 md:py-24">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-light tracking-wide text-gray-900">
        WELCOME TO PRESSVIEW
      </h1>

      {/* Subheading */}
      <h2 className="mt-4 text-xl md:text-3xl font-light text-gray-400">
        A clean and powerful multipurpose magazine template.
      </h2>

      {/* Description */}
      <p className="max-w-3xl mx-auto mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
        Curabitur quis tellus in eros rutrum dapibus. Curabitur non eros congue arcu
        consectetur semper id et urna. Integer scelerisque, felis nec tincidunt 
        eleifend, neque ipsum consectetur arcu, accumsan fringilla libero leo venenatis 
        tellus. In hac habitasse platea dictumst.
      </p>

      {/* Icons Row */}
      <div className="flex flex-wrap justify-center items-center gap-10 mt-14">
        
        {/* User */}
        <div className="flex flex-col items-center">
          <FaUser className="text-4xl text-gray-700" />
          <p className="mt-2 text-gray-700 text-sm md:text-base">User Centred</p>
        </div>

        {/* Coffee */}
        <div className="flex flex-col items-center">
          <FaCoffee className="text-4xl text-gray-700" />
          <p className="mt-2 text-gray-700 text-sm md:text-base">Who We Are</p>
        </div>


        {/* Flask */}
        <div className="flex flex-col items-center">
          <FaFlask className="text-4xl text-gray-700" />
          <p className="mt-2 text-gray-700 text-sm md:text-base">What We Do</p>
        </div>

        {/* Bullhorn */}
        <div className="flex flex-col items-center">
          <FaBullhorn className="text-4xl text-gray-700" />
          <p className="mt-2 text-gray-700 text-sm md:text-base">In the News</p>
        </div>


        {/* Eye */}
        <div className="flex flex-col items-center">
          <FaEye className="text-4xl text-gray-700" />
          <p className="mt-2 text-gray-700 text-sm md:text-base">Recognition</p>
        </div>

      </div>
    </section>
  );
}
