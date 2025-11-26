export default function ProfileCard() {
  return (
    <div className="w-full">
      {/* Top Border */}
      <div className="border-t border-gray-700 my-4"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#f3f3f3]">
        {/* Left Image */}
        <div className="w-full h-full">
          <img
            src="/demo/profile.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center p-8">
          <h2 className="text-3xl font-semibold mb-3">Oliver Matthews</h2>

          <p className="text-gray-700 leading-relaxed max-w-xl mx-auto">
            Nullam varius lacinia congue. Donec ac dapibus elit. Proin facilisis
            nulla in est mattis, ut dapibus justo euismod. Proin sollicitudin
            a mi vel fermentum. Phasellus aliquam sollicitudin libero nec
            tincidunt. Sed posuere nisl sit amet erat faucibus, vitae pharetra.
          </p>

          {/* Close Icon */}
          <div className="text-3xl mt-6 text-gray-800">×</div>

          {/* Social Icons */}
          <div className="flex justify-center mt-6 space-x-4">
            {[ 
              "fab fa-twitter", 
              "fab fa-facebook-f", 
              "fab fa-skype", 
              "fas fa-rss", 
              "fab fa-instagram" 
            ].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-gray-300 transform rotate-45 flex items-center justify-center"
              >
                <i className={`${icon} text-gray-700 transform -rotate-45`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="border-b border-gray-700 my-4"></div>
    </div>
  );
}
