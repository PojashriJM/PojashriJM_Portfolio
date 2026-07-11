"use client";

import { useEffect, useState } from "react";

const educationData = [
  {
    degree: "B.Tech — AI & Data Science",
    institution: "Jerusalem College of Engineering",
    year: "2023 – Present · Chennai",
    score: "CGPA 9.25",
    accentLight: "#22D3EE",
    accentDark: "#06B6D4",
    tags: [
      {
        label: "AI/ML Research",
        bg: "rgba(34,211,238,0.12)",
        color: "#0891B2",
      },
      {
        label: "Open Source",
        bg: "rgba(6,182,212,0.12)",
        color: "#0E7490",
      },
      {
        label: "GSSoC Contributor",
        bg: "rgba(56,189,248,0.12)",
        color: "#0284C7",
      },
      {
        label: "Data Science",
        bg: "rgba(45,212,191,0.12)",
        color: "#0F766E",
      },
    ],
  },
  {
    degree: "HSC — Science",
    institution: "Jaigopal Garodia Girls Hr. Sec. School",
    year: "2023 · Chennai",
    score: "89%",
    accentLight: "#38BDF8",
    accentDark: "#0EA5E9",
    tags: [
      {
        label: "Academic Excellence",
        bg: "rgba(56,189,248,0.12)",
        color: "#0369A1",
      },
      {
        label: "Science Stream",
        bg: "rgba(34,211,238,0.12)",
        color: "#0E7490",
      },
    ],
  },
  {
    degree: "SSLC",
    institution: "Rajkumar Sulochana Mat. Hr. Sec. School",
    year: "2021 · Chennai",
    score: "94%",
    accentLight: "#2DD4BF",
    accentDark: "#14B8A6",
    tags: [
      {
        label: "Leadership Skills",
        bg: "rgba(45,212,191,0.12)",
        color: "#0F766E",
      },
    ],
  },
];

export default function Education() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    check();

    const observer = new MutationObserver(check);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "1.25rem",
      }}
    >
      {educationData.map((item) => (
        <div
          key={item.degree}
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            padding: "1.5rem",

            background: isDark
              ? "rgba(8,17,34,0.82)"
              : "rgba(255,255,255,0.72)",

            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",

            border: isDark
              ? "1px solid rgba(34,211,238,0.15)"
              : "1px solid rgba(34,211,238,0.12)",

            borderLeft: `4px solid ${
              isDark ? item.accentDark : item.accentLight
            }`,

            boxShadow: isDark
              ? "0 8px 30px rgba(0,0,0,0.28)"
              : "0 8px 30px rgba(31,38,135,0.12)",

            transition: "all .35s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow =
              "0 15px 40px rgba(34,211,238,.18)";
            e.currentTarget.style.borderColor =
              "rgba(34,211,238,.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = isDark
              ? "0 8px 30px rgba(0,0,0,0.28)"
              : "0 8px 30px rgba(31,38,135,0.12)";
            e.currentTarget.style.borderColor = isDark
              ? "rgba(34,211,238,.15)"
              : "rgba(34,211,238,.12)";
          }}
        >
          {/* Glass shimmer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "linear-gradient(135deg, rgba(34,211,238,.08), rgba(255,255,255,.03), transparent)",
            }}
          />

          {/* Top accent line */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "3px",
              background: `linear-gradient(to right,${
                isDark ? item.accentDark : item.accentLight
              },transparent)`,
            }}
          />

          <h3
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              color: isDark ? "#67E8F9" : "#0F172A",
              marginBottom: ".35rem",
              lineHeight: 1.4,
            }}
          >
            {item.degree}
          </h3>

          <p
            style={{
              fontSize: ".8rem",
              color: isDark ? "#A5F3FC" : "#0E7490",
              marginBottom: ".2rem",
            }}
          >
            {item.institution}
          </p>

          <p
            style={{
              fontSize: ".75rem",
              color: isDark ? "#A5F3FC" : "#0E7490",
              marginBottom: "1rem",
            }}
          >
            {item.year}
          </p>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "5px 14px",
              marginBottom: "1rem",

              borderRadius: "999px",

              fontSize: ".75rem",
              fontWeight: 600,

              background: isDark
                ? "rgba(34,211,238,.12)"
                : "rgba(34,211,238,.08)",

              color: isDark ? "#67E8F9" : "#0E7490",

              border: "1px solid rgba(34,211,238,.25)",
            }}
          >
            ★ {item.score}
          </span>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {item.tags.map((tag) => (
              <span
                key={tag.label}
                style={{
                  fontSize: ".7rem",
                  fontWeight: 500,
                  padding: "4px 11px",
                  borderRadius: "999px",

                  background: isDark
                    ? "rgba(255,255,255,.05)"
                    : tag.bg,

                  color: isDark ? "#A5F3FC" : tag.color,

                  border: isDark
                    ? "1px solid rgba(34,211,238,.15)"
                    : "none",
                }}
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}