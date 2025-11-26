export default function RelatedNewsCard({ image, category, title, date, comments }) {
  return (
    <div className="text-center">
      {/* Image Box */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />

        {/* Category Tag */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <span className="bg-gray-800 text-white text-xs px-4 py-1 font-semibold">
            ✦ {category.toUpperCase()} ✦
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="mt-4 text-2xl font-medium leading-snug">
        {title}
      </h3>

      {/* Date + Comments */}
      <div className="mt-2 text-gray-700 text-sm flex items-center justify-center space-x-3">
        <span>{date}</span>
        <span className="flex items-center space-x-1">
          <i className="fas fa-comment"></i>
          <span>{comments} Comments</span>
        </span>
      </div>
    </div>
  );
}
