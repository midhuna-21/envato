import { FaReply } from "react-icons/fa";

export default function DetailCommentSection() {
  const comments = [
    {
      name: "John Doe",
      date: "August 17",
      time: "47 minutes ago",
      image: "/images/author-01.jpg",
      text: "Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan, a sollicitudin risus",
    },
    {
      name: "Clark Cloe",
      date: "August 18",
      time: "47 minutes ago",
      image: "/images/author-02.jpg",
      text: "Vestibulum porta libero leo, sed malesuada enim auctor eget. Duis pretium ipsum nec mi adipiscing fermentum ac eget mauris. Ut posuere volutpat mi, eget condimentum nibh",
    },
    {
      name: "John Doe",
      date: "August 15",
      time: "47 minutes ago",
      image: "/images/author-03.jpg",
      text: "Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan, a sollicitudin risus",
    },
  ];

  return (
    <div className="w-full mt-8">
      <h2 className="text-[32px] text-[#2f2f2f] mb-6">
        Comments ({comments.length})
      </h2>

      {comments.map((c, i) => (
        <div key={i} className="mb-8">

          {/* Row */}
          <div className="flex gap-5">
            
            {/* Image */}
            <img
              src={c.image}
              alt={c.name}
              className="w-20 h-20 object-cover"
            />

            {/* Content */}
            <div className="flex-1">

              {/* Name + Date */}
              <div className="flex items-center gap-3 text-[12px] font-serif mb-2">
                <span className="font-bold text-[#2f2f2f]">{c.name}</span>
                <span className="text-[#2f2f2f] font-semibold">{c.date}</span>
                <span className="text-gray-400">{c.time}</span>
              </div>

              {/* Text */}
              <p className="text-[#2f2f2f] font-serif text-[12px]">
                {c.text}
              </p>
            </div>

            {/* Reply button */}
            <button className="bg-[#2f2f2f] h-8 px-3 text-[#c1c0b4] flex items-center gap-2 text-sm">
              <FaReply className="text-[#c1c0b4]" />
              Reply
            </button>
          </div>

          {/* Divider */}
          {i !== comments.length - 1 && (
            <div className="w-full border-b mt-6 border-gray-300"></div>
          )}
        </div>
      ))}

    </div>
  );
}
