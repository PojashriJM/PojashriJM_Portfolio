"use client";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import Languages from "@/components/Languages";
import Navbar from "@/components/navbar";
export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
      <Navbar />
      <main className="pt-10 min-h-screen bg-[#FFF8FC] text-[#4A2036] dark:bg-[#12040D] dark:text-[#E8DEE4] transition-colors duration-300">
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl" style={{ animation: "float 8s ease-in-out infinite" }} >
          </div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" style={{ animation: "float 10s ease-in-out infinite" }} >
          </div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl" style={{ animation: "float 12s ease-in-out infinite" }} >
          </div>
        </div>
        <div className="fixed top-4 right-20 md:right-5 z-[99999]">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
w-10 h-10
flex items-center justify-center
rounded-full
bg-white/10 dark:bg-black/20
backdrop-blur-lg
border border-pink-400/40
text-xl
shadow-lg
hover:scale-105
transition
"
          >
            {darkMode ? "☀" : "🌙"}
          </button>
        </div>
        {/* Hero Section */}
        <section id="home" className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div>
              <p className="text-[#C43C88] dark:text-[#E164A8] font-semibold mb-3">
                Welcome to my portfolio
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight whitespace-nowrap">
                Hi, I'm{" "}
                <span className="text-[#C43C88] dark:text-[#E164A8]">
                  Poja Shri J M
                </span>
              </h1>

              <h2 className="text-2xl mt-4 text-[#6B3B56] dark:text-[#D9CCD4]">
                AI & Data Science Student
              </h2>

              <p className="mt-6 text-lg text-[#7A4C64] dark:text-[#BDA9B6] leading-relaxed">
                Passionate about Artificial Intelligence, Machine Learning,
                Data Science, and building impactful real-world applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl border border-[#C43C88] text-[#C43C88] hover:bg-[#F8EAF2] dark:border-[#E164A8] dark:text-[#E8DEE4] dark:hover:bg-[#220814] transition"
                >
                  Contact Me
                </a>



                {/* Download */}
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 rounded-xl bg-[#C43C88] hover:bg-[#D46AA4] dark:bg-[#E164A8] dark:hover:bg-[#DDB7CF] text-white transition"
                >
                  Download Resume
                </a>



                <div
                  className="
    inline-flex items-center gap-2
    px-5 py-2 rounded-full mb-6
    border backdrop-blur-lg
    transition-all duration-300 hover:scale-105

    bg-gradient-to-r from-pink-100 to-purple-100
    border-purple-200 text-purple-700
    shadow-[0_4px_20px_rgba(168,85,247,0.15)]

    dark:from-white/10 dark:to-purple-500/10
    dark:border-purple-400/30 dark:text-purple-300
    dark:shadow-[0_4px_25px_rgba(168,85,247,0.25)]
  "

>
  ✨ Available for Internships & Full-Time Opportunities
</div>
          </div>
 </div>
          {/* Right */}
         <div className="flex justify-center">
  <div className="p-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl">
    
    <div className="w-72 h-72 rounded-full overflow-hidden relative z-10">
      <img 
        src={"Poja shri.jpeg"} 
        className="w-full h-full object-cover"
        alt="Poja Shri"
      />
    </div>

  </div>
</div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-[#C43C88] dark:text-[#E164A8] font-bold mb-8">
          About Me
        </h2>

        <div className="bg-[#F8EAF2] dark:bg-[#220814] p-8 rounded-3xl shadow-lg">
          <p className="text-lg leading-relaxed text-[#5A3147] dark:text-[#D9CCD4]">
            I am a passionate pre-final year AI & Data Science student with strong interest in
            Machine Learning, NLP, Deep Learning, and Web Development.
            I enjoy building innovative projects that solve real-world problems.
          </p>
        </div>
      </section>
  
        {/* Skills */}
        <section id="skills" is="Skills" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl text-[#C43C88] dark:text-[#E164A8] font-bold mb-8">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              "Python",
              "Machine Learning",
              "SQL",
              "Java",
              "JavaScript",
              "React",
              "HTML",
              "Tailwind CSS",
              "GitHub",
              "Firebase",
              "Cassandra",
              "LangChain",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-[#F8EAF2] dark:bg-[#220814] p-5 rounded-2xl text-center font-semibold shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
        <Languages />
        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl text-[#C43C88] dark:text-[#E164A8] font-bold mb-8">
            Experience
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                position: "AI & DS Intern",
                company: "Zeptoware Systems",
                date: "Dec 2025 - Jan 2026",
                icon: <LuBrainCircuit />,
                contribution:
                  "Built NLP-based Fake Job Detection System using ML and Deep Learning.",
              },
              {
                position: "Frontend Developer Intern",
                company: "Parkqwik Pvt. Ltd.",
                date: "Jun 2025 - Jul 2025",
                icon: <MdOutlineComputer />,
                contribution:
                  "Designed and developed 5+ responsive UI components using HTML, CSS, and JavaScript.",
              },
              {
                position: "Data Science Intern",
                company: "Nexila Technologies",
                date: "Dec 2024 - Jan 2025",
                icon: <FaDatabase />,
                contribution:
                  "Worked on machine learning models, data cleaning, and predictive analytics.",
              },
            ].map((experience) => (
              <div
                key={experience.position}
                className="bg-[#F8EAF2] dark:bg-[#220814] p-6 rounded-3xl shadow-lg hover:scale-105 transition duration-300"
              >
                <div className="text-4xl mb-4">{experience.icon}</div>

                <h3 className="text-xl font-bold mb-2">
                  {experience.position}
                </h3>

                <p className="text-[#C43C88] dark:text-[#E164A8] font-semibold">
                  {experience.company}
                </p>

                <p className="text-sm text-[#8B6479] dark:text-[#BDA9B6] mt-1 mb-4">
                  {experience.date}
                </p>

                <p className="leading-relaxed text-[#5A3147] dark:text-[#D9CCD4]">
                  {experience.contribution}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl text-[#C43C88] dark:text-[#E164A8] font-bold mb-10">
            Education
          </h2>

          <div className="space-y-6">

            {/* College */}
            <div className="bg-[#F8EAF2] dark:bg-[#220814] p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold">
                B.Tech – Artificial Intelligence & Data Science
              </h3>

              <p className="text-[#C43C88] dark:text-[#E164A8] font-semibold mt-1">
                Jerusalem College of Engineering, Chennai
              </p>

              <p className="text-sm text-[#8B6479] dark:text-[#BDA9B6] mt-1">
                2023 – Present
              </p>

              <p className="mt-2 font-medium">
                CGPA: 9.2
              </p>
            </div>

            {/* School (Optional) */}
            <div className="bg-[#F8EAF2] dark:bg-[#220814] p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold">
                HSC
              </h3>

              <p className="text-[#C43C88] dark:text-[#E164A8] font-semibold mt-1">
                Jaigopal Garodia Girls Hr Sec School, Chennai
              </p>

              <p className="text-sm text-[#8B6479] dark:text-[#BDA9B6] mt-1">
                2023
              </p>

              <p className="mt-2 font-medium">
                89%
              </p>
            </div>
            <div className="bg-[#F8EAF2] dark:bg-[#220814] p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-bold">
                SSLC
              </h3>

              <p className="text-[#C43C88] dark:text-[#E164A8] font-semibold mt-1">
                Rajkumar sulochana Mat. hr. sec. school, Chennai
              </p>

              <p className="text-sm text-[#8B6479] dark:text-[#BDA9B6] mt-1">
                2021
              </p>

              <p className="mt-2 font-medium">
                94%
              </p>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl text-[#C43C88] dark:text-[#E164A8] font-bold mb-8">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "DocMind AI",
                desc: "Built an AI-powered document intelligence platform using LLMs + RAG for answering questions from uploaded PDFs and documents.",
                github: "https://github.com/PojashriJM/DocMindAI",
              },
              {
                title: "Fake Job Detection",
                desc: "Built end-to-end NLP pipeline and benchmarked 4 models with 18% reduction in false positives.",
                github: "https://github.com/PojashriJM/FakeJobDetection",
              },
              {
                title: "Heart Disease Prediction",
                desc: "Achieved 92% accuracy using ML models with cross-validation and feature normalization.",
                github: "https://github.com/PojashriJM/HeartDiseasePrediction",
              },
              {
                title: "Employee Performance Prediction",
                desc: "Built Streamlit app for predicting employee performance using HR metrics.",
                github: "https://github.com/PojashriJM/EmployeePerformancePrediction",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="relative bg-[#F8EAF2] dark:bg-[#220814] p-6 rounded-3xl shadow-lg hover:scale-105 transition"
              >

                {/* GitHub Icon */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-5 right-5 text-2xl text-[#C43C88] dark:text-[#E164A8] hover:scale-125 transition"
                >
                  <FaGithub />
                </a>

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-[#5A3147] dark:text-[#D9CCD4]">
                  {project.desc}
                </p>

              </div>
            ))}
          </div>
        </section>
        <section id="participations" className="py-24 relative overflow-hidden">
          <h2 className="text-4xl text-center font-bold text-[#C43C88] dark:text-[#E164A8] mb-12">
            Achievements & Participation
          </h2>

          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFF8FC] dark:from-[#12040D] to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFF8FC] dark:from-[#12040D] to-transparent z-10"></div>

          {/* Scroll Wrapper */}
          <div className="relative overflow-hidden">
            <div className="flex w-max gap-6 animate-marquee pause-animation">

              {[...[
                {
                  title: "TNWISE Women Hackathon",
                  img: "/cert1.jpeg",
                  desc: "Participated in the TNWISE Women Hackathon held at Rajalakshmi Engineering College and advanced to Round 2 among shortlisted teams."
                },
                {
                  title: "AIWS Women Hackathon",
                  img: "/cert2.png",
                  desc: "Participated in the All India Women Start-a-thon and advanced to Round 2 by presenting innovative problem-solving ideas."
                },
                {
                  title: "EY International Techkathon",
                  img: "/cert3.png",
                  desc: "Participated in the EY International Techathon and advanced to Round 2 in a competitive technical challenge."
                },
                {
                  title: "International Conference IETE",
                  img: "/conference.jpeg",
                  desc: "Participated in an international conference conducted by IETE, gaining exposure to emerging technologies and research discussions."
                },
                {
                  title: "Science Expo",
                  img: "/scienceexpo.jpeg",
                  desc: "Presented an Offline Voice Assistant project at a science expo, demonstrating AI and voice recognition concepts."
                },
                {
                  title: "AI Agents Workshop",
                  img: "/workshop1.jpeg",
                  desc: "Attended an AI Agents workshop conducted by Parkqwik, exploring intelligent AI agent concepts and applications."
                },
                {
                  title: "IOT Workshop",
                  img: "/workshop2.jpeg",
                  desc: "Completed an offline IoT workshop conducted by PanTech E-Learning with practical sensor training experience."
                },
                {
                  title: "Langchain Workshop",
                  img: "/workshop3.png",
                  desc: "Participated in a LangChain workshop organized by Innomatics Research Labs, exploring AI workflow and application development concepts."
                }
              ],
              ...[
                {
                  title: "TNWISE Women Hackathon",
                  img: "/cert1.jpeg",
                  desc: "Participated in the TNWISE Women Hackathon held at Rajalakshmi Engineering College and advanced to Round 2 among shortlisted teams."
                },
                {
                  title: "AIWS Women Hackathon",
                  img: "/cert2.png",
                  desc: "Participated in the All India Women Start-a-thon and advanced to Round 2 by presenting innovative problem-solving ideas."
                },
                {
                  title: "EY International Techkathon",
                  img: "/cert3.png",
                  desc: "Participated in the EY International Techathon and advanced to Round 2 in a competitive technical challenge."
                },
                {
                  title: "International Conference IETE",
                  img: "/conference.jpeg",
                  desc: "Participated in an international conference conducted by IETE, gaining exposure to emerging technologies and research discussions."
                },
                {
                  title: "Science Expo",
                  img: "/scienceexpo.jpeg",
                  desc: "Presented an Offline Voice Assistant project at a science expo, demonstrating AI and voice recognition concepts."
                },
                {
                  title: "AI Agents Workshop",
                  img: "/workshop1.jpeg",
                  desc: "Attended an AI Agents workshop conducted by Parkqwik, exploring intelligent AI agent concepts and applications."
                },
                {
                  title: "IOT Workshop",
                  img: "/workshop2.jpeg",
                  desc: "Completed an offline IoT workshop conducted by PanTech E-Learning with practical sensor training experience."
                },
                {
                  title: "Langchain Workshop",
                  img: "/workshop3.png",
                  desc: "Participated in a LangChain workshop organized by Innomatics Research Labs, exploring AI workflow and application development concepts."
                }
              ]].map((item, index) => (
                <div
                  key={index}
                  className="w-[300px] flex-shrink-0 bg-[#F8EAF2] dark:bg-[#220814] rounded-3xl shadow-lg p-4 hover:scale-105 transition duration-300"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-xl mb-3"
                  />

                  <h3 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A3147] dark:text-[#D9CCD4] break-words whitespace-normal">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>
          </div>
          </section>
       {/* Contact */}
{/* Contact */}
<section
  id="contact"
  className="max-w-6xl mx-auto px-4 md:px-6 py-20"
>

  <h2 className="text-3xl md:text-4xl font-bold text-[#C43C88] dark:text-[#E164A8] mb-12">
    Contact
  </h2>

  <div className="bg-[#F8EAF2] dark:bg-[#220814] p-5 md:p-10 rounded-3xl shadow-lg grid md:grid-cols-2 gap-10 md:gap-16 items-start">

    {/* Left Side */}
    <div className="space-y-6 md:space-y-8">

      {/* Email */}
      <div className="flex items-start gap-4 border-b border-gray-700 pb-6 md:hover:translate-x-2 transition-all duration-300">

        <div className="text-2xl md:text-3xl text-[#C43C88] mt-1 flex-shrink-0">
          <IoMdMail />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            Email
          </h3>

          <a
            href="mailto:pojashrijm2006@gmail.com"
            className="text-sm md:text-lg hover:text-[#C43C88] transition break-all"
          >
            pojashrijm2006@gmail.com
          </a>
        </div>
      </div>


      {/* GitHub */}
      <div className="flex items-start gap-4 border-b border-gray-700 pb-6 md:hover:translate-x-2 transition-all duration-300">

        <div className="text-2xl md:text-3xl text-[#C43C88] mt-1 flex-shrink-0">
          <FaGithub />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            GitHub
          </h3>

          <a
            href="https://github.com/PojashriJM"
            target="_blank"
            className="text-sm md:text-lg hover:text-[#C43C88] transition break-all"
          >
            github.com/PojashriJM
          </a>
        </div>
      </div>


      {/* LinkedIn */}
      <div className="flex items-start gap-4 border-b border-gray-700 pb-6 md:hover:translate-x-2 transition-all duration-300">

        <div className="text-2xl md:text-3xl text-[#C43C88] mt-1 flex-shrink-0">
          <FaLinkedin />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/poja-shri-jm/"
            target="_blank"
            className="text-sm md:text-lg hover:text-[#C43C88] transition break-all"
          >
            linkedin.com/in/poja-shri-jm
          </a>
        </div>
      </div>


      {/* LeetCode */}
      <div className="flex items-start gap-4 md:hover:translate-x-2 transition-all duration-300">

        <div className="text-2xl md:text-3xl text-[#C43C88] mt-1 flex-shrink-0">
          <SiLeetcode />
        </div>

        <div className="min-w-0">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            LeetCode
          </h3>

          <a
            href="https://leetcode.com/u/PojashriJM/"
            target="_blank"
            className="text-sm md:text-lg hover:text-[#C43C88] transition break-all"
          >
            https://leetcode.com/u/PojashriJM/
          </a>
        </div>
      </div>

    </div>


    {/* Right Side Form */}
    <form className="space-y-5 md:space-y-6">

      <div>
        <label className="block mb-2 text-sm md:text-lg">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-400 rounded-full px-5 py-3 bg-transparent text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>


      <div>
        <label className="block mb-2 text-sm md:text-lg">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-400 rounded-full px-5 py-3 bg-transparent text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>


      <div>
        <label className="block mb-2 text-sm md:text-lg">
          Subject
        </label>

        <input
          type="text"
          placeholder="Enter subject"
          className="w-full border border-gray-400 rounded-full px-5 py-3 bg-transparent text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>


      <div>
        <label className="block mb-2 text-sm md:text-lg">
          Message
        </label>

        <textarea
          placeholder="Write your message..."
          className="w-full border border-gray-400 rounded-3xl px-5 py-3 bg-transparent h-40 resize-none text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-pink-400"
        ></textarea>
      </div>


      <button
        type="submit"
        className="bg-[#C43C88] hover:bg-[#a92f73] text-white px-8 py-3 rounded-full transition duration-300 text-sm md:text-base"
      >
        Send
      </button>

    </form>

  </div>

</section>

        {/* Footer */}
        <footer className="text-center py-8 text-[#8B6479] dark:text-[#BDA9B6]">
          Made with 🩷 by Poja Shri J M.
        </footer>

      </main>
    </>
  );
}