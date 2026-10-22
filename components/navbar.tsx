"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "My Story",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
    "Participations",
  ];

  const sectionIds: Record<string, string> = {
    Home: "home",
    "My Story": "my-story",
    Skills: "skills",
    Projects: "projects",
    Experience: "experience",
    Contact: "contact",
    Participations: "participations",
  };

  const linkClasses = `
    text-[#55646C] dark:text-[#93A9AF]
    hover:text-[#0E7C86]
    dark:hover:text-[#22D3EE]
    active:text-[#0E7C86]
    dark:active:text-[#22D3EE]
    transition-all duration-200
    text-sm font-medium
    py-2 px-3
    rounded-lg
    active:bg-[#22D3EE]/10
  `;

  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        bg-[#EEF1F5]/75 dark:bg-[#0A1216]/75
        backdrop-blur-xl
        border-b border-[rgba(18,24,27,0.08)]
        dark:border-[rgba(231,246,248,0.08)]
        z-[9999]
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
        {/* Logo */}
        <a href="#home" aria-label="Poja Shri - Home">
          <h1 className="text-2xl font-bold tracking-tight">
            <span className="text-[#12181B] dark:text-[#E7F6F8]">
              poja
            </span>
            <span className="text-[#0E7C86] dark:text-[#22D3EE]">
              shri
            </span>
          </h1>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 ml-10 mr-auto">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${sectionIds[link]}`}
                className={linkClasses}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="
            md:hidden ml-auto
            flex items-center justify-center
            w-10 h-10 rounded-lg
            bg-white dark:bg-[#131E24]
            border border-[rgba(18,24,27,0.10)]
            dark:border-[rgba(231,246,248,0.08)]
            text-[#0E7C86] dark:text-[#22D3EE]
            shadow-sm relative z-[99999]
          "
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div
          className="
            md:hidden mx-4 mb-4
            rounded-2xl
            bg-[#EEF1F5]/95 dark:bg-[#0A1216]/95
            backdrop-blur-xl
            border border-[rgba(18,24,27,0.08)]
            dark:border-[rgba(231,246,248,0.08)]
            shadow-xl px-6 py-6
            flex flex-col gap-3
          "
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${sectionIds[link]}`}
              className="
                block
                text-[#55646C] dark:text-[#93A9AF]
                hover:text-[#0E7C86]
                dark:hover:text-[#22D3EE]
                hover:bg-[#22D3EE]/10
                transition-all duration-200
                text-lg font-medium
                py-3 px-4 rounded-xl
              "
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
