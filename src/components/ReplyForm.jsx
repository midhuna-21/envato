export default function ReplyForm() {
  return (
    <div className="w-full mt-10">
      {/* Top Border */}
      <div className="border-t-4 border-gray-700 mb-6"></div>

      {/* Title */}
      <h2 className="text-3xl font-semibold mb-6">Leave a reply</h2>

      {/* Form */}
      <form className="space-y-6">
        {/* Name + Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Name (required)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
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
          <label className="block text-sm font-semibold mb-1">Comment</label>
          <textarea
            rows="8"
            className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button (right aligned) */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-800 text-white px-6 py-2 text-sm font-semibold"
          >
            post comment
          </button>
        </div>
      </form>

      {/* Bottom Border */}
      <div className="border-b-4 border-gray-700 mt-10"></div>
    </div>
  );
}
