import RelatedNewsCard from '../components/RelatedNewsCard'

export default function RelatedPostsSection() {
  const posts = [
    {
      image: "/demo/post1.jpg",
      category: "Design",
      title: "Aliquam fringilla metus sed nisl porttitor.",
      date: "October 05 2014",
      comments: 2
    },
    {
      image: "/demo/post2.jpg",
      category: "People",
      title: "Pellentesque enim odio, varius at aliquam in.",
      date: "October 05 2014",
      comments: 2
    }
  ];

  return (
    <div className="w-full mt-14">
      {/* Top Divider */}
      <div className="border-t-4 border-gray-700"></div>

      {/* Title */}
      <h2 className="text-center text-4xl font-light tracking-wider mt-6 mb-10">
        YOU MAY ALSO LIKE
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((item, index) => (
          <RelatedNewsCard
            key={index}
            image={item.image}
            category={item.category}
            title={item.title}
            date={item.date}
            comments={item.comments}
          />
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="border-b-4 border-gray-700 mt-10"></div>
    </div>
  );
}
