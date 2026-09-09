import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import EngineeringChallenges from './components/EngineeringChallenges';
import Architecture from './components/Architecture';
import GithubProfile from './components/GithubProfile';
import ResumeCTA from './components/ResumeCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-700 font-sans selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <EngineeringChallenges />
      <Skills />
      <Architecture />
      <About />
      <GithubProfile />
      <ResumeCTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
