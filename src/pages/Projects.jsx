import { FaEye, FaGithub, FaInfoCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      name: "Isroverse",
      param: "isroverse",
      link: "https://isroverse.vercel.app/",
      category: "Web application",
      img: "/project-img/isroverse-ss.png",
      github: "https://github.com/Aayushman-nvm/ISRO-Mission-Control",
      hosted: true,
    },
    {
      name: "Meet-Media",
      param: "meet-media",
      link: null,
      category: "Web application",
      img: "/project-img/meetMedia-ss.png",
      github: "https://github.com/Aayushman-nvm/Meet-Media",
      hosted: false,
    },
    {
      name: "MOSDAC bot",
      param: "mosdac-bot",
      link: null,
      category: "Web application",
      img: "/project-img/mosdacBot-ss.png",
      github: "https://github.com/Aayushman-nvm/MOSDAC-bot",
      hosted: false,
    },
    {
      name: "2Brain",
      param: "2brain",
      link: "https://2-brain.vercel.app/",
      category: "Web application",
      img: "/project-img/2brain-ss.png",
      github: "https://github.com/Aayushman-nvm/2Brain",
      hosted: true,
    },
    {
      name: "Chat app",
      param: "chat-app",
      link: "https://chat-app-navy-eta.vercel.app/",
      category: "Web application",
      img: "/project-img/chatApp-ss.png",
      github: "https://github.com/Aayushman-nvm/Chat-app",
      hosted: true,
    },
    /*{
      name: "Staho",
      param: "staho",
      link: null,
      category: "Web application",
      img: "/project-img/flavourdash-ss.png",
      github: "https://github.com/Aayushman-nvm/Staho",
      hosted: false,
    },*/
  ];

  return (
    <div className="text-white mb-14 lg:mb-auto">
      <h1 className="text-3xl font-bold">
        <Typewriter
          words={["Projects"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </h1>
      <div className="border-b-4 border-amber-200 w-[40px] mb-4 rounded-full"></div>
      <h2 className="text-xl mb-6 text-gray-300">Hosted Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => project.hosted) // ✅ Only hosted projects
          .map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-[#333] bg-[#1a1a1a] shadow-md hover:shadow-lg transition"
            >
              {/* Thumbnail with conditional hover overlay */}
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                      <FaEye size={24} className="text-white" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Project Info */}
              <div className="p-4 flex justify-between items-center px-3">
                {/* Left: Project name & category */}
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>

                {/* Right: Buttons */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/button px-3 py-1 text-xs text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded transition flex items-center gap-1"
                    >
                      <FaGithub size={16} />
                      <span className="hidden md:group-hover/button:inline opacity-0 translate-x-1 transition-all duration-300 md:group-hover/button:opacity-100 md:group-hover/button:translate-x-0">
                        GitHub
                      </span>
                    </a>
                  )}
                  {project.param && (
                    <Link
                      to={`/projects/${project.param}`}
                      className="group/button px-3 py-1 text-xs text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded transition flex items-center gap-1"
                    >
                      <FaInfoCircle size={16} />
                      <span className="hidden md:group-hover/button:inline opacity-0 translate-x-1 transition-all duration-300 md:group-hover/button:opacity-100 md:group-hover/button:translate-x-0">
                        Details
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      <h2 className="text-xl mt-10 mb-2 text-gray-300">Unhosted Projects</h2>
      <p className="text-gray-500 italic mb-5">Coming soon...</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects
          .filter((project) => !project.hosted) // ✅ Only hosted projects
          .map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-[#333] bg-[#1a1a1a] shadow-md hover:shadow-lg transition"
            >
              {/* Thumbnail with conditional hover overlay */}
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                      <FaEye size={24} className="text-white" />
                    </div>
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Project Info */}
              <div className="p-4 flex justify-between items-center px-3">
                {/* Left: Project name & category */}
                <div>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-400">{project.category}</p>
                </div>

                {/* Right: Buttons */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/button px-3 py-1 text-xs text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded transition flex items-center gap-1"
                    >
                      <FaGithub size={16} />
                      <span className="hidden md:group-hover/button:inline opacity-0 translate-x-1 transition-all duration-300 md:group-hover/button:opacity-100 md:group-hover/button:translate-x-0">
                        GitHub
                      </span>
                    </a>
                  )}
                  {project.param && (
                    <Link
                      to={`/projects/${project.param}`}
                      className="group/button px-3 py-1 text-xs text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded transition flex items-center gap-1"
                    >
                      <FaInfoCircle size={16} />
                      <span className="hidden md:group-hover/button:inline opacity-0 translate-x-1 transition-all duration-300 md:group-hover/button:opacity-100 md:group-hover/button:translate-x-0">
                        Details
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
