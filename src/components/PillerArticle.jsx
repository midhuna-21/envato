import AuthorsSection from "./AuthorSection";
import AuthorsWidget from "./AuthorsWidget";
import CategoriesWidget from "./CategoriesWidget";
import CommentsSection from "./CommentSection";
import DetailCommentSection from "./DetatilCommentSection";
import JulioArticles from "./JulioArticles";
import NewsArticle from "./NewsArticle";
import PostNavigation from "./PostNavigation";
import ProfileCard from "./ProfileCard";
import RelatedPostsSection from "./RelatedNewsSection";
import ReplyForm from "./ReplyForm";
import SidebarComments from "./SidebarComments";
import SocialStats from "./SocialStats";

export default function PillerArticle({article}) {
  console.log(article,'article')
  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-7">
          <JulioArticles article={article} />
          <ProfileCard author={article.author}/>
          <PostNavigation />
          {/* <DetailCommentSection /> */}
          <ReplyForm />
          {/* <RelatedPostsSection otherArticles={otherArticles} /> */}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col md:mt-0 mt-1">
          <div className="border-r border-l border-b border-t-2 border-t-[#2f2f2f] border-[#d8d3d3c1]">
            <div className="border-t border-[#2f2f2f] mt-0.5" />
            <div className="pt-0 ">
              <CategoriesWidget />
              {/* <CommentsSection /> */}
              <AuthorsSection />
              <SocialStats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
