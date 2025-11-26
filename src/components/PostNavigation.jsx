export default function PostNavigation() {
  return (
    <div className="w-full border-t border-b border-gray-700 mt-6 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Previous Post */}
        <div className="flex">
          {/* Arrow Box */}
          <div className="w-12 bg-gray-100 flex items-center justify-center text-2xl text-gray-700 border-r border-gray-300">
            &laquo;
          </div>

          {/* Content */}
          <div className="flex-1 p-4 border-r border-gray-300">
            <span className="uppercase text-xs text-gray-500 font-semibold">
              Previous Post
            </span>

            <h3 className="text-xl leading-snug mt-1 font-medium">
              Aliquam quam orci in molestie a tempor nec
            </h3>
          </div>
        </div>

        {/* Next Post */}
        <div className="flex">
          {/* Content */}
          <div className="flex-1 p-4 border-l border-gray-300 md:border-l">
            <span className="uppercase text-xs text-gray-500 font-semibold">
              Next Post
            </span>

            <h3 className="text-xl leading-snug mt-1 font-medium">
              Pellentesque habitant morbi tristique senectus et
            </h3>
          </div>

          {/* Arrow Box */}
          <div className="w-12 bg-gray-100 flex items-center justify-center text-2xl text-gray-700 border-l border-gray-300">
            &raquo;
          </div>
        </div>
      </div>
    </div>
  );
}
