"use client";
import { useState } from "react";
import Link from "next/link";

export default function FaqSection() {
  const faqs = [
    {
      question: "What type of news does Fiscal Fusion cover?",
      answer:
        "Fiscal Fusion delivers fast, reliable coverage across U.S. News, World News, Politics, Business, Finance, Sports, Entertainment, and major global developments. Our focus is clarity, accuracy, and helping readers understand the stories that matter.",
    },
    {
      question: "Are Fiscal Fusion articles fact-checked?",
      answer:
        "Yes. Every report goes through a strict verification process. Our team follows transparent sourcing, cross-checks information, and ensures that all business, financial, and global updates meet our editorial standards.",
    },
    {
      question: "How often is the website updated?",
      answer:
        "Fiscal Fusion is updated throughout the day with breaking news, developing stories, and in-depth explainers. Major categories like U.S. News, World News, Business, Finance and Politics receive real-time updates.",
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
      question: "How do I contact the Fiscal Fusion editorial team?",
      answer: (
        <>
          You can reach out to our editorial team anytime through our{" "}
          <Link title="contact" href="/contact" aria-label="contact" className="text-blue-600 underline">
            Contact Page
          </Link>
          .
        </>
      ),
    }


  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-h-[900px] mx-auto h-full">
      <section className="p-5 md:p-10  border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            FAQ
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            Your guide to how Fiscal Fusion reports, verifies, and publishes the news — clearly explained in one place.

          </p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-6 mt-10 md:mt-12">
        {faqs.map((item, i) => (
          <div
            key={i}
            onClick={() => toggleFAQ(i)}
            className="mb-8 md:mb-10 cursor-pointer select-none"
          >
            <div className="h-[1.3px] bg-gray-700 w-full"></div>
            <div className="-mt-2 flex justify-center">
              <div className="w-3 h-3 bg-gray-800 rotate-45"></div>
            </div>
            <h3 className="text-[15px] md:text-[18px] font-medium mt-1 text-[#2f2f2f] tracking-tight">
              {item.question}
            </h3>
            <div className="mt-2 h-[1.3px] bg-gray-700 w-full"></div>
            {openIndex === i && (
              <p className="text-[#2f2f2f] font-serif text-[11px] md:text-[15px] leading-[1.3] tracking-tight mt-3">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
