export default function AuthorCard({ image, name, description }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
      {/* IMAGE */}
      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 h-56 object-cover"
      />

      {/* CONTENT */}
      <div className="md:w-1/2 px-4">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-3 mt-4">
          {["fa-twitter", "fa-facebook", "fa-skype", "fa-rss", "fa-instagram"].map(
            (icon, i) => (
              <div
                key={i}
                className="w-8 h-8 border border-gray-400 transform rotate-45 flex items-center justify-center"
              >
                <i className={`fa ${icon} text-gray-700 -rotate-45`}></i>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
