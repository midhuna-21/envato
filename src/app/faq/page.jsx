"use client";
import { useState } from "react";

export default function FaqSection() {
const faqs = [
  {
    question: "What type of news does FiscalFusion cover?",
    answer:
      "FiscalFusion delivers fast, reliable coverage across U.S. News, Politics, Business, Finance, Sports, Entertainment, and major global developments. Our focus is clarity, accuracy, and helping readers understand the stories that matter.",
  },
  {
    question: "Are FiscalFusion articles fact-checked?",
    answer:
      "Yes. Every report goes through a strict verification process. Our team follows transparent sourcing, cross-checks information, and ensures that all political, financial, and global updates meet our editorial standards.",
  },
  {
    question: "How often is the website updated?",
    answer:
      "FiscalFusion is updated throughout the day with breaking news, developing stories, and in-depth explainers. Major categories like U.S. News, Politics, and Business receive real-time updates.",
  },
  {
    question: "Can I trust your financial and business reporting?",
    answer:
      "Absolutely. Our business and finance coverage is written by experienced correspondents who focus on market trends, economic shifts, and practical insights that help readers stay informed about the evolving financial landscape.",
  },
  {
    question: "Do you offer entertainment and sports news as well?",
    answer:
      "Yes. Along with serious reporting, we also cover trending entertainment stories, celebrity updates, cultural moments, sports highlights, and major events across leagues and tournaments.",
  },
  {
    question: "How do I contact the FiscalFusion editorial team?",
    answer:
      "You can reach our newsroom anytime through the contact form on the Contact Us page. We welcome feedback, corrections, news tips, and general inquiries.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
   <div className="min-h-screen bg-white">

        {/* HERO SECTION */}
        <section className="p-5 md:p-10  border-b border-gray-200">
            <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
         FAQ
            </h1>
            <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
       Your guide to how FiscalFusion reports, verifies, and publishes the news — clearly explained in one place.
            </p>
          </div>
   </section>

    {/* FAQ LIST */}
<section className="max-w-3xl mx-auto px-6 mt-10 md:mt-16">

  {faqs.map((item, i) => (
    <div
      key={i}
      onClick={() => toggleFAQ(i)}
      className="mb-8 md:mb-14 cursor-pointer select-none"
    >

      {/* TOP LINE */}
      <div className="h-[1.5px] bg-gray-700 w-full"></div>

      {/* DIAMOND */}
      <div className="-mt-3 flex justify-center">
        <div className="w-4 h-4 bg-gray-800 rotate-45"></div>
      </div>

      {/* QUESTION */}
     <h2 className="text-base md:text-xl font-medium mt-2 text-[#2f2f2f] tracking-tight">
  {item.question}
</h2>

      {/* BOTTOM LINE */}
      <div className="mt-4 h-[1.5px] bg-gray-700 w-full"></div>

      {/* ANSWER */}
      {openIndex === i && (
        <p className="text-[#2f2f2f] font-serif text-[13px] md:text-[15px] leading-[1.5] tracking-tight mt-6 px-2 md:px-4">
          {item.answer}
        </p>
      )}

    </div>
  ))}

</section>

    </div>
  );
}
