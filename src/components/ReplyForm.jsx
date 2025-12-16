"use client";
import { useState, useEffect } from "react";

export default function ReplyForm() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    e.target.reset();
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <>
      <div className="w-full border-t-2 border-b-2 border-[#2f2f2f]">
        <div className="border-t border-b border-[#2f2f2f] mt-0.5 mb-0.5 py-6">
          <span className="text-[32px] font-normal mb-3">Leave a reply</span>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[13px] font-serif mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[13px] font-serif mb-1">E-mail</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-serif mb-1">Comment</label>
              <textarea
                rows="8"
                name="comment"
                required
                className="w-full border border-gray-300 px-3 py-2 focus:outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#2f2f2f] text-[#c1c0b4] px-6 py-2 text-[13px] font-serif cursor-pointer"
              >
                post comment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center pointer-events-none">
          <div className="bg-white border border-black md:p-8 p-4 rounded-xl shadow-xl text-center w-[300px] md:max-w-sm">
            <div className="flex justify-center mb-4">
              <div className="bg-black text-white md:w-16 md:h-16 w-13 h-13 rounded-full flex justify-center items-center text-4xl">
                ✓
              </div>
            </div>

            <h3 className="md:text-[15px] text-[13px] font-semibold mb-2">Success!</h3>
            <p className="text-gray-700 text-[13px] md:text-[15px]">Thank you! We have received your message.</p>
          </div>
        </div>
      )}
    </>
  );
}
