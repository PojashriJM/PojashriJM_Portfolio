"use client";

import { useState, useEffect } from "react";

const projects = [
  {
    id: "01",
    title: "Fake Job Detection",
    tagline: "End-to-end NLP pipeline protecting job seekers from scams",
    description:
      "Built a full-stack fraud detection system that analyses job titles and descriptions using ML classification. Benchmarked 4 models with feature engineering on text, metadata, and salary signals — achieving 18% reduction in false positives. Served via a Flask web interface.",
    tech: ["Python", "ML", "Flask", "HTML", "CSS", "NLP"],
    github: "https://github.com/PojashriJM/FakeJobDetection",
    live: "https://fakejobdetection.onrender.com/",
    border: "#C43C88",
    accent: "#e8749a",
  },
  {
    id: "02",
    title: "Million Dollar InstaPage",
    tagline: "Buy pixels, brand your logo — on the web",
    description:
      "A pixel-commerce website where users purchase individual pixels and place branded logos on a shared canvas. Built with vanilla HTML/CSS/JS on the frontend and a Node.js backend deployed on Render — demonstrating full-stack ownership from UI to deployment.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Render"],
    github: "https://github.com/PojashriJM/million-dollar-instapage",
    live: "https://million-dollar-instapage.onrender.com/",
    border: "#a855c8",
    accent: "#c47ae8",
  },
  {
    id: "03",
    title: "DocMind AI",
    tagline: "Ask anything about your PDF — get cited answers",
    description:
      "Built an AI-powered document intelligence platform using LLMs and RAG architecture. Users upload PDFs and interact via natural language — the system retrieves semantically relevant chunks and synthesizes accurate, cited answers in real time.",
    tech: ["Groq", "Next.js", "React", "Typescript", "RAG"],
    github: "https://github.com/PojashriJM/DocMindAI",
    live: "https://doc-mind-ai-iota.vercel.app/",
    border: "#e06b6b",
    accent: "#e89090",
  },
  {
    id: "04",
    title: "AI Smart shoe for Visually Impaired",
    tagline: "AI-powered navigation assistance for visually impaired individuals",
   description:
  "An AI-powered smart shoe designed to assist visually impaired individuals with safer and more independent navigation. The system combines ultrasonic sensors, ESP32, and intelligent obstacle detection to identify nearby objects and provide real-time alerts through vibration and audio feedback. Built with a companion mobile application for location tracking and emergency assistance.",
   tech: ["Arduino uno", "ESP32", "React", "Flutter", "Sensors"],
    border: "#5b8de8",
    accent: "#7aaaf0",
     hideLinks: true,
  },
];

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ProjectsSection() {
  const [hovered, setHovered] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const cardBg = isDark ? "#3a1228" : "#F8EAF2";
  const cardBorder = isDark ? "rgba(196,60,136,0.2)" : "rgba(255,255,255,0.75)";
  const textPrimary = isDark ? "#f5d0e8" : "#2d0a1e";
  const textSecondary = isDark ? "#c490b0" : "#7a3a5a";
  const textMuted = isDark ? "#9a6080" : "#b06090";

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))",
          gap: 18,
        }}
      >
        {projects.map((p) => {
          const isHovered = hovered === p.id;
          return (
            <div
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                background: cardBg,
                borderTop: `1px solid ${cardBorder}`,
                borderRight: `1px solid ${cardBorder}`,
                borderBottom: `1px solid ${cardBorder}`,
                borderLeft: `3px solid ${p.border}`,
                borderRadius: 14,
                padding: "28px 26px 24px",
                overflow: "hidden",
                cursor: "default",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                boxShadow: isHovered
                  ? `0 16px 40px rgba(196,60,136,0.12), 0 4px 12px rgba(0,0,0,0.06)`
                  : "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Watermark */}
              <span
                style={{
                  position: "absolute",
                  right: 16,
                  top: 8,
                  fontSize: 68,
                  fontWeight: 900,
                  color: p.border,
                  opacity: isHovered ? 0.08 : 0.04,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  userSelect: "none",
                  transition: "opacity 0.3s ease",
                  pointerEvents: "none",
                }}
              >
                {p.id}
              </span>

              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 5 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: textPrimary, letterSpacing: "-0.01em" }}>
                    {p.title}
                  </h3>
                  <p style={{ margin: "4px 0 0", fontSize: 12, color: p.accent, fontWeight: 500 }}>
                    {p.tagline}
                  </p>
                </div>
   {!p.hideLinks && (
  <div
    style={{
      display: "flex",
      gap: 7,
      flexShrink: 0,
      marginLeft: 12,
      marginTop: 2,
    }}
  >
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      title="GitHub"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: 8,
        background: isDark
          ? "rgba(196,60,136,0.12)"
          : "rgba(196,60,136,0.08)",
        color: "#C43C88",
        border: "1px solid rgba(196,60,136,0.2)",
        textDecoration: "none",
      }}
    >
      <GitHubIcon />
    </a>

    <a
      href={p.live}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        padding: "0 10px",
        height: 30,
        borderRadius: 8,
        background: p.border,
        color: "#fff",
        fontSize: 11,
        fontWeight: 600,
        textDecoration: "none",
        letterSpacing: "0.03em",
      }}
    >
      <ExternalIcon /> Live
    </a>
  </div>
)}
                </div>

              {/* Divider */}
              <div style={{ height: 1, background: isDark ? "rgba(196,60,136,0.12)" : "rgba(196,60,136,0.1)", margin: "14px 0" }} />

              {/* Description */}
              <p style={{ margin: "0 0 18px", fontSize: 13, lineHeight: 1.75, color: textSecondary }}>
                {p.description}
              </p>

              {/* Tech tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 10.5, fontWeight: 600, letterSpacing: "0.04em",
                      padding: "3px 9px", borderRadius: 20,
                      background: isDark ? "rgba(255,255,255,0.05)" : "rgba(196,60,136,0.07)",
                      color: textMuted,
                      border: "1px solid rgba(196,60,136,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}