export default function SectionTitle({ title }) {
  return (
    <div className="w-full text-center py-5">
      <h2 className="text-[45px] font-light  text-[#333]">
        {title.toUpperCase()}
      </h2>
    </div>
  );
}
