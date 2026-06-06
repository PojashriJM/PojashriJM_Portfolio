"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function Languages() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const languages = [
    { name: "English", level: "Professional", percent: 90 },
    { name: "Tamil", level: "Proficient", percent: 85 },
    { name: "Sourashtra", level: "Native", percent: 100 },
    { name: "Spanish", level: "Beginner", percent: 40 },
  ];

  return (
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
>
    <section ref={sectionRef} className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl text-[#C43C88] dark:text-[#E164A8] font-bold mb-10">
        Languages
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {languages.map((lang, index) => (
          <div
            key={index}
            className="bg-[#F8EAF2] dark:bg-[#220814] p-6 rounded-3xl shadow-md"
          >
            {/* Title */}
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-lg">{lang.name}</span>
              <span className="text-sm text-[#8B6479] dark:text-[#BDA9B6]">
                {lang.level}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-[#E8DEE4] dark:bg-[#3A1A2A] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C43C88] to-pink-400 dark:from-[#E164A8] dark:to-pink-300 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: visible ? `${lang.percent}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </motion.div>
  );
}