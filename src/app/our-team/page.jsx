import AuthorCard from "../../components/AuthorCard";

export default function OurTeamPage() {
  const authors = [
    {
      name: "Claire Addison",
      role: "Senior Investigative Reporter",
      bio: "Claire uncovers in-depth stories with a focus on accuracy, accountability, and clear reporting. She specializes in investigations that help readers understand the truth behind complex issues.",
      image: "/images/claire-addison.webp",
      email: "",
      twitter: "",
    },
    {
      name: "Marcus Bennett",
      role: "Political Correspondent",
      bio: "Marcus covers U.S. politics and policy with sharp, accessible reporting. He breaks down political developments so readers understand what they mean in real life.",
      image: "/images/marcus-bennett.webp",
      email: "",
      twitter: "",
    },
    {
      name: "Jenna Whitmore",
      role: "Entertainment Writer",
      bio: "Jenna covers entertainment, culture, and trending stories, bringing fresh perspective and concise reporting that highlights the people and moments shaping today’s entertainment landscape.",
      image: "/images/jenna-whitmore.webp",
      email: "",
      twitter: "",
    },
    {
      name: "Evan Carlisle",
      role: "U.S. News Reporter",
      bio: "Evan reports on major U.S. news stories with a focus on clarity, relevance, and timely updates that help readers stay informed about what’s happening across the country.",
      image: "/images/evan-carlisle.webp",
      email: "",
      twitter: "",
    },
    {
      name: "Sophie Langford",
      role: "Business & Finance Correspondent",
      bio: "Sophie covers business trends and financial developments, offering clear insights that help FiscalFusion readers understand market shifts and economic changes.",
      image: "/images/sophie-langford.webp",
      email: "",
      twitter: "",
    },
    {
      name: "Travis Monroe",
      role: "Sports Reporter",
      bio: "Travis brings fast, engaging coverage of sports highlights, athlete updates, and major events, delivering sharp commentary and essential game-focused reporting for FiscalFusion.",
      image: "/images/travis-monroe.webp",
      email: "",
      twitter: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="p-5 md:p-10 border-b border-gray-200">
        <h2 className="text-center text-3xl md:text-4xl font-semibold">Our Team</h2>
        <p className="text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed text-[12px] md:text-[15px]">
          Meet the talented journalists and contributors who bring credible, insightful, and timely news to FiscalFusion readers. Each member is committed to accuracy, transparency, and quality reporting across U.S. and global news.
        </p>
      </section>

      {/* AUTHOR CARDS GRID */}
      <div className="mt-10 md:mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 px-5 mb-15">
        {authors.map((author, i) => (
          <div key={i} className="w-full flex flex-col">
            <AuthorCard
              image={author.image}
              name={author.name}
              role={author.role}
              description={author.bio}
              email={author.email}
              twitter={author.twitter}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
