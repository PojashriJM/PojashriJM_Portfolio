"use client";

import { useEffect, useState } from "react";

const educationData = [
    {
        degree: "B.Tech — AI & Data Science",
        institution: "Jerusalem College of Engineering",
        year: "2023 – Present · Chennai",
        score: "CGPA 9.2",
        accentLight: "#d4537e",
        accentDark: "#c43c88",
        tags: [
            { label: "AI/ML Research", bg: "rgba(212,83,126,0.12)", color: "#b03068" },
            { label: "Open Source", bg: "rgba(139,92,246,0.12)", color: "#7c3aed" },
            { label: "GSSoC Contributor", bg: "rgba(59,130,246,0.12)", color: "#1d6fbd" },
            { label: "Data Science", bg: "rgba(20,184,166,0.12)", color: "#0d7a68" },
        ],
    },
    {
        degree: "HSC — Science",
        institution: "Jaigopal Garodia Girls Hr Sec School",
        year: "2023 · Chennai",
        score: "89%",
        accentLight: "#9b72e6",
        accentDark: "#c43c88",
        tags: [
            { label: "Academic Excellence", bg: "rgba(139,92,246,0.12)", color: "#7c3aed" },
            { label: "Science Stream", bg: "rgba(245,158,11,0.12)", color: "#b45309" },
        ],
    },
    {
        degree: "SSLC",
        institution: "Rajkumar Sulochana Mat. Hr. Sec. School",
        year: "2021 · Chennai",
        score: "94%",
        accentLight: "#2dd4bf",
        accentDark: "#c43c88",
        tags: [
            { label: "Leadership Skills", bg: "rgba(20,184,166,0.12)", color: "#0d7a68" },
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
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
            }}
        >
            {educationData.map((item) => (
                <div
                    key={item.degree}
                    style={{
                        position: "relative",
                        borderRadius: "20px",
                        padding: "1.5rem",
                        overflow: "hidden",
                        background: isDark
                            ? "rgba(58,18,40,0.45)"
                            : "rgba(255,255,255,0.22)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        border: isDark
                            ? "1px solid rgba(255,255,255,0.08)"
                            : "1px solid rgba(255,255,255,0.45)",
                        borderLeft: `3px solid ${isDark ? item.accentDark : item.accentLight}`,
                        boxShadow: isDark
                            ? "0 8px 32px rgba(0,0,0,0.25)"
                            : "0 8px 32px rgba(31,38,135,0.12)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = isDark
                            ? "0 8px 32px rgba(196,60,136,0.15)"
                            : "0 8px 32px rgba(212,83,126,0.12)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = isDark
                            ? "0 8px 32px rgba(0,0,0,0.25)"
                            : "0 8px 32px rgba(31,38,135,0.12)";
                    }}
                >
                    {/* Glass shimmer */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.02))",
                            pointerEvents: "none",
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
                            background: `linear-gradient(to right, ${isDark ? item.accentDark : item.accentLight}, transparent)`,
                        }}
                    />

                    <p
                        style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: isDark ? "#f0d6e8" : "#1a1a2e",
                            marginBottom: "0.3rem",
                            marginTop: "0.25rem",
                            lineHeight: 1.4,
                        }}
                    >
                        {item.degree}
                    </p>

                    <p
                        style={{
                            fontSize: "0.78rem",
                            color: isDark ? "#c43c88" : "#d4537e",
                            marginBottom: "0.2rem",
                        }}
                    >
                        {item.institution}
                    </p>

                    <p
                        style={{
                            fontSize: "0.75rem",
                            color: isDark ? "rgba(240,214,232,0.45)" : "#888",
                            marginBottom: "1rem",
                        }}
                    >
                        {item.year}
                    </p>

                    {/* Score badge */}
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            background: isDark
                                ? "rgba(196,60,136,0.15)"
                                : "rgba(212,83,126,0.08)",
                            color: isDark ? "#e88cbf" : "#b03068",
                            borderRadius: "20px",
                            padding: "3px 12px",
                            marginBottom: "0.9rem",
                            border: isDark
                                ? "1px solid rgba(196,60,136,0.25)"
                                : "1px solid rgba(212,83,126,0.15)",
                        }}
                    >
                        ★ {item.score}
                    </span>

                    {/* Tags */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {item.tags.map((tag) => (
                            <span
                                key={tag.label}
                                style={{
                                    fontSize: "0.7rem",
                                    fontWeight: 500,
                                    borderRadius: "20px",
                                    padding: "3px 10px",
                                    background: isDark ? "rgba(255,255,255,0.06)" : tag.bg,
                                    color: isDark ? "#e88cbf" : tag.color,
                                    border: isDark ? "1px solid rgba(196,60,136,0.2)" : "none",
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