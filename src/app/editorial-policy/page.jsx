export default function EditorialPolicyPage() {
  const sections = [
    {
      title: "Editorial Independence",
      text: "Our newsroom operates free from political, commercial, or personal influence. All editorial decisions are made independently.",
      icon: "fa-shield-alt",
    },
    {
      title: "Fact-Checking Standards",
      text: "Each article undergoes a multi-step verification process ensuring accuracy, credibility, and responsible sourcing.",
      icon: "fa-search",
    },
    {
      title: "Ethical Journalism",
      text: "We respect privacy, avoid sensationalism, and follow internationally recognized journalism ethics and best practices.",
      icon: "fa-balance-scale",
    },
    {
      title: "Transparency",
      text: "Mistakes are corrected promptly with clear notes. Updates and revisions are always documented.",
      icon: "fa-lightbulb",
    },
    {
      title: "Quality Review Process",
      text: "Content goes through writer review, editorial checks, senior approval, and layout inspection before publication.",
      icon: "fa-check-circle",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* TITLE */}
      <h1 className="text-center text-4xl font-bold tracking-wide text-gray-900">
        Editorial Policy
      </h1>

      {/* SUBTITLE */}
      <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 leading-relaxed">
        Our editorial standards uphold fairness, transparency, and
        responsibility—ensuring every article meets the highest quality.
      </p>

      {/* COLORED DIVIDER */}
      <div className="mt-8 w-20 h-1 bg-gray-800 mx-auto"></div>

      {/* GRID OF SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

        {sections.map((sec, i) => (
          <div
            key={i}
            className="border border-gray-200 shadow-sm rounded-lg p-8 bg-white hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded-full">
                <i className={`fa ${sec.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold">{sec.title}</h3>
            </div>

            <p className="text-gray-700 leading-relaxed">{sec.text}</p>
          </div>
        ))}

      </div>

      {/* CLOSING MESSAGE */}
      <div className="text-center mt-16 text-gray-600 max-w-xl mx-auto leading-relaxed">
        We continuously evolve our standards to maintain trust. Our editorial
        guidelines reflect our mission to deliver responsible, ethical, 
        and high-quality journalism.
      </div>
    </div>
  );
}
