import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaMedium, FaRss, FaSkype, FaTwitter, FaUser } from "react-icons/fa";
import SubstackIconBlack from "./SubstackIconBlack";

export default function NewsArticle({ article }) {
  const sentences = article.description.split(". ");
  const chunkSize = Math.ceil(sentences.length / 4);
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += chunkSize) {
    paragraphs.push(sentences.slice(i, i + chunkSize).join(". ") + ".");
  }

  return (
    <div className="mx-auto">
      <div className="relative w-full h-80 md:h-150 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-2xl md:text-[32px] text-[#2f2f2f] font-normal hover:underline max-w-[750px] mt-6 leading-[1.1] tracking-tight">
        {article.title}
      </h1>

      <div className="text-[#2f2f2f] mt-2 space-x-3 font-serif text-[12px] flex flex-wrap justify-center items-center">
        <FaUser className="text-[#333] text-[14px]" />
        <span>By {article.author.name}</span>
        <span className="text-[#ccc]">|</span>
        <span>{article.date}</span>
      </div>

      <div className="mt-4 space-y-5 text-[#2f2f2f] text-[12px] md:text-[15px] font-serif leading-[1.3] tracking-tight">
        {paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>

      <div className="flex items-center justify-between pt-0.5 border-t border-[#2f2f2f] border-b mt-10 pb-2 pt-2">
        <div className="flex items-center gap-3 text-[14px] text-[#2f2f2f]">
          <span className="font-normal font-serif">SHARE ON:</span>
          {/* <Link 
  href={article.author.twitter} 
  target="_blank" 
  rel="noopener noreferrer"
  className="no-underline"
>
  <FaTwitter className="cursor-pointer" />
</Link> */}
          <Link
          title="facebook"
            href={article.author.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <FaFacebookF className="cursor-pointer" />
          </Link>

          <Link
          title="instagram"
            href={article.author.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <FaInstagram className="cursor-pointer" />
          </Link>
          <Link
          title="medium"
            href={article.author.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <FaMedium className="cursor-pointer" />
          </Link>

          <Link
          title="substack"
            href={article.author.substack}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <SubstackIconBlack className="text-black w-6 h-6" />
          </Link>
        </div>
      </div>
      <div className="border mt-0.5 mb-8"></div>
    </div>
  );
}
