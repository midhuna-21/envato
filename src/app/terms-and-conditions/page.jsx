import Link from "next/link";
import React from "react";

export default function TermsPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        "These Terms & Conditions govern your access to and use of Fiscal Fusion, a digital news platform covering finance, business, world affairs, U.S. politics, markets, and related topics. By visiting or using our website, you agree to abide by these terms."
    },
    {
      title: "Use of Content",
      content:
        "All articles, graphics, photographs, videos, and other materials published on Fiscal Fusion are protected by copyright and may not be copied, reproduced, or redistributed without written permission. You may, however, share article links for personal and non-commercial use."
    },
    {
      title: "Accuracy of Information",
      content:
        "While we strive to provide accurate, verified, and timely news, Fiscal Fusion does not guarantee that all information is completely error-free. Content may be updated, corrected, or modified without prior notice."
    },
    {
      title: "User Responsibilities",
      content:
        "Users must not misuse the site by attempting unauthorized access, distributing harmful content, or interfering with the website’s functionality. Comments, tips, or submissions should not include unlawful, defamatory, or false information."
    },
    {
      title: "External Links",
      content:
        "Our articles may include links to third-party websites. Fiscal Fusion is not responsible for the accuracy, privacy practices, or content of any external sites."
    },
    {
      title: "Data & Privacy",
      content:
        "We may collect limited personal data to enhance user experience and website functionality. All data is handled in accordance with our Privacy Policy. We do not sell or share personal information with advertisers."
    },
    {
      title: "Editorial Independence",
      content:
        "Fiscal Fusion maintains strict editorial independence. Our reporting is not influenced by advertisers, investors, or external groups. Opinions expressed in analysis or commentary pieces belong solely to the respective authors."
    },
    {
      title: "Limitation of Liability",
      content:
        "Fiscal Fusion is not liable for any financial, trading, or personal decisions made based on the information provided on our site. All content is for general informational purposes and should not be considered investment or legal advice."
    },
    {
      title: "Changes to Terms",
      content:
        "We may update these Terms & Conditions at any time. Continued use of the website indicates acceptance of the revised terms."
    },
    {
      title: "Contact Us",
      content: (
        <>
          For questions regarding these Terms & Conditions, email us at:{" "}
          <Link
            title="mail"
            aria-label="mail"
            href="mailto:team@fiscalfusion.org"
            className="underline text-gray-900 hover:text-black transition"
          >
            team@fiscalfusion.org
          </Link>
        </>
      )
    }

  ];

  return (
    <div className="min-h-screen">
      <div className="mx-auto p-5 md:p-10 border-b border-gray-200 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
          Terms & Conditions
        </h2>
        <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif max-w-2xl mx-auto">
          Please read our terms carefully. By accessing Fiscal Fusion, you agree to follow the guidelines and policies
          outlined below.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:py-10 py-5">
        <div className="flex flex-col gap-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="p-5 border border-gray-200 rounded-lg hover:border-gray-400 transition duration-300"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {section.title}
              </h3>
              <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
