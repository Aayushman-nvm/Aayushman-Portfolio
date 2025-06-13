import { NavLink } from 'react-router-dom'

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Projects', link: '/projects' },
  { title: 'Resume', link: '/resume' },
  { title: 'Contact', link: '/contact' },
]

function NavBar() {
  return (
    <nav className="flex lg:justify-center justify-around gap-2 lg:bg-[#1e1e1e] bg-transparent backdrop-blur-md py-3 rounded-xl shadow-lg border border-[#2e3134]">
      {navItems.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.link}
          className={({ isActive }) =>
            `px-4 py-2 rounded-xl text-sm lg:text-base font-medium transition-all duration-200
            ${isActive
              ? 'text-amber-400 shadow-md'
              : 'hover:text-white/80 text-white '
            }`
          }
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default NavBar
