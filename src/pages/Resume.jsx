import { FaBookOpen } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';

function Resume() {
  const resume = {
    education: [
      {
        degree: "Bachelor of Engineering",
        stream: "Computer Science",
        year: "2023 – 2027",
        type: "Undergraduate",
        description: "I'm currently studying Computer Science Engineering, working on building a solid base in software development, data structures, and all that core stuff. Along the way, I’ve been part of a few projects and college activities that have helped me get better at coding and working with others."
      },
    ],
    experience: [
      {
        company: "Mimir",
        role: "React Developer",
        year: "February 2025 – May 2025",
        duration: "4 months",
        description:
          "Assisted in the development of the Nutrimentor platform prototype using React.js and Tailwind CSS. Collaborated with the team to implement responsive design and user-friendly interfaces, contributing to the overall functionality and aesthetics of the platform.",
      },
    ],
  };

  const resumeSkills = {
    languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    frontend: ["HTML", "CSS", "React", "Redux", "Tailwind", "Bootstrap"],
    backend: ["Node.js", "Express", "WebSockets"],
    databases: ["MongoDB", "MySQL"],
    tools: ["Git & GitHub", "Postman", "Playwright", "API Integration (including AI APIs)"],
    stacks: ["MERN", "Next.js"],
  };

  return (
    <div className="text-white mb-14 lg:mb-auto">
      <h1 className="text-3xl font-bold">
        <Typewriter
          words={['Resume']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </h1>
      <div className="border-b-4 border-amber-200 w-[40px] mb-8 rounded-full"></div>

      {/* Education Section */}
      <section className="space-y-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl border border-[#3a3a3a] bg-[#222] hover:bg-[#333] shadow-[inset_1px_1px_0_#555,inset_-1px_-1px_0_#111]">
            <FaBookOpen size={18} />
          </div>
          <h2 className="text-xl font-bold">Education</h2>
        </div>
        <div className="px-4 space-y-6">
          {resume.education.map((edu, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#444] pl-6 space-y-2"
            >
              <h3 className="text-lg font-semibold">{edu.degree}</h3>
              <p className="text-sm text-gray-300">{edu.stream} • {edu.type}</p>
              <p className="text-sm text-[#FFBF00]">{edu.year}</p>
              <p className="text-sm leading-relaxed text-gray-400">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4  mb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl border border-[#3a3a3a] bg-[#222] hover:bg-[#333] shadow-[inset_1px_1px_0_#555,inset_-1px_-1px_0_#111]">
            <FaBookOpen size={18} />
          </div>
          <h2 className="text-xl font-bold">Experience</h2>
        </div>
        <div className="px-4 space-y-6">
          {resume.experience.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-2 border-[#444] pl-6 space-y-2"
            >
              <h3 className="text-lg font-semibold">{exp.company}</h3>
              <p className="text-sm text-gray-300">{exp.role} • {exp.duration}</p>
              <p className="text-sm text-[#FFBF00]">{exp.year}</p>
              <p className="text-sm leading-relaxed text-gray-400">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Languages</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {resumeSkills.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Frontend</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {resumeSkills.frontend.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Backend</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {resumeSkills.backend.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Databases</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {resumeSkills.databases.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Stacks</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {resumeSkills.stacks.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Tools</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {resumeSkills.tools.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>


    </div>

  );
}

export default Resume;
