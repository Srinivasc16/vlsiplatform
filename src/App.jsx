import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LearningTracks } from './components/LearningTracks';
import { Projects } from './components/Projects';
import { InterviewPrep } from './components/InterviewPrep';
import { Roadmaps } from './components/Roadmaps';
import { Footer } from './components/Footer';
import { TopicDetail } from './pages/TopicDetail';
import { ProjectDetail } from './pages/ProjectDetail';
import { RoadmapDetail } from './pages/RoadmapDetail';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <main className="pb-24">
      <Hero />
      <LearningTracks />
      <Projects />
      <InterviewPrep />
      <Roadmaps />
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topic/:id" element={<TopicDetail />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/roadmap/:id" element={<RoadmapDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
