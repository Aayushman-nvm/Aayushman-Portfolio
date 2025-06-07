import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import ProfileBlock from './ProfileBlock'

function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white px-2 py-2 gap-2 md:gap-8">
      {/* Sidebar/Profile */}
      <aside
        className={`${
          isMobile ? 'min-w-[320px] max-w-full' : 'w-1/3 max-w-[300px]'
        } md:h-[100vh] rounded-2xl border border-[#2e3134] bg-[#202124] shadow-md`}
      >
        <ProfileBlock isMobile={isMobile} />
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav */}
        <div className="hidden md:block mb-2">
          <NavBar />
        </div>

        {/* Page Content */}
        <main className="flex-1 p-4 bg-[#18191A] rounded-xl border border-[#2e3134] shadow-inner overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Bottom Nav on mobile */}
      {isMobile && (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[96%] z-50">
          <NavBar />
        </div>
      )}
    </div>
  )
}

export default Layout
