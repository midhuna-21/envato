import Link from "next/link";
import { CheckCircle, Eye, Zap, BookOpen, MessageSquare } from "lucide-react";

export default function EditorialPolicyPage() {
  const sections = [
    {
      title: "Our Commitment",
      icon: CheckCircle,
      content:
        "Fiscal Fusion is committed to delivering accurate, fair, and unbiased journalism. We adhere to high editorial standards to ensure that our reporting is reliable and trustworthy. Our goal is to inform and empower readers with clear and factual news.",
    },
    {
      title: "Accuracy & Verification",
      icon: Zap,
      content:
        "All articles are fact-checked, and sources are verified before publication. In cases where errors occur, we promptly issue corrections with a clear notice describing the change. Our goal is to maintain trust by ensuring accurate reporting across all news categories.",
    },
    {
      title: "Transparency",
      icon: Eye,
      content:
        "We are transparent about our sources, methodology, and any potential conflicts of interest. Editorial decisions are made independently, free from influence by advertisers or external parties. Readers have the right to understand how news is gathered and reported.",
    },
    {
      title: "Ethical Reporting",
      icon: BookOpen,
      content:
        "We follow strict ethical guidelines in reporting, respecting privacy, avoiding sensationalism, and ensuring fairness. Our journalists are trained to cover stories responsibly while upholding integrity and professionalism.",
    },
    {
      title: "Corrections & Feedback",
      icon: MessageSquare,
      content:
        "Readers are encouraged to notify us about any errors or discrepancies. We review all feedback carefully and correct mistakes promptly.",
      cta: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <section className="p-5 md:p-10  border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
             Editorial Policy
          </h1>
            <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            Fiscal Fusion maintains the highest standards of journalism. Our editorial 
            policy ensures that every article we publish is accurate, transparent, 
            and ethical.
          </p>
        </div>
      </section>

      {/* POLICY SECTIONS */}
   {/* POLICY SECTIONS - Improved Design */}
<section className="max-w-5xl mx-auto px-6 md:py-12 py-6 space-y-7">
  {sections.map((section, idx) => {
    const Icon = section.icon;
    return (
      <div key={idx} className="flex flex-col md:flex-row items-start gap-6 md:gap-8 bg-[#f9f9f9] p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        
        {/* ICON */}
        <div className="flex-shrink-0 bg-[#2f2f2f] text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>

        {/* CONTENT */}
        <div className="flex-grow">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2f2f2f] mb-2">
            {section.title}
          </h2>
          <p className=" text-[#4a4a4a] text-[11px] md:text-[15px] leading-[1.3] tracking-tight font-serif">
            {section.content}
          </p>

         
        </div>
      </div>
    );
  })}
</section>


      {/* PRINCIPLES GRID */}
      {/* <section className="bg-gray-50 py-10 ">
        <div className="max-w-5xl mx-auto px-4 mb-5 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-light text-center mb-5 md:mb-10 text-gray-900">
            Core Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: "Independence", desc: "Free from external influence and advertiser pressure" },
              { title: "Accountability", desc: "We stand behind our reporting and correct errors promptly" },
              { title: "Fairness", desc: "All sides of a story are represented respectfully" },
              { title: "Clarity", desc: "Complex news is explained in accessible language" },
            ].map((principle, idx) => (
              <div key={idx} className="p-8 bg-white rounded-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {principle.title}
                </h3>
                <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </div>
  );
}