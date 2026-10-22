"use client";
import { IoMdMail } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.current || isSending) return;

    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing.");
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      );

      setSuccessMessage(
        "Message sent successfully! Thank you for reaching out. I will get back to you as soon as possible."
      );

      form.current.reset();

      window.setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Email sending failed:", error);

      setErrorMessage(
        "Sorry, your message could not be sent. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      icon: <IoMdMail />,
      label: "Email",
      value: "pojashrijm2006@gmail.com",
      href: "mailto:pojashrijm2006@gmail.com",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
      iconColor: "text-[#0E7C86] dark:text-[#22D3EE]",
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
    <section
      id="contact"
      className="px-6 py-16 max-w-6xl mx-auto"
    >
      {/* Section heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#12181B] dark:text-[#E7F6F8] mb-12">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl border border-[rgba(18,24,27,0.10)] dark:border-[rgba(231,246,248,0.08)]">
        {/* Left Panel */}
        <div className="relative bg-gradient-to-br from-cyan-50 via-sky-50 to-teal-50 dark:from-[#0A1A1E] dark:via-[#0A1620] dark:to-[#081015] p-8 md:p-10">
          {/* Profile card */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/70 dark:border-white/10 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0E7C86] to-[#22D3EE] flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                PS
              </div>

              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  Pojashri J M
                </p>

                <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              AI & Data Science student based in Chennai.
              Let&apos;s build something together.
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-2">
            {socialLinks.map(
              ({
                icon,
                label,
                value,
                href,
                iconBg,
                iconColor,
              }) => (
                <a
                  key={label}
                  href={href}
                  target={
                    href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-3 p-3 rounded-xl hover:translate-x-1.5 transition-all duration-200 hover:bg-white/40 dark:hover:bg-white/5 group"
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-lg ${iconBg} ${iconColor} transition-transform duration-200 group-hover:scale-110`}
                  >
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
              )
            )}
          </div>
        </div>

        {/* Right Panel: Contact Form */}
        <div className="bg-white dark:bg-[#131E24] p-8 md:p-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Send a message
          </h3>

          {/* Success message */}
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-cyan-200 dark:border-cyan-800/50 bg-cyan-50 dark:bg-cyan-900/20 p-4"
              role="status"
              aria-live="polite"
            >
              <p className="text-sm text-[#0E7C86] dark:text-cyan-300">
                {successMessage}
              </p>
            </motion.div>
          )}

          {/* Error message */}
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 rounded-xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/20 p-4"
              role="alert"
            >
              <p className="text-sm text-red-700 dark:text-red-300">
                {errorMessage}
              </p>
            </motion.div>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="from_name"
                  className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500"
                >
                  Name
                </label>

                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE] transition"
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500"
                >
                  Email
                </label>

                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  placeholder="you@email.com"
                  required
                  maxLength={254}
                  autoComplete="email"
                  className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE] transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                required
                minLength={3}
                maxLength={150}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE] transition"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                required
                minLength={10}
                maxLength={5000}
                className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-gray-50 dark:bg-white/5 h-36 resize-none text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#22D3EE]/40 focus:border-[#22D3EE] transition"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-gradient-to-r from-[#0E7C86] to-[#22D3EE] hover:from-[#0B646C] hover:to-[#67E4F4] text-white py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-cyan-300/40 dark:hover:shadow-cyan-900/40 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSending ? "Sending..." : "Send message"}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
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