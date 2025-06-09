import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion';

import Layout from './components/Layout'
import PageWrapper from './components/PageWrapper';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
function App() {

  const location = useLocation();

  return (
    <div className='md:flex items-center justify-center min-h-screen bg-[#0e1013] md:p-24'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<PageWrapper><Home /></PageWrapper>}
            />
            <Route
              path="/resume"
              element={<PageWrapper><Resume /></PageWrapper>}
            />
            <Route
              path="/resume"
              element={<PageWrapper><Resume /></PageWrapper>}
            />
            <Route
              path="/projects"
              element={<PageWrapper><Projects /></PageWrapper>}
            />
            <Route
              path="/contact"
              element={<PageWrapper><Contact /></PageWrapper>}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
