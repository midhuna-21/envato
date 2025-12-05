import businessData from '../../public/data/business.json';
import politicsData from '../../public/data/politics.json';
import sportsData from '../../public/data/sports.json';
import usData from '../../public/data/us.json';
import { FaTwitter, FaFacebookF, FaSkype, FaRss, FaInstagram } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="border-t-3 border-[#2f2f2f]">
      {/* CENTERED GRID WRAPPER */}
      <div className='bg-[#2f2f2f] text-[#c1c0b4]'>
        <div className='border-t border-white'></div>
        <div className=' py-16 px-6'>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center ">

            {/* ABOUT US */}
            <div>
              <h3 className="text-2xl font-semibold tracking-wide mb-2">ABOUT US</h3>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mx-auto mb-6"></div>

              <p className="text-sm leading-relaxed mb-3 font-serif">
               Bringing you accurate, timely, and engaging news from around the world, keeping you informed and connected to the stories that matter most.
              </p>

              <div className="space-y-3 text-sm font-serif">
                <div className="flex justify-center"><span>◆</span></div>

                {/* <p>
                  250 Biscayne Blvd. 11st Floor New<br />
                  World Tower Miami, 33148
                </p>

                <div className="flex justify-center"><span>◆</span></div>

                <p>
                  (305) 555-5522<br />
                  mail@mail.com<br />
                  www.yoursite.com
                </p>

                <div className="flex justify-center"><span>◆</span></div> */}

                {/* Social Icons */}
                <div className="flex justify-center gap-4 pt-2">
                  {[FaTwitter, FaFacebookF, FaSkype, FaRss, FaInstagram].map((Icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 border cursor-pointer border-gray-300 transform rotate-45 flex items-center justify-center"
                    >
                      <Icon className="-rotate-45 text-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>



            {/* LATEST NEWS */}
            <div>
              <h3 className="text-2xl font-semibold tracking-wide mb-2">LATEST NEWS</h3>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mx-auto mb-6"></div>

              {[
               businessData[0],politicsData[0]
              ].map((item, i) => (
                <div key={i} className="mb-3 font-serif">
                  <p className="font-medium text-sm">{item.date}</p>
                  <p className="text-sm mt-1">{item.title}</p>
                  {i !== 1 && (
                    <div className="mt-3">
                      <span>◆</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* COPYRIGHT SECTION */}
      </div>
      <div className="border-t border-[#7c7c79] text-center text-sm text-[#c1c0b4] bg-[#2f2f2f]">
        <div className='border-t-2 border-[#7c7c79] mt-0.5 p-5'>

          Copyright © 2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
