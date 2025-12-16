import Link from "next/link";

export default function PostNavigation({ otherArticles }) {

  return (
    <div className="w-full border-t-2 border-b-2 border-gray-700 mt-6 mb-6">
      <div className="border-t mt-0.5 border-b mb-0.5">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex">
            <div className="w-12 bg-gray-100 flex items-center justify-center text-2xl text-gray-700">
              <Link href={`/${otherArticles[0].category}/${otherArticles[0].slug}`} className="text-decoration-none" title={otherArticles[0].title} aria-label={otherArticles[0].title}>
                &laquo;
              </Link>
            </div>
            <div className="flex-1 p-4">
              <span className="uppercase text-[13px] text-[#c1c0b4] font-serif ">
                Previous Post
              </span>
              <Link href={`/${otherArticles[0].category}/${otherArticles[0].slug}`} className="text-decoration-none" title={otherArticles[0].title} aria-label={otherArticles[0].title}>
                <p className="text-[26px] leading-[1.1] tracking-tight mt-1 font-medium line-clamp-2">
                  {otherArticles[0].title}
                </p>
              </Link>
            </div>
          </div>

          <div className="flex border-t md:border-t-0 md:border-l">
            <div className="flex-1 p-4">
              <span className="uppercase text-[13px] text-[#c1c0b4] font-serif">
                Next Post
              </span>
              <Link href={`/${otherArticles[1].category}/${otherArticles[1].slug}`} className="text-decoration-none" title={otherArticles[1].title} aria-label={otherArticles[1].title}>
                <p className="text-[26px] mt-1 leading-[1.1] tracking-tight font-medium line-clamp-2">
                  {otherArticles[1].title}
                </p>
              </Link>
            </div>

            <div className="w-12 bg-gray-100 flex items-center justify-center text-2xl text-gray-700">
              <Link href={`/${otherArticles[1].category}/${otherArticles[1].slug}`} className="text-decoration-none" title={otherArticles[1].title} aria-label={otherArticles[1].title}>
                &raquo;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
