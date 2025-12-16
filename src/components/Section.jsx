import BlogGrid from "../components/BlogGrid";
import AuthorsSection from "../components/AuthorSection";

export default function Section({ data }) {
  return (
    <section className="bg-[#f0f0f0] py-2 md:mt-12 mt-8">
      <div
        className="w-full px-4 md:px-10 py-8"
        style={{
          backgroundImage: "url('/images/widget.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          backgroundColor: "#e9e9e7",
        }}
      >
        <h2 className="text-center text-[42px] md:text-[45px] leading-[1.1] tracking-tight font-normal tracking-wide mb-10">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <BlogGrid data={data} />
          </div>
          <div className="flex flex-col gap-10">
            <div className="border-r border-l border-b border-t-2  border-t-[#2f2f2f] border-[#d8d3d3c1]">
              <div className="border-t border-[#2f2f2f] mt-0.5" />
              <div className=" pt-0 ">
                <AuthorsSection />
                {/* <SocialStats /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

