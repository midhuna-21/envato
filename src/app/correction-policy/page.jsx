import Link from "next/link";

export default function CorrectionPolicyPage() {
  const categories = [
    "Politics",
    "Business",
    "Finance",
    "World",
    "U.S.",
    "Entertainment",
    "Sports",
  ];

  return (
    <div className="max-h-[900px] mx-auto h-full">

      {/* HERO SECTION */}
      <section className="p-5 md:p-10  border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Correction Policy
          </h1>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            At Fiscal Fusion, accuracy is our priority. We value reader feedback and encourage anyone who notices a mistake to reach out. Together, we ensure trustworthy journalism.
          </p>
        </div>
      </section>


      {/* POLICY DETAILS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  px-6 mb-10 md:py-10 py-5 ">
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2f2f2f]">
            How We Handle Corrections
          </h2>
          <p className="text-[11px] md:text-[15px] leading-[1.3] tracking-tight text-[#2f2f2f] font-serif">
            When a correction is reported or discovered, our editorial team investigates
            the claim carefully. If an error is confirmed, the article is updated promptly
            with a clear notice describing the change. Our goal is to maintain trust by
            ensuring our reporting remains accurate and reliable.
          </p>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            Corrections may involve facts, figures, quotes, or context that require clarification.
            We strive to address all legitimate concerns as transparently as possible.
          </p>
        </div>

        <div className="flex flex-col gap-">
          <h2 className="text-xl md:text-2xl font-semibold text-[#2f2f2f] mb-2">
            Reporting a Correction
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
            To report a correction, please send us a detailed message including:
          </p>
          <ul className="list-disc list-inside text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif mb-2">
            <li>The article title or link</li>
            <li>Details of the error</li>
            <li>Correct information or sources, if available</li>
          </ul>
          <Link
          title="contact"
            href="/contact"
            className="text-gray-900 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition duration-200"
          >
            Contact Us to Report →
          </Link>
        </div>
      </div>


      {/* CLOSING */}
      {/* <div className="max-w-4xl mx-auto text-center py-5 md:py-10 px-6">
        <p className="text-[11px] md:text-[14px] text-[#2f2f2f] leading-[1.3] font-serif">
          At Fiscal Fusion, accuracy is our priority. We value reader feedback and encourage 
          anyone who notices a mistake to reach out. Together, we ensure trustworthy journalism.
        </p>
      </div> */}

    </div>
  );
}
