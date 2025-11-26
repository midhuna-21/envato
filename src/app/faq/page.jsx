"use client";
import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "Sed ac nibh id lectus tincidunt vulputate ullamcorper in dui.",
      answer:
        "Vestibulum eget odio a tortor dignissim laoreet sed ac erat. Aenean egestas ultrices turpis, et egestas lectus rhoncus vel. Curabitur mattis nibh in turpis imperdiet rutrum. Pellentesque elementum urna malesuada, dignissim massa vel, mollis leo. Ut purus nisl, hendrerit et aliquam vitae, elementum ut arcu. Ut sit amet mattis mi. Vestibulum vel aliquet sapien.",
    },
    {
      question: "Proin feugiat tellus nisl, ut elementum metus tincidunt nec.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet diam id lacus facilisis sodales.",
    },
    {
      question: "In et pretium sem. Integer gravida enim a lacus ullamcorper venenatis.",
      answer:
        "Donec vehicula justo non lacinia suscipit. Vivamus id dui sapien. Pellentesque dapibus tellus at urna tincidunt, in posuere risus maximus.",
    },
    {
      question: "Etiam eget lorem commodo, sodales neque ac, dignissim nunc.",
      answer:
        "Integer lacinia tellus nec mauris faucibus condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      question: "Donec pretium tortor quis magna iaculis lobortis.",
      answer:
        "Mauris gravida tortor id sapien consectetur, vitae ultrices leo volutpat.",
    },
    {
      question: "Pellentesque eget odio a tortor dignissim laoreet sed ac erat.",
      answer:
        "Suspendisse malesuada pretium orci sed posuere. Sed nisi orci, facilisis vel scelerisque sollicitudin, vestibulum justo.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 text-center">
      
      {/* FAQ TITLE */}
      <h1 className="text-4xl font-semibold mb-6">FAQ</h1>

      {/* INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-8">
        Vestibulum id nisl a neque malesuada hendrerit. Mauris ut porttitor nunc, ut volutpat nisl.
        Nam ullamcorper ultricies metus vel ornare. Vivamus tincidunt erat in mi accumsan.
      </p>

      {/* FIRST TOP DIAMOND */}
      <div className="flex justify-center my-6">
        <div className="w-4 h-4 bg-gray-800 rotate-45"></div>
      </div>

      {/* FAQ LIST */}
      {faqs.map((item, i) => (
        <div key={i} className="my-10 cursor-pointer select-none" onClick={() => toggleFAQ(i)}>
          
          {/* TOP LINE */}
          <div className="h-[2px] bg-gray-600 w-full"></div>

          {/* DIAMOND */}
          <div className="-mt-3 flex justify-center">
            <div className="w-4 h-4 bg-gray-800 rotate-45"></div>
          </div>

          {/* QUESTION */}
          <h2 className="text-xl font-medium mt-4">
            {item.question}
          </h2>

          {/* BOTTOM LINE */}
          <div className="mt-4 h-[2px] bg-gray-600 w-full"></div>

          {/* ANSWER (TOGGLE OPEN) */}
          {openIndex === i && (
            <p className="text-gray-700 leading-relaxed mt-6 px-4">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
