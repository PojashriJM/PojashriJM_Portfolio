import { useEffect, useRef, useState } from "react";
import { FaCodeBranch, FaBrain, FaCode, FaChartLine } from "react-icons/fa";

const experiences = [
  {
    id: 1,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    date: "May 2026 – Present",
    description:
      "Merged 5 PRs across AI Agents track repositories — building skeleton UIs, dark/light mode toggles, a README generator, and pagination components in real collaborative workflows with code reviews and iterative feedback.",
    icon: FaCodeBranch,
    color: "amber",
    active: true,
  },
  {
    id: 2,
    role: "AI & DS Intern",
    company: "Zeptoware Systems",
    date: "Dec 2025 – Jan 2026",
    description:
      "Engineered a Fake Job Detection System using NLP pipelines (TF-IDF, BERT embeddings) and ensemble ML models — achieving high-precision classification on imbalanced job listing datasets.",
    icon: FaBrain,
    color: "pink",
    active: false,
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Parkqwik Pvt. Ltd.",
    date: "Jun 2025 – Jul 2025",
    description:
      "Designed and shipped 5+ responsive UI components for a live parking management platform — translating Figma mockups into pixel-accurate HTML/CSS/JS with cross-browser compatibility.",
    icon: FaCode,
    color: "purple",
    active: false,
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Nexila Technologies",
    date: "Dec 2024 – Jan 2025",
    description:
      "Built end-to-end predictive analytics pipelines — handling missing value imputation, feature engineering, and model evaluation for business forecasting use cases using Python and Scikit-learn.",
    icon: FaChartLine,
    color: "teal",
    active: false,
  },
];

const colorMap = {
  amber: {
    dot: "#BA7517",
    company: "#BA7517",
    border: "#BA7517",
    iconBg: "#FAEEDA",
    iconColor: "#BA7517",
    glow: "rgba(186,117,23,0.35)",
  },
  pink: {
    dot: "#C43C88",
    company: "#C43C88",
    border: "#C43C88",
    iconBg: "#FBEAF0",
    iconColor: "#C43C88",
    glow: "rgba(196,60,136,0.35)",
  },
  purple: {
    dot: "#7F77DD",
    company: "#7F77DD",
    border: "#7F77DD",
    iconBg: "#EEEDFE",
    iconColor: "#7F77DD",
    glow: "rgba(127,119,221,0.35)",
  },
  teal: {
    dot: "#1D9E75",
    company: "#1D9E75",
    border: "#1D9E75",
    iconBg: "#E1F5EE",
    iconColor: "#1D9E75",
    glow: "rgba(29,158,117,0.35)",
  },
};

