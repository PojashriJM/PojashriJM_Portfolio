import { useEffect, useRef, useState } from "react";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaCodePullRequest } from "react-icons/fa6";

const experiences = [
  {
    id: 1,
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code",
    date: "May 2026 – Present",
    description:
      "Contributed to multiple repos under GSSoC's AI Agents track, raising PRs, reviewing code, and working within real collaborative development workflows.",
    icon: <FaCodePullRequest />,
    color: "amber",
    active: true,
  },
  {
    id: 2,
    role: "AI & DS Intern",
    company: "Zeptoware Systems",
    date: "Dec 2025 – Jan 2026",
    description:
      "Built an NLP-based Fake Job Detection System using ML and Deep Learning techniques.",
    icon: <LuBrainCircuit />,
    color: "pink",
    active: false,
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Parkqwik Pvt. Ltd.",
    date: "Jun 2025 – Jul 2025",
    description:
      "Designed and developed 5+ responsive UI components using HTML, CSS, and JavaScript.",
    icon: <MdOutlineComputer />,
    color: "purple",
    active: false,
  },
  {
    id: 4,
    role: "Data Science Intern",
    company: "Nexila Technologies",
    date: "Dec 2024 – Jan 2025",
    description:
      "Worked on machine learning models, data cleaning, and predictive analytics pipelines.",
    icon: <FaDatabase />,
    color: "teal",
    active: false,
  },
];

const colorMap = {
  amber: {
    dot: "#BA7517",
    dotBg: "#FAEEDA",
    company: "#BA7517",
    border: "#BA7517",
    iconBg: "#FAEEDA",
    iconColor: "#BA7517",
    badge: { bg: "#FAEEDA", color: "#BA7517" },
  },
  pink: {
    dot: "#D4537E",
    dotBg: "#FBEAF0",
    company: "#D4537E",
    border: "#D4537E",
    iconBg: "#FBEAF0",
    iconColor: "#D4537E",
    badge: { bg: "#FBEAF0", color: "#D4537E" },
  },
  purple: {
    dot: "#7F77DD",
    dotBg: "#EEEDFE",
    company: "#7F77DD",
    border: "#7F77DD",
    iconBg: "#EEEDFE",
    iconColor: "#7F77DD",
    badge: { bg: "#EEEDFE", color: "#7F77DD" },
  },
  teal: {
    dot: "#1D9E75",
    dotBg: "#E1F5EE",
    company: "#1D9E75",
    border: "#1D9E75",
    iconBg: "#E1F5EE",
    iconColor: "#1D9E75",
    badge: { bg: "#E1F5EE", color: "#1D9E75" },
  },
};

export default function ExperienceSection() {
  const [visible, setVisible] = useState([]);
  const cardRefs = useRef([]);

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
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <section style={styles.section}>
      

      <div style={styles.timeline}>
        {/* Gradient line */}
        <div style={styles.trackLine} />

        {experiences.map((exp, i) => {
          const c = colorMap[exp.color];
          const isVisible = visible.includes(i);

          return (
            <div
              key={exp.id}
              ref={(el) => (cardRefs.current[i] = el)}
              style={{
                ...styles.item,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-18px)",
                transition: `opacity 0.45s ease ${i * 0.1}s, transform 0.45s ease ${i * 0.1}s`,
              }}
            >
              {/* Dot */}
              <div style={styles.dotWrap}>
                <div
                  style={{
                    ...styles.dot,
                    borderColor: c.dot,
                    background: "#fff",
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
                  borderLeft: `3px solid ${c.border}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px rgba(0,0,0,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={styles.cardTop}>
                  {/* Icon */}
                  <div
                    style={{
                      ...styles.iconBox,
                      background: c.iconBg,
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{exp.icon}</span>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={styles.roleRow}>
                      <span style={styles.role}>{exp.role}</span>
                      {exp.active && (
                        <span
                          style={{
                            ...styles.activeBadge,
                            background: colorMap.teal.badge.bg,
                            color: colorMap.teal.badge.color,
                          }}
                        >
                          Active
                        </span>
                      )}
                    </div>
                    <p style={{ ...styles.company, color: c.company }}>
                      {exp.company}
                    </p>
                  </div>

                  <span style={styles.datePill}>{exp.date}</span>
                </div>

                <p style={styles.desc}>{exp.description}</p>
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
    maxWidth: 780,
    margin: "0 auto",
    fontFamily: "inherit",
  },
  heading: {
    fontSize: 32,
    fontWeight: 600,
    color: "#C2185B",
    marginBottom: "2.5rem",
  },
  timeline: {
    position: "relative",
    paddingLeft: 36,
  },
  trackLine: {
    position: "absolute",
    left: 7,
    top: 12,
    bottom: 12,
    width: 2,
    background:
      "linear-gradient(to bottom, #BA7517, #D4537E, #7F77DD, #1D9E75)",
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
    left: -36,
    top: 16,
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: "50%",
    border: "2.5px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    background: "#fff",
    border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: 12,
    padding: "1rem 1.25rem",
    transition: "transform 0.2s, box-shadow 0.2s",
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
    fontWeight: 500,
    borderRadius: 20,
    padding: "2px 8px",
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
    lineHeight: 1.65,
  },
};