"use client";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaCodePullRequest } from "react-icons/fa6";
import { motion } from "framer-motion";
import Languages from "@/components/Languages";
import Navbar from "@/components/navbar";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
// Shared design tokens (cyan/ink system) used as class strings below so
// every section pulls from the same palette instead of one-off hex values.
const PAGE_BG = "bg-[#EEF1F5] dark:bg-[#0A1216]";
const CARD_BG = "bg-white dark:bg-[#131E24]";
const BORDER = "border-[rgba(18,24,27,0.10)] dark:border-[rgba(231,246,248,0.08)]";
const TEXT_PRIMARY = "text-[#12181B] dark:text-[#E7F6F8]";
const TEXT_SECONDARY = "text-[#55646C] dark:text-[#93A9AF]";
const TEXT_MUTED = "text-[#8896A0] dark:text-[#5C6F76]";
const CYAN_TEXT = "text-[#0E7C86] dark:text-[#22D3EE]";

// Small monospace "code comment" tag placed before every section heading —
// echoes the hero's `>>> whoami` prompt so the whole page reads as one
// system instead of a themed hero bolted onto old sections.


function CyanDivider() {
  return (
    <div className="relative h-px w-full my-2">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent" />
    </div>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const skills = [
    "python",
    "machine_learning",
    "sql",
    "java",
    "javascript",
    "react",
    "html",
    "OpenCV",
    "github",
    "firebase",
    "cassandra",
    "langchain",
  ];

  const achievements = [
    {
      title: "TNWISE Women Hackathon",
      img: "/cert1.jpeg",
      desc: "Participated in the TNWISE Women Hackathon held at Rajalakshmi Engineering College and advanced to Round 2 among shortlisted teams.",
    },
    {
      title: "AIWS Women Hackathon",
      img: "/cert2.png",
      desc: "Participated in the All India Women Start-a-thon and advanced to Round 2 by presenting innovative problem-solving ideas.",
    },
    {
      title: "EY International Techkathon",
      img: "/cert3.png",
      desc: "Participated in the EY International Techathon and advanced to Round 2 in a competitive technical challenge.",
    },
    {
      title: "International Conference IETE",
      img: "/conference.jpeg",
      desc: "Participated in an international conference conducted by IETE, gaining exposure to emerging technologies and research discussions.",
    },
    {
      title: "Science Expo",
      img: "/scienceexpo.jpeg",
      desc: "Presented an Offline Voice Assistant project at a science expo, demonstrating AI and voice recognition concepts.",
    },
    {
      title: "AI Agents Workshop",
      img: "/workshop1.jpeg",
      desc: "Attended an AI Agents workshop conducted by Parkqwik, exploring intelligent AI agent concepts and applications.",
    },
    {
      title: "IOT Workshop",
      img: "/workshop2.jpeg",
      desc: "Completed an offline IoT workshop conducted by PanTech E-Learning with practical sensor training experience.",
    },
    {
      title: "Langchain Workshop",
      img: "/workshop3.png",
      desc: "Participated in a LangChain workshop organized by Innomatics Research Labs, exploring AI workflow and application development concepts.",
    },
  ];
  const marqueeItems = achievements.concat(achievements);

  return (
    <>
      <Navbar />
      <main className={`overflow-x-hidden w-full pt-10 min-h-screen ${PAGE_BG} ${TEXT_PRIMARY} transition-colors duration-300`}>
        <div className="fixed top-4 right-20 md:right-5 z-[99999]">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${CARD_BG} border ${BORDER} ${CYAN_TEXT} text-lg shadow-sm hover:scale-105 transition`}
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </div>

        {/* Hero — signature element is the "record card": your profile styled
            as row_index 0 of a dataframe, small avatar chip instead of a
            large photo, mono field labels. No blobs, no big portrait. */}
        <section id="home" className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">

          <div className="relative grid md:grid-cols-[1fr_340px] gap-12 md:gap-16 items-start">
            {/* Left: text */}
            <div>
              <div className={`font-mono text-sm mb-6 ${CYAN_TEXT}`}>
                <span className={TEXT_MUTED}>&gt;&gt;&gt; </span>whoami
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.08] tracking-tight">
                Hi, I&apos;m{" "}
                <span className={CYAN_TEXT}>Poja Shri J M</span>
              </h1>

              <div className="flex flex-wrap gap-2 mt-5 mb-6">
                <span className={`font-mono text-xs px-3 py-1.5 rounded-md ${CARD_BG} border ${BORDER} ${TEXT_SECONDARY}`}>
                  ai_&amp;_data_science
                </span>
                <span className={`font-mono text-xs px-3 py-1.5 rounded-md ${CARD_BG} border ${BORDER} ${TEXT_SECONDARY}`}>
                  final_year
                </span>
              </div>

              <p className={`max-w-md text-base md:text-lg leading-relaxed ${TEXT_SECONDARY}`}>
                I build systems that turn messy, real-world data and language
                into something usable — from document intelligence pipelines
                to models that know the limits of what they know.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 rounded-lg bg-[#06B6D4] hover:bg-[#22D3EE] dark:bg-[#22D3EE] dark:hover:bg-[#67E4F4] text-[#052227] font-medium transition"
                >
                  Download Resume
                </a>
                <a
                  href="#contact"
                  className={`group flex items-center gap-2 font-medium ${TEXT_PRIMARY}`}
                >
                  Contact me
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>

              <div className={`mt-10 flex items-center gap-2 text-xs font-mono ${TEXT_MUTED}`}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)]" />
                status: open_to_internships &amp; full_time
              </div>
            </div>

            {/* Right: record card */}
            <div className={`relative rounded-xl ${CARD_BG} border ${BORDER} shadow-sm overflow-hidden`}>
              <div className="absolute top-0 left-0 w-[3px] h-full bg-[#0E7C86] dark:bg-[#22D3EE]" />

              <div className={`flex items-center gap-3 px-5 pt-5 pb-4 border-b ${BORDER}`}>
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src="/Poja shri.png"
                    alt="Poja Shri"
                    className="w-full h-full object-cover border border-[rgba(18,24,27,0.50)] dark:border-[rgba(231,246,248,0.50)] rounded-lg"
                  />
                </div>
                <div>
                  <div className={`font-mono text-[11px] ${TEXT_MUTED} mb-0.5`}>
                    row_index: 0
                  </div>
                  <div className="font-medium text-sm">Poja Shri J M</div>
                </div>
              </div>

              <div className="px-5 pt-4 pb-5">
                {(
                  [
                    { key: "role", val: "AI/DS student" },
                    { key: "cgpa", val: "9.25", accent: true },
                    { key: "focus", val: "LLMs · RAG · ML" },
                    { key: "based_in", val: "Chennai, IN" },
                    { key: "status", val: "open_to_work", accent: true },
                  ] as { key: string; val: string; accent?: boolean }[]
                ).map((row) => (
                  <div
                    key={row.key}
                    className={`flex justify-between items-baseline py-2 border-b border-dashed ${BORDER} last:border-none text-sm`}
                  >
                    <span className={`font-mono text-[11px] uppercase tracking-wide ${TEXT_MUTED}`}>
                      {row.key}
                    </span>
                    <span className={`font-medium ${row.accent ? CYAN_TEXT : TEXT_PRIMARY}`}>
                      {row.val}
                    </span>
                  </div>
                ))}
                <span className={`inline-block font-mono text-[10px] px-2 py-1 mt-3 rounded ${PAGE_BG} border ${BORDER} ${TEXT_SECONDARY}`}>
                  dtype: candidate_profile
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              About Me
            </h2>

            <div className={`relative ${CARD_BG} border ${BORDER} p-8 rounded-xl shadow-sm`}>
              <p className={`text-lg leading-relaxed ${TEXT_SECONDARY}`}>
                I got into AI because of a simple question:{" "}
                <span className={`font-semibold ${TEXT_PRIMARY}`}>
                  how can technology make life easier for people?
                </span>
                <br />
                <br />
                That question led me to build things. A system that catches
                fake job postings before they mislead real candidates. A
                document intelligence tool that lets anyone interrogate a PDF
                like it&apos;s a conversation. Web apps that turn rough ideas
                into working products.
                <br />
                <br />
                I&apos;m a pre-final year AI &amp; Data Science student at
                Jerusalem College of Engineering (CGPA 9.25), with internships
                in NLP, data science, and frontend development. My sweet spot
                is the intersection of language models and practical utility
                — building AI that&apos;s actually useful, not just
                technically impressive.
                <br />
                <br />
                Currently obsessing over how LLMs handle the things they
                don&apos;t know, and how to build systems that are honest
                about their limits.
              </p>
            </div>
          </motion.div>
        </section>

        <CyanDivider />

        {/* Skills — rendered as lowercase snake_case tags, echoing the
            dtype-tag language from the hero record card. */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Skills
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={`${CARD_BG} border ${BORDER} border-l-2 border-l-transparent hover:border-l-[#22D3EE] p-4 rounded-lg text-center font-mono text-sm ${TEXT_SECONDARY} transition-colors`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </section>
        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Experience
            </h2>
            <Experience />
          </motion.div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-10">
              Education
            </h2>
            <Education />
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Projects
            </h2>
            <Projects />
          </motion.div>
        </section>

        <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Certifications />
          </motion.div>
        </section>

        {/* Achievements — cards now carry an item[i] index tag, echoing the
            hero card's row_index. Same instrument, different section. */}
        <section id="participations" className="py-24 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl text-center font-bold mb-12">
              Achievements &amp; Participation
            </h2>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#EEF1F5] dark:from-[#0A1216] to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#EEF1F5] dark:from-[#0A1216] to-transparent z-10"></div>

            <div className="relative overflow-hidden">
              <div className="flex w-max gap-6 animate-marquee pause-animation">
                {marqueeItems.map((item, index) => (
                  <div
                    key={index}
                    className={`relative w-[260px] sm:w-[300px] flex-shrink-0 ${CARD_BG} border ${BORDER} rounded-xl shadow-sm p-4 hover:scale-[1.03] transition duration-300`}
                  >
                    <span className={`font-mono text-[10px] ${CYAN_TEXT} block mb-2`}>
                      {`item[${index % achievements.length}]`}
                    </span>
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`w-full h-36 sm:h-48 object-contain rounded-lg mb-3 ${PAGE_BG}`}
                    />
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className={`text-sm ${TEXT_SECONDARY} break-words whitespace-normal`}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-4 md:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
        </section>

        {/* Footer */}
        <footer className={`text-center py-8 relative ${TEXT_MUTED} text-sm`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#22D3EE]/40 to-transparent" />
          Made with 🩵 by Poja Shri J M.
        </footer>
      </main>
    </>
  );
}