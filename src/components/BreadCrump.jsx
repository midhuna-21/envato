import Image from "next/image";

export default function Breadcrumb() {
  return (
    <div className="w-full" style={{
          backgroundImage: "url('/images/widget.webp')",
        }}>
      <div className="w-full border-t-4 border-[#2f2f2f]" />
      <div className="w-full border-t border-[#2f2f2f] -mt-px mt-0.5" />

      <div
        className="w-full h-10 flex items-center justify-center bg-cover bg-center"
       
      >
        {/* BREADCRUMB TEXT */}
        <div className="text-center text-[#3c3c3c] text-[13px] tracking-wide uppercase">
          <span className="cursor-pointer hover:underline">HOME</span>
          <span className="mx-1">/</span>
          <span className="cursor-pointer hover:underline">BLOG</span>
          <span className="mx-1">/</span>
          <span className="font-semibold">THREE COLUMNS</span>
        </div>
      </div>
    </div>
  );
}
