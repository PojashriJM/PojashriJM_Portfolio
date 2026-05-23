"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
    "Participations",
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full
      bg-white/10 dark:bg-black/20
      backdrop-blur-xl
      border-b border-white/10
      z-[9999]
      shadow-md
    "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-pink-500 dark:text-pink-300">
          Pojashri
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="
text-gray-700 dark:text-white
hover:text-pink-500
dark:hover:text-pink-400
active:text-pink-500
dark:active:text-pink-400
transition
text-lg
font-medium
py-2 px-3
rounded-lg
active:bg-pink-100/20
"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="
          md:hidden
          flex items-center justify-center
          w-10 h-10
          rounded-full
          bg-white/10 dark:bg-black/20
          backdrop-blur-lg
          border border-pink-400/40
          text-pink-500 dark:text-pink-300
          shadow-md
          relative z-[99999]
        "
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          mx-4 mb-4
          rounded-2xl
          bg-white/10 dark:bg-black/30
          backdrop-blur-xl
          border border-white/10
          shadow-xl
          px-6 py-6
          flex flex-col gap-5
        "
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
block
text-gray-700 dark:text-white
hover:text-pink-500
dark:hover:text-pink-400
active:text-pink-500
dark:active:text-pink-400
hover:bg-pink-100/40
active:bg-pink-200/40
dark:hover:bg-white/10
dark:active:bg-white/10
transition-all duration-200
text-lg
font-medium
py-3 px-4
rounded-xl
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