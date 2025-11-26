export default function SidebarComments() {
  const comments = [
    {
      number: "01.",
      name: "Kyle Garza",
      text: "Curabitur non eros congue arcu consectetur semper id et urna. Integer scelerisque, felis nec tincidunt, eleifend neque ipsum consectetur.",
    },
    {
      number: "02.",
      name: "Randy Watson",
      text: "Sed pretium elit et sagittis egestas. Vivamus feugiat nisl id egestas convallis. Proin dapibus dui mauris, luctus bibendum nunc aliquet.",
    },
    {
      number: "03.",
      name: "Jeremy Walsh",
      text: "Aenean vel feugiat eros. Integer purus libero, commodo sit amet ipsum a, fringilla posuere augue. Ut eleifend quis dui sit amet semper.",
    },
  ];

  return (
    <div className="w-full mt-10">
      {/* Top Border */}
      <div className="border-t-4 border-gray-700 mb-4"></div>

      {/* Title */}
      <h2 className="text-center text-xl font-semibold mb-4">
        ✦ Comments ✦
      </h2>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment, idx) => (
          <div
            key={idx}
            className="bg-[#f3f3f3] border border-gray-300 shadow-sm"
          >
            {/* Top Number Box */}
            <div className="flex items-center">
              <div className="bg-gray-800 w-12 text-white text-center py-2 font-bold">
                {comment.number}
              </div>

              <div className="flex-1 text-center border-l border-gray-300 py-2 font-semibold">
                {comment.name}
              </div>
            </div>

            {/* Text */}
            <p className="p-4 text-gray-700 text-sm leading-relaxed">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
