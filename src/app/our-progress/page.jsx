export default function TimelinePage() {
  const timeline = [
    {
      year: "2014",
      title: "Sed tincidunt suscipit turpis",
      date: "21 October",
      description:
        "Vestibulum in risus volutpat, scelerisque lorem vel, malesuada quam. Nullam quis lobortis elit.",
      side: "left",
    },
    {
      year: "2014",
      title: "Vestibulum id nisl a neque",
      date: "11 October",
      description:
        "Vestibulum in risus volutpat, scelerisque lorem vel, malesuada quam. Nullam quis lobortis elit.",
      side: "right",
    },
    {
      year: "2011",
      title: "Mauris ut porttitor nunc",
      date: "15 October",
      description:
        "Vestibulum in risus volutpat, scelerisque lorem vel, malesuada quam. Nullam quis lobortis elit.",
      side: "left",
    },
    {
      year: "2010",
      title: "Nam dignissim purus vitae nisl",
      date: "25 October",
      description:
        "Vestibulum in risus volutpat, scelerisque lorem vel, malesuada quam. Nullam quis lobortis elit.",
      side: "right",
    },
    {
      year: "2009",
      title: "Sed tincidunt suscipit turpis",
      date: "21 October",
      description:
        "Vestibulum in risus volutpat, scelerisque lorem vel, malesuada quam. Nullam quis lobortis elit.",
      side: "left",
    },
    {
      year: "2008",
      title: "Vestibulum id nisl a neque",
      date: "11 October",
      description:
        "Vestibulum in risus volutpat, scelerisque lorem vel, malesuada quam. Nullam quis lobortis elit.",
      side: "right",
    },
  ];

  return (
    <div className="relative max-w-5xl mx-auto py-16 px-4">
      {/* TOP HEADING */}
      <div className="text-center mb-16 relative">
        <div className="inline-block bg-black text-white px-10 py-2 text-xl font-medium relative">
          Our Experience
        </div>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative">

        {/* VERTICAL LINE */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-300"></div>

        {/* TIMELINE ITEMS */}
        <div className="space-y-20">
          {timeline.map((item, i) => (
            <div key={i} className="relative flex items-start">
              
              {/* LEFT SIDE CARD */}
              {item.side === "left" && (
                <div className="w-1/2 pr-8 text-right hidden md:block">
                  <div className="border border-gray-400 p-6 bg-white inline-block text-left max-w-md">
                    <h3 className="font-semibold text-lg uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                    <p className="mt-3 text-gray-700">{item.description}</p>
                  </div>
                </div>
              )}

              {/* YEAR + DIAMOND ICON */}
              <div className="absolute left-1/2 transform -translate-x-1/2 text-center -mt-3">
                <div className="flex flex-col items-center">
                  {/* Diamond */}
                  <div className="w-5 h-5 bg-gray-800 rotate-45"></div>
                  <p className="mt-2 font-medium">{item.year}</p>
                </div>
              </div>

              {/* RIGHT SIDE CARD */}
              {item.side === "right" && (
                <div className="w-1/2 pl-8 hidden md:block">
                  <div className="border border-gray-400 p-6 bg-white inline-block text-left max-w-md">
                    <h3 className="font-semibold text-lg uppercase">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                    <p className="mt-3 text-gray-700">{item.description}</p>
                  </div>
                </div>
              )}

              {/* MOBILE VERSION (STACKED) */}
              <div className="md:hidden w-full mt-10">
                <div className="border border-gray-400 p-6 bg-white text-left max-w-md mx-auto">
                  <h3 className="font-semibold text-lg uppercase">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{item.date}</p>
                  <p className="mt-3 text-gray-700">{item.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
