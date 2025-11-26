import businessData from '../../public/data/business.json';
import politicsData from '../../public/data/politics.json';
import sportsData from '../../public/data/sports.json';
import healthData from '../../public/data/health.json';

export default function Footer() {
  return (
    <footer className="bg-[#2f2f2f] text-gray-200 py-16 px-6">
      {/* CENTERED GRID WRAPPER */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* ABOUT US */}
        <div>
          <h3 className="text-2xl font-semibold tracking-wide mb-2">ABOUT US</h3>
          <div className="w-12 h-[1px] bg-gray-400 mx-auto mb-6"></div>

          <p className="text-sm leading-relaxed mb-6">
            Donec ac dapibus elit. Proin facilisis nulla in est mattis,
            ut dapibus justo euismod. Proin sollicitudin a mi vel fermentum.
            Phasellus aliquam sollicitudin.
          </p>

          <div className="space-y-6 text-sm">
            <div className="flex justify-center"><span>◆</span></div>

            <p>
              250 Biscayne Blvd. 11st Floor New<br />
              World Tower Miami, 33148
            </p>

            <div className="flex justify-center"><span>◆</span></div>

            <p>
              (305) 555-5522<br />
              mail@mail.com<br />
              www.yoursite.com
            </p>

            <div className="flex justify-center"><span>◆</span></div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 pt-2">
              {[
                "fa fa-twitter",
                "fa fa-facebook",
                "fa fa-skype",
                "fa fa-rss",
                "fa fa-instagram",
              ].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border border-gray-300 transform rotate-45 flex items-center justify-center"
                >
                  <i className={`${icon} text-lg -rotate-45`}></i>
                </div>
              ))}
            </div>
          </div>
        </div>

      

        {/* LATEST NEWS */}
        <div>
          <h3 className="text-2xl font-semibold tracking-wide mb-2">LATEST NEWS</h3>
          <div className="w-12 h-[1px] bg-gray-400 mx-auto mb-6"></div>

          {[
            {
              date: "31 December, 2014",
              text: "Vivamus massa urna, feugiat et sapien at, volutpat convallis arcu.",
            },
            {
              date: "02 November, 2014",
              text: "Maecenas mollis turpis at sagittis sodales. Phasellus nec commodo.",
            },
            {
              date: "25 October, 2014",
              text: "Morbi luctus, arcu non aliquet lobortis, nisl dui ultrices arcu.",
            },
            {
              date: "13 October, 2014",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ].map((item, i) => (
            <div key={i} className="mb-6">
              <p className="font-medium text-sm">{item.date}</p>
              <p className="text-sm mt-1">{item.text}</p>
              {i !== 3 && (
                <div className="mt-3">
                  <span>◆</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* COPYRIGHT SECTION */}
      <div className="mt-16 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        Copyright © 2014. All rights reserved.
      </div>
    </footer>
  );
}
