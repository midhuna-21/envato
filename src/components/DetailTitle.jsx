export default function Title({ title, description }) {
  return (
    <div className="w-full flex flex-col items-center py-5">
      <h2 className="text-[45px] font-light text-[#2f2f2f] text-center max-w-[800px]">
        {title.toUpperCase()}
      </h2>
      {/* Small space below title */}
      <p className="mt-2 text-[16px] text-[#555] text-center">
        {description}
      </p>
    </div>
  );
}
