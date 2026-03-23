import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import CoreExpertise from './components/CoreExpertise';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen app-surface">
      <Header />
      <Hero />
      <About />
      <Education />
      <CoreExpertise />
      <Skills />
      <Internship />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

