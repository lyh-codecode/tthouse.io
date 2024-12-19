import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import SiteSection from './components/SiteSection/index'
import Navbar from './components/Navbar'
import Studio from './views/Studio'
import KnowledgeBase from './views/KnowledgeBase'
import PracticeProjects from './views/PracticeProjects'
import Planning from './views/Planning'
import AboutMe from './views/about/AboutMe'; // 导入 AboutMe 组件
import PageLayout from './components/knowledge-Layout'


function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // 默认值为 true
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('light-theme', !isDark);
  }, [isDark]);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        <div className="container" style={{ flex: 1 }}>
          <Routes>
            <Route path="/knowledge-base" element={<KnowledgeBase isDark={isDark} />} />
            <Route path="/practice-projects" element={<PracticeProjects />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/index" element={<SiteSection isDark={isDark} />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path='/' element={<Navigate to="/index" />} />
            <Route path="*" element={<Navigate to="/index" />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
