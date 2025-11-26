import AuthorCard from "../../components/AuthorCard";

export default function AboutPage() {
  const team = [
    {
      image: "/demo/a1.jpg",
      name: "Oliver Gray",
      description: "Senior Editor with 15 years of writing experience.",
    },
    {
      image: "/demo/a2.jpg",
      name: "Serena Fischer",
      description: "Creative Director and visual storyteller.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">

      {/* PAGE TITLE */}
      <h1 className="text-center text-4xl font-bold tracking-wide">
        ABOUT US
      </h1>

      {/* INTRO */}
      <p className="text-center text-gray-700 mt-6 leading-relaxed max-w-3xl mx-auto">
        Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, 
        ut volutpat nisl. Nam ullamcorper ultricies metus vel ornare. Vivamus 
        tincidunt erat in mi accumsan, a sollicitudin risus vestibulum facilisis.
      </p>

      {/* DIVIDER */}
      <div className="flex justify-center my-8">
        <div className="w-4 h-4 bg-gray-800 rotate-45"></div>
      </div>

      {/* WHO WE ARE + WHAT WE DO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            We are a team of passionate writers, designers, and digital creators 
            dedicated to delivering insightful stories and high-quality content. 
            Our mission is to provide a seamless reading experience across all devices.
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
          <p className="text-gray-700 leading-relaxed">
            From breaking news to in-depth features, we cover a wide range of topics 
            with precision and creativity. We connect readers with meaningful content 
            that informs, inspires, and entertains.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-14"></div>

      {/* MISSION + VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To deliver trusted news and high-quality editorial content that engages 
            our global community.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become one of the most respected digital media brands by blending 
            creativity, journalism, and innovation.
          </p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-14"></div>

      {/* TEAM SECTION */}
      <h2 className="text-center text-3xl font-semibold mb-10">OUR TEAM</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {team.map((member, i) => (
          <div key={i}>
            <AuthorCard
              image={member.image}
              name={member.name}
              description={member.description}
            />
          </div>
        ))}
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-14"></div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="text-4xl font-bold text-gray-900">10+</h3>
          <p className="text-gray-600 mt-2">Years Experience</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-gray-900">500+</h3>
          <p className="text-gray-600 mt-2">Published Articles</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-gray-900">45K</h3>
          <p className="text-gray-600 mt-2">Happy Readers</p>
        </div>

      </div>
    </div>
  );
}
