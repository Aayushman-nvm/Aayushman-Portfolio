import { Typewriter } from 'react-simple-typewriter';

function Home() {
  const descObj = {
    description: [
      "I'm a front-end web developer based in Bangalore, now diving into full-stack tech. I love turning ideas and real-world problems into clean, user-friendly web apps that look good and work great."
    ],
    workingOn: [
      {
        title: "Web Development",
        text: "Making high quality development of sites in projects and professional levels"
      },
      {
        title: "Exploring",
        text: "Exploring AI integrated applications, MERN, and bit of Web3"
      },
      {
        title: "Hobbies",
        text: "I'm also an artist who sketches every now and then"
      }
    ]
  };

  const skills = {
    languages: ["C", "C++", "Java", "Python"],
    webDev: ["HTML", "CSS", "JavaScript"],
    libraries: ["React", "Redux", "Tailwind CSS", "Bootstrap CSS"],
  };

  return (
    <section className="text-white space-y-6 mb-14 lg:mb-auto">
      <div>
        <h1 className="text-3xl font-bold">
          <Typewriter
            words={['About Me']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h1>
        <div className='border-b-4 border-amber-200 w-[40px] mb-4 rounded-full'></div>
        <div className="space-y-4 text-gray-300">
          {descObj.description.map((item, idx) => (
            <p key={idx} className="leading-relaxed">{item}</p>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">What I’m Doing</h2>
        <div className="grid lg:grid-cols-3 gap-4">
          {descObj.workingOn.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Languages</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {skills.languages.map((lang, idx) => (
              <li key={idx}>{lang}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Web Development</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {skills.webDev.map((web, idx) => (
              <li key={idx}>{web}</li>
            ))}
          </ul>
        </div>
        <div className="bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-amber-400 mb-2">Libraries and Frameworks</h3>
          <ul className="list-disc pl-5 text-gray-300">
            {skills.libraries.map((lib, idx) => (
              <li key={idx}>{lib}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
