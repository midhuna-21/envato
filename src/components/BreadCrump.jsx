import Link from "next/link";

export default function Breadcrumb({ category, title }) {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: "url('/images/widget.webp')",
      }}
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
                <span className="">{title.toUpperCase()}</span>
              </>
            )}
        </div>
      </div>
    </div>
  );
}
