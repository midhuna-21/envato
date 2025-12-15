import Link from "next/link";

function truncateWords(text, wordLimit = 4) {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}

export default function Breadcrumb({ category, title }) {
  const shortTitle = truncateWords(title, 4);

  return (
    <div
      className="w-full"
      style={{ backgroundImage: "url('/images/widget.webp')" }}
    >
      <div className="w-full border-t-4 border-[#2f2f2f]" />
      <div className="w-full border-t border-[#2f2f2f] -mt-px mt-0.5" />

      <div className="w-full h-15 md:h-10 flex items-center justify-center bg-cover bg-center">
        <div className="text-center text-[#3c3c3c] text-[10px] md:text-[13px] tracking-wide uppercase space-x-1">
          <span className="cursor-pointer hover:underline">HOME</span>

          {category && (
            <>
              <span>/</span>
              <span className="cursor-pointer hover:underline">
                {category.toUpperCase()}
              </span>
            </>
          )}

          {title && (
            <>
              <span>/</span>
              <span title={title}>
                {shortTitle.toUpperCase()}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