export default function ExperienceSection() {
  const [visible, setVisible] = useState([]);
 const [glowProgress, setGlowProgress] = useState(0);
const [hasEntered, setHasEntered] = useState(false); // NEW
const sectionRef = useRef(null);
  const cardRefs = useRef([]);
const [isDark, setIsDark] = useState(false);
useEffect(() => {
  const observer = new MutationObserver(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}, []);
  // Scroll-triggered card reveal
  useEffect(() => {
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => [...new Set([...prev, i])]);
            obs.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);
// 1. Trigger full bottom-to-top glow animation when section enters viewport
useEffect(() => {
  if (!sectionRef.current) return;
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasEntered) {
        setHasEntered(true);
        let start = null;
        const duration = 900; // ms
        const animate = (ts) => {
          if (!start) start = ts;
          const p = Math.min((ts - start) / duration, 1);
          setGlowProgress(p);
          if (p < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        obs.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  obs.observe(sectionRef.current);
  return () => obs.disconnect();
}, [hasEntered]);

// 2. Cursor on card expands/shrinks glow
const handleCardMouseEnter = (index) => {
  // each card is ~25% of the timeline; hovering lower cards = less glow shown
  const total = experiences.length;
  const p = 1 - index / total; // card 0 (top) = full, card 3 (bottom) = 0.25
  setGlowProgress(Math.max(p, 0.25));
};
const handleCardMouseLeave = () => {
  setGlowProgress(1); // reset to full when cursor leaves
};

  return (
    <section ref={sectionRef} style={styles.section}>
    
      <div style={styles.timeline}>
        {/* Static base line */}
        <div style={styles.baseLine} />

        {/* Glow line animating from bottom to top */}
        <div
          style={{
            ...styles.glowLine,
            // grows from bottom: we clip from the top
            top: `${(1 - glowProgress) * 100}%`,
            bottom: 0,
          }}
        />

        {experiences.map((exp, i) => {
          const c = colorMap[exp.color];
          const isVisible = visible.includes(i);
          const Icon = exp.icon;

          return (
            <div
              key={exp.id}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => handleCardMouseEnter(i)}  // ADD
  onMouseLeave={handleCardMouseLeave}            // ADD
              style={{
                ...styles.item,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* Dot on the line */}
              <div style={styles.dotWrap}>
                <div
                  style={{
                    ...styles.dot,
                    borderColor: c.dot,
                    boxShadow: `0 0 6px ${c.glow}`,
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: c.dot,
                    }}
                  />
                </div>
              </div>

              {/* Card */}
             <div
  style={{
    ...styles.card,
    background: isDark ? "#3a1228" : "#F8EAF2",
    borderTop: isDark ? "1px solid rgba(196,60,136,0.2)" : "1px solid rgba(255,255,255,0.75)",
    borderRight: isDark ? "1px solid rgba(196,60,136,0.2)" : "1px solid rgba(255,255,255,0.75)",
    borderBottom: isDark ? "1px solid rgba(196,60,136,0.2)" : "1px solid rgba(255,255,255,0.75)",
    borderLeft: `3px solid ${c.border}`,
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-3px)";
    e.currentTarget.style.boxShadow = isDark
      ? "0 8px 24px rgba(196,60,136,0.25)"
      : "0 8px 24px rgba(196,60,136,0.13)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = isDark
      ? "0 4px 16px rgba(196,60,136,0.15)"
      : "0 4px 16px rgba(196,60,136,0.07)";
  }}
              >
               <div style={styles.cardTop}>
  {/* React Icon box */}
  <div style={{ ...styles.iconBox, background: c.iconBg }}>
    <Icon size={18} color={c.iconColor} />
  </div>

  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={styles.roleRow}>
      <span style={{ ...styles.role, color: isDark ? "#f0d6e8" : "#1a1a1a" }}>
        {exp.role}
      </span>
      {exp.active && (
        <span style={styles.activeBadge}>● Active</span>
      )}
    </div>
    <p style={{ ...styles.company, color: c.company }}>
      {exp.company}
    </p>
  </div>

  <span style={{
    ...styles.datePill,
    background: isDark ? "rgba(255,255,255,0.07)" : "#f4f4f4",
    border: isDark ? "0.5px solid rgba(255,255,255,0.12)" : "0.5px solid #e0e0e0",
    color: isDark ? "#c9a0b8" : "#666",
  }}>
    {exp.date}
  </span>
</div>

<p style={{ ...styles.desc, color: isDark ? "#b89aaa" : "#555" }}>
  {exp.description}
</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "4rem 2rem",
    fontFamily: "inherit",
  },
  heading: {
    fontSize: 32,
    fontWeight: 700,
    color: "#C43C88",
    marginBottom: "2.5rem",
  },
  timeline: {
    position: "relative",
    paddingLeft: 40,
  },
  baseLine: {
    position: "absolute",
    left: 7,
    top: 0,
    bottom: 0,
    width: 2,
    background: "rgba(0,0,0,0.08)",
    borderRadius: 2,
  },
  item: {
    position: "relative",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "flex-start",
    gap: 16,
  },
  dotWrap: {
    position: "absolute",
    left: -40,
    top: 16,
    zIndex: 2,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "2.5px solid",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
card: {
  flex: 1,
  borderRadius: 16,
  padding: "1rem 1.25rem",
  boxShadow: "0 4px 16px rgba(196, 60, 136, 0.07)",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  cursor: "default",
},
  cardTop: {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 10,
    flexWrap: "wrap",
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  roleRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    marginBottom: 3,
  },
  role: {
    fontSize: 15,
    fontWeight: 600,
    color: "#1a1a1a",
  },
  activeBadge: {
    fontSize: 11,
    fontWeight: 600,
    color: "#1D9E75",
    background: "#E1F5EE",
    borderRadius: 20,
    padding: "2px 9px",
  },
  company: {
    fontSize: 13,
    margin: 0,
    fontWeight: 500,
  },
  datePill: {
    fontSize: 11,
    color: "#666",
    background: "#f4f4f4",
    border: "0.5px solid #e0e0e0",
    borderRadius: 20,
    padding: "3px 10px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  desc: {
    fontSize: 13.5,
    color: "#555",
    margin: 0,
    lineHeight: 1.7,
  },
  glowLine: {
  position: "absolute",
  left: 7,
  width: 2,
  borderRadius: 2,
  background: "linear-gradient(to top, #1D9E75, #7F77DD, #C43C88, #BA7517)",
  boxShadow: "0 0 8px rgba(196,60,136,0.6), 0 0 20px rgba(127,119,221,0.3)",
  transition: "top 0.4s cubic-bezier(0.4, 0, 0.2, 1)", // ADD this
  zIndex: 1,
},
};