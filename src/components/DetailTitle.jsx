export default function Title({ title, description }) {
  return (
    <div className="w-full flex flex-col items-center py-5">
      <h2 className="text-[45px] font-light text-[#2f2f2f] leading-[1.1] tracking-tight text-center max-w-[800px]">
        {title.toUpperCase()}
      </h2>
      {/* Small space below title */}
      <p className="mt-2 md:text-[16px] text-[#555] text-[13px] text-center leading-[1.3] tracking-tight">
        {description}
      </p>
    </div>
  );
}
