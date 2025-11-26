export default function CorrectionPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 font-[Georgia] text-gray-800">

      {/* TITLE */}
      <h1 className="text-5xl font-bold text-center mb-3 tracking-wide">
        Correction Policy
      </h1>

      {/* SUBTITLE */}
      <p className="text-center text-gray-500 text-lg mb-10 italic">
        Maintaining accuracy, transparency, and trust with our readers.
      </p>

      {/* TOP LINE */}
      <div className="border-t border-gray-300 mb-10"></div>

      {/* CONTENT */}
      <div className="space-y-8 leading-relaxed text-lg">

        <section>
          <h2 className="text-2xl font-semibold mb-2">Why Corrections Matter</h2>
          <p>
            Accuracy is central to our mission. When inaccuracies occur, we
            correct them quickly and clearly. Every correction strengthens the
            trust between our publication and our readers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">How We Identify Errors</h2>
          <p>
            Errors may be flagged internally, discovered during post-review,
            or brought to our attention by readers. Each flagged item is
            evaluated by our editorial team.
          </p>
        </section>

        <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-6">
          “Transparency is not optional — it is a responsibility.”
        </blockquote>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Correction Process</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Review the reported issue</li>
            <li>Verify facts and sources</li>
            <li>Update the article with corrected information</li>
            <li>Add a visible correction note with details</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Reader Submissions</h2>
          <p>
            Readers can report inaccuracies through our contact page. Each
            report is reviewed within 48 hours.
          </p>
        </section>

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-300 mt-12"></div>
    </div>
  );
}
