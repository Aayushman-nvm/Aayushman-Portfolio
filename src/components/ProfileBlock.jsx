import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaTwitter, FaMapMarkerAlt, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Profile from '../../public/project-img/profile.jpg'

function ProfileBlock({ isMobile }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { name: "GitHub", text: "Aayushman-nvm", url: "https://github.com/Aayushman-nvm", icon: <FaGithub size={18} /> },
    { name: "Twitter", text: "White-nvm", url: "https://x.com/White_nvm", icon: <FaTwitter size={18} /> },
    { name: "Location", text: "Karnataka, India", url: "https://www.google.com/maps/place/Bengaluru,+Karnataka", icon: <FaMapMarkerAlt size={18} /> },
    { name: "Birthday", text: "January 31, 2006", url: null, icon: <FaCalendarAlt size={18} /> }
  ];

  return (
    <div className="p-4 text-white">
      {/* Header for mobile */}
      {isMobile && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={Profile}
              alt="Profile"
              className="w-14 h-14 rounded-xl object-cover border border-gray-600"
            />
            <div>
              <h2 className="font-bold">Aayushman</h2>
              <p className="text-gray-400 text-xs">@Aayushman-nvm</p>
            </div>
          </div>
          <button
            className="text-sm text-amber-400"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>
      )}

      {/* Expanded info */}
      {(isExpanded || !isMobile) && (
        <div className="mt-6 space-y-4 lg:text-center">
          {!isMobile && (
            <div className="text-center">
              <img
                src={Profile}
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-2xl border border-gray-600"
              />
              <h2 className="text-xl font-bold mt-2">Aayushman</h2>
              <p className="text-sm text-gray-400">@Aayushman-nvm</p>
            </div>
          )}

          <p className="text-sm text-gray-300 italic border-b border-[#444] pb-2">
            <Typewriter
              words={['The neighborhood coder at your service!']}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </p>

          {/* Info links */}
          <div className="space-y-3 mt-4 px-4">
            {socialLinks.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                {/* Icon block */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl transition border border-[#3a3a3a] bg-[#222] hover:bg-[#333] shadow-[inset_1px_1px_0_#555,inset_-1px_-1px_0_#111]"
                >
                  {item.icon}
                </a>

                {/* Text block (stacked vertically) */}
                <div className="flex flex-col text-sm text-left">
                  <span className="text-gray-400">{item.name}</span>
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileBlock;
