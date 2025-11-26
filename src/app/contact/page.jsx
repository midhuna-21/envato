export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      {/* TITLE */}
      <h1 className="text-center text-4xl font-semibold">CONTACT US</h1>

      {/* INTRO */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mt-4 leading-relaxed">
        Feel free to reach out to us anytime. We value communication and are happy 
        to answer questions, inquiries, or suggestions you may have.
      </p>

      {/* DIAMOND */}
      <div className="flex justify-center my-6">
        <div className="w-4 h-4 bg-gray-800 rotate-45"></div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">

        {/* CONTACT FORM */}
        <div className="border border-gray-300 p-8 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm mb-1">Your Name *</label>
              <input
                type="text"
                className="w-full border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email Address *</label>
              <input
                type="email"
                className="w-full border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <input
                type="text"
                className="w-full border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message *</label>
              <textarea
                rows="5"
                className="w-full border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-200"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Button */}
            <button className="mt-4 w-full bg-black text-white py-3 hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="p-8 bg-gray-50 border border-gray-300 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          {/* Address */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg">Our Office</h3>
            <p className="text-gray-700 mt-1">
              250 Biscayne Blvd, 11th Floor<br />
              Miami, Florida 33148
            </p>
          </div>

          {/* Phone */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg">Phone</h3>
            <p className="text-gray-700 mt-1">(305) 555-5522</p>
          </div>

          {/* Email */}
          <div className="mb-8">
            <h3 className="font-semibold text-lg">Email</h3>
            <p className="text-gray-700 mt-1">mail@mail.com</p>
          </div>

          {/* Social Icons */}
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>

          <div className="flex gap-4">
            {["fa-twitter", "fa-facebook", "fa-instagram", "fa-rss"].map(
              (icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center border border-gray-400 transform rotate-45"
                >
                  <i className={`fa ${icon} text-gray-700 text-lg -rotate-45`}></i>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="mt-16 w-full h-72 border border-gray-300">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?q=Miami&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
    </div>
  );
}
