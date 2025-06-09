import React from 'react';
import { FaEye } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

function Projects() {
  const projects = [
    { name: "Isroverse", link: "https://isroverse.vercel.app/", category: "Web application", img: "../../public/project-img/isroverse-ss.png" },
    { name: "Midnight Blues", link: "https://midnight-blues.vercel.app/", category: "Web application", img: "../../public/project-img/midnightblues-ss.png" },
    { name: "Upskill", link: "https://upskill-learn.vercel.app/", category: "Website", img: "../../public/project-img/upskill-ss.png" },
    { name: "Pocketify", link: "https://pocketify.vercel.app/", category: "Web application", img: "../../public/project-img/pocketify-ss.png" },
    { name: "Sky Compass", link: "https://sky-compass-six.vercel.app/", category: "Web application", img: "../../public/project-img/skycompass-ss.png" },
    { name: "Flavour Dash", link: "https://flavour-dash.vercel.app/", category: "Web application", img: "../../public/project-img/flavourdash-ss.png" },
  ];

  return (
    <div className="text-white mb-14 md:mb-auto">
      <h1 className="text-3xl font-bold">
        <Typewriter
          words={['Projects']}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={120}
          deleteSpeed={40}
          delaySpeed={1000}
        />
      </h1>
      <div className='border-b-4 border-amber-200 w-[40px] mb-4 rounded-full'></div>
      <h2 className="text-xl mb-6 text-gray-300">Hosted Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <a
            href={project.link}
            key={idx}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-xl border border-[#333] bg-[#1a1a1a] shadow-md hover:shadow-lg transition"
          >
            {/* Thumbnail with hover overlay */}
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition duration-300 group-hover:blur-sm"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition">
                <FaEye size={24} className="text-white" />
              </div>
            </div>

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-400">{project.category}</p>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-xl mt-10 mb-2 text-gray-300">Unhosted Projects</h2>
      <p className="text-gray-500 italic">Coming soon...</p>
    </div>
  );
}

export default Projects;
