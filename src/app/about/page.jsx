import Link from "next/link";
import { Zap, Users, Target, Eye } from "lucide-react";

export default function AboutPage() {
  const sections = [
    {
      title: "Who We Are",
      icon: Users,
      content:
        "Fiscal Fusion is powered by a dedicated team of journalists, editors, and storytellers who believe in transparent, fact-driven reporting. We cover U.S. news with depth and integrity, ensuring every story meets the highest editorial standards.",
      cta: true,
    },
    {
      title: "What We Do",
      icon: Zap,
      content:
        "We provide comprehensive coverage across business, politics, finance, sports, world news, and entertainment. From breaking updates to in-depth analysis, Fiscal Fusion delivers news that informs, engages, and builds trust with every reader.",
      cta: false,
    },
  ];

  const values = [
    {
      title: "Our Mission",
      icon: Target,
      content:
        "Our mission is to offer credible, accessible, and timely journalism that empowers readers to understand the world around them. We aim to make news simple, clear, and reliable — without noise or bias.",
    },
    {
      title: "Our Vision",
      icon: Eye,
      content:
        "Our vision is to become a leading digital news destination recognized for transparency, quality reporting, and strong editorial values. Fiscal Fusion strives to be the place readers turn to for trustworthy U.S. and global news.",
    },
  ];

  return (
    <div className="max-h-[900px] mx-auto h-full">
      <section className="p-5 md:p-10  border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            About Us
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            A modern U.S. news platform dedicated to fast, accurate, and unbiased
            reporting. We simplify complex issues and deliver journalism that informs,
            empowers, and builds trust.
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 md:py-10 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <Icon className="w-6 h-6 text-[#2f2f2f]" />
                  <h3 className="text-xl md:text-2xl font-semibold text-[#2f2f2f]">
                    {section.title}
                  </h3>
                </div>
                <p className="text-gray-[#2f2f2f2] mb-3 md:mb-6 flex-grow text-[11px] md:text-[15px] leading-[1.3] tracking-tight font-serif">
                  {section.content}
                </p>
                {section.cta && (
                  <Link
                    title={section.title}
                    aria-label={section.title}
                    href="/contact"
                    className="text-gray-900 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition duration-200"
                  >
                    Get in Touch →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <section className="bg-[#fafafa]  border-y border-gray-200 ">
        <div className="max-w-6xl mx-auto py-8 p-5 md:p-10 mb-10  grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <Icon className="w-7 h-7 text-[#2f2f2f] mt-1" />
                  <h3 className="text-3xl font-semibold text-[#2f2f2f] ">
                    {value.title}
                  </h3>
                </div>
                <p className="text-[#2f2f2f] text-[11px] md:text-[13px] leading-[1.3] tracking-tight font-serif">
                  {value.content}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
