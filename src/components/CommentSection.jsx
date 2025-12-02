export default function CommentsSection() {
  const comments = [
    {
      id: "01.",
      name: "Kyle Garza",
      text: "Curabitur non eros congue arcu consectetur semper id et urna. Integer scelerisque, felis nec tincidunt.",
    },
    {
      id: "02.",
      name: "Randy Watson",
      text: "Sed pretium elit et sagittis egestas. Vivamus feugiat nisl id egestas convallis. Proin dapibus dui nisi.",
    },
    {
      id: "03.",
      name: "Jeremy Walsh",
      text: "Aenean vel feugiat eros. Integer purus libero, commodo sit amet ipsum a, fringilla posuere augue.",
    },
  ];

  return (
    <div className="w-full border-t-2 border-b-2 border-[#2f2f2f]" style={{ backgroundImage: "url('/images/widget.webp')" }}>
      <div className="border-t border-b border-[#2f2f2f] mt-0.5 mb-0.5">
        <div className="flex items-center justify-center gap-2 mb-5 mt-3">
          <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />
          <h2 className="text-center text-[32px] font-light">
            Comments
          </h2>
          <div className="relative w-2 h-2 rotate-45 bg-[#2f2f2f]" />
        </div>

        <div className="max-w-4xl mx-auto px-4">
          {comments.map((c, i) => (
            <div key={i} className="mb-8">
              <div className="flex w-full border border-[#d1d1d1]">
                <div className="bg-[#2f2f2f] text-white px-2 py-1 text-lg font-bold m-0.5">
                  {c.id}
                </div>
                <div className="flex-1  flex items-center justify-center py-2 font-serif text-[14px]">
                  {c.name}
                </div>
              </div>
              <div className="relative mt-2">
                <div
                  className="absolute -top-[3px] left-1/2 -translate-x-1/2 
               w-2 h-2 bg-[#f3f3f3] 
               border-l border-t border-[#d1d1d1] 
               rotate-45"
                />
                <div className="border border-[#d1d1d1] p-5 text-[#3f3f3f] text-[13px] font-serif bg-[#f3f3f3]">
                  {c.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
