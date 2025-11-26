export default function SocialStats() {
  const stats = [
    { icon: "🐦", value: "15500", label: "followers" },
    { icon: "📘", value: "23081", label: "funs" },
    { icon: "🅖", value: "15323", label: "people" },
  ];

  return (
    <div className="w-full border border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-black text-white flex flex-col items-center justify-center py-6 border-b md:border-b-0 md:border-r border-gray-700"
          >
            <span className="text-4xl mb-2">{item.icon}</span>
            <div className="text-2xl font-bold">{item.value}</div>
            <div className="text-sm opacity-80">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
