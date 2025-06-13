import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import ProfileBlock from './ProfileBlock'

function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="mx-auto flex flex-col lg:flex-row min-h-screen text-white px-2 py-2 gap-4">
      {/* Sidebar/Profile */}
      <aside
        className="
          w-full
          lg:w-[300px]
          lg:sticky lg:top-0 lg:h-screen
          max-h-screen overflow-y-auto
          rounded-2xl border border-[#152433] bg-[#202124] shadow-md
        "
      >
        <ProfileBlock isMobile={isMobile} />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Nav on desktop */}
        <div className="hidden lg:block mb-2">
          <NavBar />
        </div>

        {/* Page Content */}
        <main className="flex-1 min-w-0 p-4 bg-[#18191A] rounded-xl border border-[#2e3134] shadow-inner overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Bottom Nav on mobile */}
      {isMobile && (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-[100%] z-50">
          <NavBar />
        </div>
      )}
    </div>
  )
}

export default Layout
