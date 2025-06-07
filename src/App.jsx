import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
function App() {

  return (
    <div className='md:flex items-center justify-center min-h-screen bg-[#0e1013] md:p-24'>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/Contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
