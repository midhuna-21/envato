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
    <div className="w-full bg-[#f3f3f3] py-10 border-t border-b border-gray-400">
      {/* TITLE */}
      <h2 className="text-center text-4xl font-light mb-10">
        <span className="px-4">◆ Comments ◆</span>
      </h2>

      {/* COMMENT LIST */}
      <div className="max-w-4xl mx-auto px-4">
        {comments.map((c, i) => (
          <div key={i} className="mb-8">
            {/* NUMBER + NAME */}
            <div className="flex w-full">
              <div className="bg-black text-white px-4 py-2 text-lg font-bold">
                {c.id}
              </div>
              <div className="flex-1 border border-gray-400 flex items-center justify-center py-2 font-semibold">
                {c.name}
              </div>
            </div>

            {/* TRIANGLE */}
            <div className="flex justify-center">
              <div className="w-4 h-4 bg-white border-t border-l border-gray-400 rotate-45 -mt-2"></div>
            </div>

            {/* CONTENT BOX */}
            <div className="border border-gray-400 bg-white p-6 text-gray-800">
              {c.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
