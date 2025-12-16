import businessData from '../../public/data/business.json';
import politicsData from '../../public/data/politics.json';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-3 border-[#2f2f2f]">
      <div className='bg-[#2f2f2f] text-[#c1c0b4]'>
        <div className='border-t border-white'></div>
        <div className='py-6 md:py-16 px-6'>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 text-center ">
            <div>
              <span className="text-2xl font-semibold tracking-wide mb-2">ABOUT US</span>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mx-auto mb-6"></div>
              <p className="text-sm leading-[1.3] tracking-tight mb-3 font-serif">
                Fiscal Fusion brings you accurate, timely, and engaging news from around the world, keeping you informed and connected to the stories that matter most.   </p>
              <div className="space-y-3 text-sm font-serif">
                <div className="flex justify-center"><span>◆</span></div>
              </div>
            </div>

            {/* LATEST NEWS */}
            <div>
              <span className="text-2xl font-semibold tracking-wide mb-2">LATEST NEWS</span>
              <div className="w-12 h-[2px] bg-[#c1c0b4] mx-auto mb-6"></div>

              {[
                businessData[0], politicsData[0]
              ].map((item, i) => (
                <div key={i} className="mb-3 font-serif">
                  <p className="font-medium text-sm">{item.date}</p>
                  <Link href={`/${item.category}/${item.slug}`} className="text-decoration-none hover:underline" aria-label={item.title} title={item.title}>
                    <p className="text-sm mt-1 leading-[1.3] tracking-tight">{item.title}</p>
                  </Link>
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
      </div>

      <div className="border-t border-[#7c7c79] text-center text-[10px] text-[#c1c0b4] bg-[#2f2f2f]">
        <div className='border-t-2 border-[#7c7c79] mt-0.5 p-3'>
          <div className="text-center text-[8px] md:text-[10px] text-[#c1c0b4] mb-3">
            <div className="flex justify-center flex-wrap gap-2 md:gap-4 lowercase font-serif">
              <Link href="/about" title='about' aria-label="about" className="hover:underline uppercase">about</Link>
              <Link href="/contact" title='contact' aria-label="contact" className="hover:underline uppercase">contact</Link>
              <Link href="/editorial-policy" title='editorial-policy' aria-label="editorial-policy" className="hover:underline uppercase">editorial policy</Link>
              <Link href="/correction-policy" title='correction-policy' aria-label="correction-policy" className="hover:underline uppercase">correction policy</Link>
              <Link href="/our-team" title='our-team' aria-label="our-team" className="hover:underline uppercase">our team</Link>
              <Link href="/faq" title='faq' aria-label="faq" className="hover:underline uppercase">faq</Link>
              <Link href="/terms-and-conditions" title='terms-and-conditions' aria-label="terms-and-conditions" className="hover:underline uppercase">Terms and conditions</Link>
            </div>
          </div>
          <p className='text-[8px] md:text-[10px]'>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
