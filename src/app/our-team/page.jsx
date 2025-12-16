import AuthorCard from "../../components/AuthorCard";

export default function OurTeamPage() {
  const authors = [
    {
      name: "Claire Addison",
      role: "Senior Investigative Reporter",
      bio: "Claire uncovers in-depth stories with a focus on accuracy, accountability, and clear reporting. She specializes in investigations that help readers understand the truth behind complex issues.",
      image: "/images/claire-addison.webp",
      email: "claireaddison@fiscalfusion.org",
      facebook: "https://www.facebook.com/profile.php?id=61584652001298",
      instagram: "https://www.instagram.com/claireaddison2025/",
      medium: "https://medium.com/@claireaddison_68794",
      substack: "https://substack.com/@claireaddison1"


    },
    {
      name: "Marcus Bennett",
      role: "Political Correspondent",
      bio: "Marcus covers U.S. politics and policy with sharp, accessible reporting. He breaks down political developments so readers understand what they mean in real life.",
      image: "/images/marcus-bennett.webp",
      email: "marcusbennett@fiscalfusion.org",
      facebook: "https://www.facebook.com/profile.php?id=61584651071329",
      instagram: "https://www.instagram.com/marcusbennett2025/",
      medium: "https://medium.com/@marcusbennett_21499",
      substack: "https://substack.com/@marcusbennett2"

    },
    {
      name: "Jenna Whitmore",
      role: "Entertainment Writer",
      bio: "Jenna covers entertainment, culture, and trending stories, bringing fresh perspective and concise reporting that highlights the people and moments shaping today’s entertainment landscape.",
      image: "/images/jenna-whitmore.webp",
      email: "jennawhitmore@fiscalfusion.org",
      facebook: "https://www.facebook.com/profile.php?id=61584976316567",
      instagram: "https://www.instagram.com/jennawhitmore2025/",
      medium: "https://medium.com/@jennawhitmore",
      substack: "https://substack.com/@jennawhitmore"

    },
    {
      name: "Evan Carlisle",
      role: "U.S. News Reporter",
      bio: "Evan reports on major U.S. news stories with a focus on clarity, relevance, and timely updates that help readers stay informed about what’s happening across the country.",
      image: "/images/evan-carlisle.webp",
      email: "evancarlisle@fiscalfusion.org",
      facebook: "https://www.facebook.com/profile.php?id=61584747486041",
      instagram: "https://www.instagram.com/evancarlisle92/",
      medium: "https://medium.com/@evancarlisle_85958",
      substack: "https://substack.com/@evancarlisle"

    },
    {
      name: "Sophie Langford",
      role: "Business & Finance Correspondent",
      bio: "Sophie covers business trends and financial developments, offering clear insights that help FiscalFusion readers understand market shifts and economic changes.",
      image: "/images/sophie-langford.webp",
      email: "sophielangford@fiscalfusion.org",
      facebook: "https://www.facebook.com/profile.php?id=61584953787187",
      instagram: "https://www.instagram.com/sophielangford9/",
      medium: "https://medium.com/@sophielangford_44287",
      substack: "https://substack.com/@sophielangford1"

    },
    {
      name: "Travis Monroe",
      role: "Sports Reporter",
      bio: "Travis brings fast, engaging coverage of sports highlights, athlete updates, and major events, delivering sharp commentary and essential game-focused reporting for FiscalFusion.",
      image: "/images/travis-monroe.webp",
      email: "travismonroe@fiscalfusion.org",
      facebook: "https://www.facebook.com/profile.php?id=61584803823704",
      instagram: "https://www.instagram.com/travismonroe2025/",
      medium: "https://medium.com/@travismonroe_60532",
      substack: "https://substack.com/@travismonroe1"

    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="p-5 md:p-10  border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Our Team
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            The voices behind the stories, bringing you accurate, insightful, and engaging news every day.
          </p>
        </div>
      </section>

      <div className="mt-10 md:mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 px-5 mb-15">
        {authors.map((author, i) => (
          <div key={i} className="w-full flex flex-col">
            <AuthorCard
              image={author.image}
              name={author.name}
              role={author.role}
              description={author.bio}
              email={author.email}
              facebook={author.facebook}
              instagram={author.instagram}
              medium={author.medium}
              substack={author.substack}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
