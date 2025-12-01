export default function PostNavigation() {
  return (
    <div className="w-full border-t-2 border-b-2 border-gray-700 mt-6 mb-6">
      <div className="border-t mt-0.5 border-b mb-0.5">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Previous Post */}
        <div className="flex">
          {/* Arrow Box */}
          <div className="w-12 bg-gray-100 flex items-center justify-center text-2xl text-gray-700">
            &laquo;
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <span className="uppercase text-[13px] text-[#c1c0b4] font-serif">
              Previous Post
            </span>

            <h3 className="text-[26px] leading-snug mt-1 font-medium">
              Aliquam quam orci in molestie a tempor nec
            </h3>
          </div>
        </div>

        {/* Next Post */}
        <div className="flex">
          {/* Content */}
          <div className="flex-1 p-4 md:border-l">
            <span className="uppercase text-[13px] text-[#c1c0b4] font-serif">
              Next Post
            </span>

            <h3 className="text-[26px] leading-snug mt-1 font-medium">
              Pellentesque habitant morbi tristique senectus et
            </h3>
          </div>

          {/* Arrow Box */}
          <div className="w-12 bg-gray-100 flex items-center justify-center text-2xl text-gray-700">
            &raquo;
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
