import AuthorCard from "../../components/AuthorCard";

export default function OurTeamPage() {
  const authors = [
    {
      image: "/demo/a1.jpg",
      name: "Oliver Gray",
      description:
        "Nullam varius lacinia congue. Donec ac dapibus elit. Proin facilisis nulla in est mattis.",
    },
    {
      image: "/demo/a2.jpg",
      name: "Serena Fischer",
      description:
        "Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl.",
    },
    {
      image: "/demo/a3.jpg",
      name: "John Deo",
      description:
        "Vivamus tincidunt erat in mi accumsan, a sollicitudin risus vestibulum ornare.",
    },
    {
      image: "/demo/a4.jpg",
      name: "Smiley Suzie",
      description:
        "Curabitur blandit velit elementum augue elementum scelerisque.",
    },
    {
      image: "/demo/a5.jpg",
      name: "John Lemon",
      description:
        "Nullam varius lacinia congue. Donec ac dapibus elit. Proin facilisis nulla in est mattis.",
    },
    {
      image: "/demo/a6.jpg",
      name: "Michael Grey",
      description:
        "Vestibulum id nisl a neque malesuada hendrerit. Etiam eget lorem commodo.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-14 px-4">
      
      {/* TITLE */}
      <h2 className="text-center text-3xl font-semibold">OUR AUTHORS</h2>

      {/* SUBTEXT */}
      <p className="text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
        Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl. 
        Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan.
      </p>

      {/* AUTHOR CARDS GRID */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
        {authors.map((author, i) => (
          <div key={i} className="w-full">
            <AuthorCard
              image={author.image}
              name={author.name}
              description={author.description}
            />

            {/* Divider Under Each Card */}
            <div className="mt-6 border-b border-gray-400 w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
