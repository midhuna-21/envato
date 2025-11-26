import AuthorsWidget from "./AuthorsWidget";
import CategoriesWidget from "./CategoriesWidget";
import CommentsSection from "./CommentSection";
import NewsArticle from "./NewsArticle";
import PostNavigation from "./PostNavigation";
import ProfileCard from "./ProfileCard";
import RelatedPostsSection from "./RelatedNewsSection";
import ReplyForm from "./ReplyForm";
import SidebarComments from "./SidebarComments";

export default function Article({ article, otherArticles }) {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* GRID: Left content + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT CONTENT - Main 2/3 width */}
        <div className="lg:col-span-2 space-y-10">
          <NewsArticle article={article} />
          <ProfileCard />
          <PostNavigation />
          <CommentsSection />
          <ReplyForm />
          <RelatedPostsSection otherArticles={otherArticles} />
        </div>

        {/* RIGHT SIDEBAR - 1/3 width */}
        <aside className="space-y-10">
          <CategoriesWidget />
          <SidebarComments />
          <AuthorsWidget />
        </aside>
      </div>
    </div>
  );
}
