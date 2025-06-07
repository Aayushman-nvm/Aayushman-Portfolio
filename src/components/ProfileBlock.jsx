import { useState, useEffect } from 'react'

function ProfileBlock({ isMobile }) {
  const [gitData, setGitData] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://api.github.com/users/Aayushman-nvm')
      const data = await res.json()
      setGitData(data)
    }
    getData()
  }, [])

  return (
    <div className="p-4">
      {/* Header for mobile */}
      {isMobile && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={gitData?.avatar_url}
              alt="Profile"
              className="w-14 h-14 rounded-xl object-cover border border-gray-600"
            />
            <div>
              <h2 className="font-bold">{gitData?.name}</h2>
              <p className="text-gray-400 text-xs">@{gitData?.login}</p>
            </div>
          </div>
          <button
            className="text-sm text-amber-400 underline"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            {isExpanded ? 'Close' : 'Open'}
          </button>
        </div>
      )}

      {/* Expanded info */}
      {(isExpanded || !isMobile) && (
        <div className="mt-6 space-y-3">
          {!isMobile && (
            <div className="text-center">
              <img
                src={gitData?.avatar_url}
                alt="Profile"
                className="w-24 h-24 mx-auto rounded-2xl border border-gray-600"
              />
              <h2 className="text-xl font-bold mt-2">{gitData?.name}</h2>
              <p className="text-sm text-gray-400">@{gitData?.login}</p>
            </div>
          )}

          <p className="text-sm text-gray-300">{gitData?.bio}</p>

          <div className="flex justify-center gap-4 mt-4">
            <a
              href={gitData?.html_url}
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              {/* GitHub icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                
              </svg>
            </a>
            <a
              href="https://x.com/White_nvm"
              className="text-gray-400 hover:text-white transition"
              target="_blank"
              rel="noreferrer"
            >
              {/* Twitter icon */}
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                
              </svg>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileBlock
