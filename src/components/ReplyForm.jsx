export default function ReplyForm() {
  return (
    <div className="w-full border-t-2 border-b-2 border-[#2f2f2f]">
      {/* Top Border */}
      <div className="border-t border-b border-[#2f2f2f] mt-0.5 mb-0.5 py-6">

      {/* Title */}
      <h2 className="text-[32px] font-normal mb-3">Leave a reply</h2>

      {/* Form */}
      <form className="space-y-6">
        {/* Name + Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[13px] font-serif mb-1">
              Name (required)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[13px] font-serif mb-1">
              E-mail (required)
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Comment */}
        <div>
          <label className="block text-[13px] font-serif mb-1">Comment</label>
          <textarea
            rows="8"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button (right aligned) */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#2f2f2f] text-[#c1c0b4] px-6 py-2 text-[13px] font-serif"
          >
            post comment
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
