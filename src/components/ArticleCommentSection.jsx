export default function ArticleCommentsSection() {
  const comments = [
    {
      id: 1,
      name: "John Doe",
      date: "August 17",
      timeAgo: "47 minutes ago",
      avatar: "/demo/user1.jpg",
      text: "Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan, a sollicitudin risus",
    },
    {
      id: 2,
      name: "Clark Cloe",
      date: "August 18",
      timeAgo: "47 minutes ago",
      avatar: "/demo/user2.jpg",
      text: "Vestibulum porta libero leo, sed malesuada enim auctor eget. Duis pretium ipsum nec mi adipiscing fermentum ac eget mauris. Ut posuere volutpat mi, eget condimentum nibh",
    },
    {
      id: 3,
      name: "John Doe",
      date: "August 15",
      timeAgo: "47 minutes ago",
      avatar: "/demo/user1.jpg",
      text: "Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan, a sollicitudin risus",
    },
  ];

  return (
    <div className="w-full mt-10">
      {/* Thick Top Border */}
      <div className="border-t-4 border-gray-700 mb-3"></div>

      {/* Section Title */}
      <h2 className="text-3xl font-semibold mb-6">Comments (3)</h2>

      {comments.map((c, i) => (
        <div key={c.id} className="pb-6">
          {/* Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            
            {/* Avatar + Content */}
            <div className="flex space-x-4">
              <img
                src={c.avatar}
                alt={c.name}
                className="w-14 h-14 object-cover rounded"
              />

              <div>
                {/* Name + Date */}
                <div className="flex flex-wrap items-center space-x-2 text-sm">
                  <span className="font-semibold">{c.name}</span>
                  <span className="text-gray-600">{c.date},</span>
                  <span className="text-gray-500">{c.timeAgo}</span>
                </div>

                {/* Comment Text */}
                <p className="mt-2 text-gray-700 leading-relaxed">
                  {c.text}
                </p>
              </div>
            </div>

            {/* Reply Button */}
            <div className="mt-3 md:mt-0">
              <button className="bg-gray-800 text-white px-4 py-1 text-sm flex items-center space-x-2">
                <span>Reply</span>
              </button>
            </div>
          </div>

          {/* Divider except after last comment */}
          {i < comments.length - 1 && (
            <div className="border-b border-gray-300 my-6"></div>
          )}
        </div>
      ))}
    </div>
  );
}
