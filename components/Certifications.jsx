"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const certs = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "2024",
    img: "/nptel-ml.png",
    credId: "Elite Certificate",
    link: null,
  },
  {
    title: "Natural Language Processing",
    issuer: "NPTEL",
    date: "2025",
    img: "/nptel-nlp.png",
    credId: "NLP Certificate",
    link: null,
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2026",
    img: "/hackerrank-sql.png",
    credId: "Credential ID on profile",
    link: "https://www.hackerrank.com/certificates/8deb0a0c1f3c",
  },
  {
    title: "GenAI in Data Analytics",
    issuer: "Meta × Coursera",
    date: "Sep 2025",
    img: "/meta-genai.png",
    credId: "coursera.org/verify/VN7DGX01KWSV",
    link: "https://coursera.org/verify/VN7DGX01KWSV",
  },
  {
    title: "Get Started with AI Agent Development on Azure",
    issuer: "Microsoft Learn",
    date: "Dec 2025",
    img: "/ms-ai-agents.png",
    credId: "Module Assessment Passed",
    link: null,
  },
  {
    title: "Full Stack Development Training",
    issuer: "NoviTech R&D",
    date: "Jun–Jul 2025",
    img: "/novitech-fullstack.png",
    credId: " 30 Days MasterClass in Full Stack Development",
    link: null,
  },
];

function CertCard({ cert }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="relative h-[320px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          borderRadius: "18px",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: "18px",
            overflow: "hidden",
          }}
          className="bg-[#F8EAF2] dark:bg-[#220814] border border-[#f4c0d1] dark:border-[#72243e] flex flex-col"
        >
          <div className="w-full h-40 overflow-hidden bg-white dark:bg-[#3a1228] flex items-center justify-center rounded-t-[18px]">
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-full object-contain"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>
          <div className="p-4 flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-white dark:bg-[#3a1228] text-[#993556] dark:text-[#ED93B1] border border-[#f4c0d1] dark:border-[#72243e]">
                {cert.issuer}
              </span>
              <span className="text-[11px] text-[#5A3147] dark:text-[#D9CCD4]">{cert.date}</span>
            </div>
            <p className="text-sm font-medium text-[#3a1228] dark:text-[#F8EAF2] leading-snug">
              {cert.title}
            </p>
            <p className="text-[11px] text-[#C43C88] mt-auto flex items-center gap-1">
              ↻ tap for credential id
            </p>
          </div>
        </div>

        {/* Back */}
      {/* Back */}
<div
  style={{
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    borderRadius: "18px",
  }}
  className="flex flex-col items-center justify-center p-6 gap-3 bg-gradient-to-br from-[#fbeaf0] to-[#f4c0d1] dark:from-[#3a1228] dark:to-[#220814]"
>
  <div className="w-14 h-14 rounded-full border border-[#C43C88]/40 bg-[#C43C88]/10 flex items-center justify-center text-[#E164A8] text-2xl">
    🏅
  </div>
  <p className="text-sm font-medium text-[#3a1228] dark:text-[#F8EAF2] text-center leading-snug">{cert.title}</p>
  <p className="text-xs text-[#7a3050] dark:text-[#D9CCD4] text-center">{cert.issuer} · {cert.date}</p>
  <p className="text-[11px] text-[#9a5070]/70 dark:text-[#D9CCD4]/60 font-mono text-center break-all">{cert.credId}</p>
         {cert.link ? (
   <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="text-[12px] text-[#E164A8] border border-[#C43C88]/50 px-4 py-1.5 rounded-full hover:bg-[#C43C88]/15 transition"
  >
     ↗ verify credential
  </a>
) : (
  <span className="text-[12px] text-[#9a5070]/40 dark:text-[#D9CCD4]/30 border border-[#9a5070]/10 px-4 py-1.5 rounded-full">
    internal record
  </span>
)}
         <p className="text-[11px] text-[#9a5070]/40 dark:text-[#D9CCD4]/30 mt-1">tap again to flip back</p>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-3 flex">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-[#fbeaf0] dark:bg-[#3a1228] text-[#993556] dark:text-[#ED93B1] border border-[#f4c0d1] dark:border-[#72243e]">
            verified credentials
          </span>
        </div>
        <h2 className="text-4xl font-bold text-[#C43C88] dark:text-[#E164A8] mb-2">
          Certifications
        </h2>
        <p className="text-sm text-[#5A3147] dark:text-[#D9CCD4] mb-10">
          Tap any card to view credential details
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((cert, i) => (
            <CertCard key={i} cert={cert} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}