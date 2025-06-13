import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { LuSend } from "react-icons/lu";

function Contact() {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState('');
  const [failureMsg, setFailureMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setSuccessMsg('Message sent successfully!');
      form.current.reset();
    }).catch((error) => {
      setFailureMsg('Failed to send message.');
      console.error(error);
    });
  };

  const contacts = [
    {
      icon: <FaEnvelope size={18} />,
      label: "Email",
      value: "aayushmanjha.business@gmail.com",
      link: "mailto:aayushmanjha.business@gmail.com"
    },
    {
      icon: <FaTwitter size={18} />,
      label: "Twitter",
      value: "@White-nvm",
      link: "https://x.com/White_nvm"
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      value: "Aayushman Jha",
      link: "https://www.linkedin.com/in/aayushman-jha-b45a91287"
    },
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      value: "@Aayushman-nvm",
      link: "https://github.com/Aayushman-nvm"
    }
  ];

  return (
    <section className="text-white space-y-10 mb-14 lg:mb-auto">
      <div>
        <h1 className="text-3xl font-bold">
          <Typewriter
            words={['Contact']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={120}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h1>
        <div className="border-b-4 border-amber-200 w-[40px] mb-4 rounded-full"></div>
        <p className="text-gray-300 leading-relaxed">
          I’m always open to new opportunities, collaborations, and conversations. Whether it’s about a project, internship, idea, or just a hello — feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="space-y-4 bg-[#2e3134] p-6 rounded-xl shadow-md border border-[#3a3a3a]"
      >
        <div className="grid lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-3 rounded-xl bg-[#18191A] text-white border border-[#444]"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-3 rounded-xl bg-[#18191A] text-white border border-[#444]"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full p-3 rounded-xl bg-[#18191A] text-white border border-[#444]"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-amber-400 text-black rounded font-semibold hover:bg-amber-300 transition flex items-center gap-2"
        >
          <LuSend />
          Send Message
        </button>
        {successMsg && <p className="text-green-400 mt-2 border-2 border-green-400 rounded-lg py-2 px-2 flex items-center justify-center">{successMsg}</p>}
        {failureMsg && <p className="text-red-400 mt-2 border-2 border-red-400 rounded-lg py-2 px-2 flex items-center justify-center">{failureMsg}</p>}
      </form>

      {/* Other Contact Methods */}
      <div className="space-y-4">
        {contacts.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-[#2e3134] p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="p-2 rounded-xl border border-[#3a3a3a] bg-[#222] hover:bg-[#333] shadow-[inset_1px_1px_0_#555,inset_-1px_-1px_0_#111]">
              {item.icon}
            </div>
            <div className="flex flex-col items-start space-y-1">
              <h3 className="text-lg font-semibold text-amber-400">{item.label}</h3>
              <p className="text-sm text-gray-300">{item.value}</p>
              <button
                onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
                className="px-4 py-1 text-sm font-medium text-amber-300 hover:bg-amber-400 hover:text-amber-900 border-2 border-amber-500 rounded-lg shadow-md hover:shadow-lg transition duration-200"
              >
                Visit {item.label}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
