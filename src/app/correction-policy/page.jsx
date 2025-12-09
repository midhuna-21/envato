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
   <div className="min-h-screen bg-white ">

      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-10 p-5 md:p-10  border-b border-gray-200">
         <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Correction Policy
        </h1>
        <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
          FiscalFusion is committed to accuracy, fairness, and transparency in reporting. 
          If you spot an error in any of our articles, we encourage you to inform us promptly. 
          Our editorial team reviews every correction request to ensure clarity and integrity.
        </p>
      </div>

      {/* POLICY DETAILS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10  px-6 ">
        <div className="flex flex-col gap-2 md:gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2f2f2f]">
            How We Handle Corrections
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] font-serif">
            When a correction is reported or discovered, our editorial team investigates 
            the claim carefully. If an error is confirmed, the article is updated promptly 
            with a clear notice describing the change. Our goal is to maintain trust by 
            ensuring our reporting remains accurate and reliable.
          </p>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] font-serif">
            Corrections may involve facts, figures, quotes, or context that require clarification. 
            We strive to address all legitimate concerns as transparently as possible.
          </p>
        </div>

        <div className="flex flex-col gap-">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2f2f2f] mb-2">
            Reporting a Correction
          </h2>
          <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] font-serif">
            To report a correction, please send us a detailed message including:
          </p>
          <ul className="list-disc list-inside text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] font-serif mb-2">
            <li>The article title or link</li>
            <li>Details of the error</li>
            <li>Correct information or sources, if available</li>
          </ul>
          <Link
            href="/contact"
            className="text-gray-900 text-sm font-medium underline underline-offset-4 hover:opacity-70 transition duration-200"
          >
            Contact Us to Report →
          </Link>
        </div>
      </div>

  
      {/* CLOSING */}
      <div className="max-w-4xl mx-auto text-center py-5 md:py-10 px-6">
        <p className="text-[11px] md:text-[14px] text-[#2f2f2f] leading-[1.3] font-serif">
          At FiscalFusion, accuracy is our priority. We value reader feedback and encourage 
          anyone who notices a mistake to reach out. Together, we ensure trustworthy journalism.
        </p>
      </div>

    </div>
  );
}
