import BlogGrid from "@/components/BlogGrid";
import AuthorsSection from "@/components/AuthorSection";
import CommentsSection from "@/components/CommentSection";
import SocialStats from "@/components/SocialStats";

export default function Section() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">

      {/* 2 COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT SIDE — BLOG GRID */}
        <div className="lg:col-span-2">
          <BlogGrid />
        </div>

        {/* RIGHT SIDE — SIDEBAR */}
        <div className="flex flex-col gap-10">
          <AuthorsSection />
          <CommentsSection />
          <SocialStats />
        </div>

      </div>

    </div>
  );
}
