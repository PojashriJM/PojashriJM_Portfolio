import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    {
      icon: <IoMdMail />,
      label: "Email",
      value: "pojashrijm2006@gmail.com",
      href: "mailto:pojashrijm2006@gmail.com",
      iconBg: "bg-pink-100 dark:bg-pink-900/40",
      iconColor: "text-[#C43C88]",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/PojashriJM",
      href: "https://github.com/PojashriJM",
      iconBg: "bg-gray-100 dark:bg-gray-800",
      iconColor: "text-gray-700 dark:text-gray-300",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/poja-shri-jm",
      href: "https://www.linkedin.com/in/poja-shri-jm/",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      iconColor: "text-blue-700 dark:text-blue-400",
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      value: "leetcode.com/u/PojashriJM",
      href: "https://leetcode.com/u/PojashriJM/",
      iconBg: "bg-orange-100 dark:bg-orange-900/40",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      {/* Section heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#C43C88] dark:text-[#E164A8] mb-12">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-pink-100 dark:border-pink-900/30">

        {/* ── Left Panel ── */}
        <div className="relative bg-gradient-to-br from-pink-100 via-purple-50 to-violet-100 dark:from-[#2a0a1a] dark:via-[#1a0a2e] dark:to-[#150820] p-8 md:p-10">

          {/* Glassmorphism inner card */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/70 dark:border-white/10 rounded-2xl p-6 mb-6">

            {/* Avatar + name + status */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C43C88] to-[#a855f7] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                PS
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  Pojashri J M
                </p>
                {/* Availability badge */}
                <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              AI & Data Science student based in Chennai. Let's build something together.
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-2">
            {socialLinks.map(({ icon, label, value, href, iconBg, iconColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:translate-x-1.5 transition-all duration-200 hover:bg-white/40 dark:hover:bg-white/5 group"
              >
                {/* Colored icon box */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg ${iconBg} ${iconColor} transition-transform duration-200 group-hover:scale-110`}>
                  {icon}
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-200 leading-none mb-0.5">
                    {label}
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Right Panel — Form ── */}
        <div className="bg-white dark:bg-[#1a0814] p-8 md:p-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Send a message
          </h3>

          <form className="space-y-4">

            {/* Name + Email in a row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C43C88]/40 focus:border-[#C43C88] transition"
                />
              </div>
              <div>
                <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C43C88]/40 focus:border-[#C43C88] transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Subject
              </label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C43C88]/40 focus:border-[#C43C88] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-gray-50 dark:bg-white/5 h-36 resize-none text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C43C88]/40 focus:border-[#C43C88] transition"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C43C88] to-[#a855f7] hover:from-[#a92f73] hover:to-[#9333ea] text-white py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-pink-300/40 dark:hover:shadow-pink-900/40 hover:-translate-y-0.5"
            >
              Send message
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}