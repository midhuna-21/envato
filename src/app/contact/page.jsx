import Link from "next/link";
import { Mail, MessageSquare, Briefcase, AlertCircle } from "lucide-react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const contacts = [
    {
      icon: MessageSquare,
      title: "News Tips & Press",
      description: "Share a confidential tip or story idea with our editorial team.",
      email: "tips@fiscalfusion.com"
    },
    {
      icon: AlertCircle,
      title: "Report a Correction",
      description: "Found an error in one of our articles? Help us maintain accuracy.",
      email: "corrections@fiscalfusion.com"
    },
    {
      icon: Mail,
      title: "General Questions & Feedback",
      description: "Share your thoughts or ask about the site. We read every message.",
      email: "contact@fiscalfusion.com"
    },
    {
      icon: Briefcase,
      title: "Advertising & Partnerships",
      description: "Interested in advertising or business collaborations? Reach out here.",
      email: "partners@fiscalfusion.com"
    }
  ];

  const socials = [
    { name: "Twitter", url: "#", icon: FaTwitter },
    { name: "LinkedIn", url: "#", icon: FaLinkedin },
    { name: "Instagram", url: "#", icon: FaInstagram }
  ];

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="mx-auto p-5 md:p-10  border-b border-gray-200 text-center">
            <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-1 md:mb-3 text-[#2f2f2f]">
            Get in Touch
        </h1>
   <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
          We'd love to hear from you. Whether it's a tip, feedback, or a story idea, 
          reach out and we'll get back to you promptly.
        </p>
      </div>

      {/* CONTACT CARDS */}
        <div className="max-w-6xl mx-auto px-6 md:py-10 py-5">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={`mailto:${item.email}`}
                className="group p-5 border border-gray-200 rounded-lg hover:border-gray-400 transition duration-300"
              >
                <Icon className="w-6 h-6 mb-1 text-gray-700 group-hover:text-black transition" />
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[11px] md:text-[15px] text-[#2f2f2f] leading-[1.3] tracking-tight font-serif">
                  {item.description}
                </p>
                <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">
                  {item.email}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <div className="h-px bg-gray-200"></div>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="max-w-5xl mx-auto px-4 text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4 md:mb-8">
          Connect with us
        </p>
        <div className="flex justify-center gap-3 md:gap-14">
          {socials.map((social, idx) => {
            const SocialIcon = social.icon;
            return (
              <a
                key={idx}
                href={social.url}
                aria-label={social.name}
                className="text-gray-600 hover:text-gray-900 transition text-xl md:text-2xl"
              >
                <SocialIcon />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
