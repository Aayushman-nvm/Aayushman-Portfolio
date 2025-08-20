import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { IoReturnDownBack } from "react-icons/io5";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetails() {
  const { projectName } = useParams();
  const [project, setProject] = useState(null);

  const allProjects = [
    {
      name: "Isroverse",
      param: "isroverse",
      description: [
        "ISRO lacks a proper mission dashboard",
        "Official site is hard to navigate",
        "This project uses public community APIs for mission data",
        "Displays missions, spacecrafts, launches, collaborations",
        "Dashboard shows payloads with highest success rate",
        "Tracks total launches and spacecrafts",
        "Visualizes successful missions per year",
        "Data may be inaccurate due to unofficial APIs",
      ],
      tech: ["React", "Redux Toolkit", "Tailwind CSS", "Recharts", "Spline"],
      link: "https://isroverse.vercel.app/",
      category: "Web application",
      img: "/project-img/isroverse-ss.png",
      video: null,
      github: "https://github.com/Aayushman-nvm/ISRO-Mission-Control",
      hosted: true,
    },
    {
      name: "Meet-Media",
      param: "meet-media",
      description: [
        "Social media clone project",
        "Built to understand social media app structure",
        "Explores basic database design and data flow",
        "Supports posting, liking, commenting, and friend system",
        "Created to practice the MERN stack",
        "Mimics core functionality of real social platforms",
      ],
      tech: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "Formik & Yup",
        "Multer",
      ],
      link: null,
      category: "Web application",
      img: "/project-img/meetMedia-ss.png",
      video: null,
      github: "https://github.com/Aayushman-nvm/Meet-Media",
      hosted: false,
    },
    {
      name: "MOSDAC bot",
      param: "mosdac-bot",
      description: [
        "An AI helper bot designed to simplify querying the MOSDAC website by ISRO",
        "MOSDAC site is complex and hard to navigate for users and researchers",
        "This project uses a Playwright-based web crawler to scrape relevant site data",
        "Scraped data is used as context for the Gemini API to generate accurate answers",
        "User queries are matched against scraped content for high relevance",
        "If no match is found, falls back to Gemini’s general knowledge with a disclaimer",
        "Fully modular - can be deployed on any website",
        "To set up on a new site, just run the crawler script to collect web data",
        "Improves user experience and accessibility for research and exploration",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "Gemini API",
        "Playwright",
      ],
      link: null,
      category: "Web application",
      img: "/project-img/mosdacBot-ss.png",
      video: null,
      github: "https://github.com/Aayushman-nvm/MOSDAC-bot",
      hosted: false,
    },
    {
      name: "2Brain",
      param: "2brain",
      description: [
        "A second-brain web app to store and organize various types of content",
        "Supports saving links, images, videos, tweets, and more in one unified space",
        "Content can be viewed all together or filtered by category",
        "Users can share their brain via a custom shareable link",
        "Shared links can be terminated at any time for privacy control",
        "Users can delete their own saved content at any point",
        "Allows viewing other users' shared brains through custom links",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
        "TypeScript",
      ],
      link: "https://2-brain.vercel.app/",
      category: "Web application",
      video: "/project-vid/2brain-recording.mp4",
      img: null,
      github: "https://github.com/Aayushman-nvm/2Brain",
      hosted: true,
    },
    {
      name: "Chat app",
      param: "chat-app",
      description: [
        "A web-based chat application built using WebSockets",
        "Designed to understand the workings of real-time chat systems",
        "Implements message history and user data storage",
        "Ensures chat privacy — users cannot see conversations between other users",
        "Chats are loaded individually based on the participants involved",
        "Includes online/offline status indicators for users",
        "User is marked offline automatically if client socket stops responding to the server periodically",
      ],
      tech: [
        "Node.js",
        "Express.js",
        "WebSocket (ws)",
        "MongoDB",
        "React",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      link: "https://chat-app-navy-eta.vercel.app/",
      category: "Web application",
      img: "/project-img/chatApp-ss.png",
      video: null,
      github: "https://github.com/Aayushman-nvm/Chat-app",
      hosted: true,
    },
  ];

  useEffect(() => {
    const found = allProjects.find((p) => p.param === projectName);
    setProject(found);
  }, [projectName]);

  if (!project) {
    return (
      <div className="text-white p-8 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <p className="text-gray-400 mb-6">
            The project you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-4 py-2 text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded-lg transition-all duration-200"
          >
            <IoReturnDownBack size={16} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white mb-14 lg:mb-auto max-w-6xl mx-auto px-4 sm:px-6">
      {/* Title */}
      <div className="flex items-start justify-between mb-8 flex-col md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">
            <Typewriter
              words={[project.name]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={120}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </h1>
          <div className="border-b-4 border-amber-200 w-[40px] mb-2 rounded-full"></div>
          <p className="text-gray-400">{project.category}</p>
        </div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/20 mt-4 md:mt-0"
        >
          <IoReturnDownBack size={16} />
          <span className="text-white">Go Back</span>
        </Link>
      </div>

      {/* MEDIA SECTION */}
      <div className="relative mb-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
        <div className="relative">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              controls
              className="rounded-xl w-full max-w-4xl shadow-2xl shadow-black/50 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : project.img ? (
            <img
              src={project.img}
              alt={project.name}
              className="rounded-xl w-full max-w-4xl shadow-2xl shadow-black/50 transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="rounded-xl w-full max-w-4xl h-[320px] flex items-center justify-center bg-gray-800 text-gray-400 text-sm italic border border-gray-700/50 animate-pulse">
              <span>Content not available</span>
            </div>
          )}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.hosted
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
              }`}
            >
              {project.hosted ? "Live" : "Repository Only"}
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {project.link && project.hosted && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 text-sm bg-amber-500 hover:bg-amber-400 text-amber-900 font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/30 hover:scale-105"
          >
            <FaExternalLinkAlt size={14} />
            <span>View Live Demo</span>
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 px-4 py-2 text-sm text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/20"
          >
            <FaGithub size={16} />
            <span>View Code</span>
          </a>
        )}
      </div>

      {/* Details */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-amber-200">
              About this project
            </h2>
            <div className="space-y-3">
              {project.description &&
                project.description.map((desc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300 leading-relaxed">{desc}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {project.tech && project.tech.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-200">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-amber-500/50 hover:text-amber-300 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/50">
            <h3 className="text-lg font-semibold mb-3 text-amber-200">
              Project Status
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span
                  className={
                    project.hosted ? "text-green-400" : "text-gray-400"
                  }
                >
                  {project.hosted ? "Live & Deployed" : "Complete & offline"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Type:</span>
                <span className="text-gray-300">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Source:</span>
                <span className="text-gray-300">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Back Button */}
      <div className="md:hidden mt-8 pt-6 border-t border-gray-700">
        <Link
          to="/projects"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded-lg transition-all duration-200"
        >
          <IoReturnDownBack size={16} />
          <span>Back to Projects</span>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetails;
