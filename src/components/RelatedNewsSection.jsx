import RelatedNewsCard from '../components/RelatedNewsCard'

export default function RelatedPostsSection({ otherArticles }) {
  const posts = otherArticles.slice(0, 2)

  return (
    <div className="w-full border-t-2 border-b-2 border-[#2f2f2f]">
      <div className="border-t border-b border-[#2f2f2f] mt-0.5 mb-0.5 py-6">
        <h2 className="text-center text-[45px] text-[#c1c0b4] font-light leading-[1.1] tracking-tight md:mb-7">
          YOU MAY ALSO LIKE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          {posts.map((item, index) => (
            <RelatedNewsCard
              key={index}
              image={item.image}
              category={item.category}
              title={item.title}
              date={item.date}
              comments={item.comments}
              author={item.author.name}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
