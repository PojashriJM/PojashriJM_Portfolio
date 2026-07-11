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
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full
      z-[9999]

      bg-white/90
      dark:bg-[#08111f]/80

      backdrop-blur-xl

      border-b
      border-slate-200
      dark:border-cyan-500/10
    "
    >
      <div className="max-w-7xl mx-auto h-[74px] px-8 flex items-center">

        {/* Logo */}

        <div className="mr-16 flex items-center gap-1">

          <span className="text-3xl font-bold text-slate-900 dark:text-white">
            poja
          </span>

          <span className="text-3xl font-bold text-cyan-500 dark:text-cyan-400">
            shri
          </span>

        </div>

        {/* Desktop */}

        <ul className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (

            <li key={link}>

              <a
                href={`#${link.toLowerCase()}`}
                className="
                relative

                text-[17px]
                font-medium

                text-slate-600
                dark:text-slate-300

                transition-all
                duration-300

                hover:text-cyan-500
                dark:hover:text-cyan-300

                after:absolute
                after:left-0
                after:-bottom-[8px]

                after:h-[2px]
                after:w-0

                after:bg-cyan-500
                dark:after:bg-cyan-300

                after:transition-all
                after:duration-300

                hover:after:w-full
                "
              >
                {link}
              </a>

            </li>

          ))}

        </ul>

        {/* Theme Toggle */}

        <div className="ml-auto">

          {/* Put your ThemeToggle component here */}

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
          ml-auto
          md:hidden

          flex
          items-center
          justify-center

          w-10
          h-10

          rounded-xl

          border
          border-slate-300
          dark:border-cyan-500/20

          bg-white
          dark:bg-cyan-500/5

          text-cyan-500
          dark:text-cyan-300

          hover:bg-cyan-50
          dark:hover:bg-cyan-500/10

          transition
          "
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div
          className="
          md:hidden

          mx-5
          mb-5

          rounded-2xl

          bg-white
          dark:bg-[#08111f]/95

          border
          border-slate-200
          dark:border-cyan-500/15

          backdrop-blur-xl

          shadow-xl

          p-6

          flex
          flex-col

          gap-4
          "
        >

          {navLinks.map((link) => (

            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
              rounded-xl

              px-4
              py-3

              text-slate-700
              dark:text-slate-300

              hover:text-cyan-500
              dark:hover:text-cyan-300

              hover:bg-cyan-50
              dark:hover:bg-cyan-500/10

              transition-all
              duration-200
              "
            >
              {link}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}