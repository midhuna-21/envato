import Image from "next/image";

export default function NewsArticle( {article }) {
  console.log(article,'article')

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* IMAGE */}
      <div className="relative w-full h-80 md:h-96 rounded-md overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold mt-6 leading-snug">
        {article.title}
      </h1>

      {/* Meta */}
      <div className="text-sm text-gray-600 mt-2 space-x-3 flex flex-wrap">
        <span>By {article.author}</span>
        <span>•</span>
        <span>{article.date}</span>
        <span>•</span>
      </div>

      {/* Content */}
      <div className="mt-6 space-y-5 text-gray-800 leading-relaxed">
        <p>{article.shortdescription}</p>
        <p>{article.description}</p>
      </div>

      {/* Share Section */}
      <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="font-semibold tracking-wide uppercase text-gray-700 mb-3 md:mb-0">
          Share on:
        </span>

        <div className="flex items-center space-x-3 text-xl">
          <a href="#" className="hover:text-blue-500">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-red-500">
            <i className="fab fa-pinterest"></i>
          </a>
          <a href="#" className="hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
