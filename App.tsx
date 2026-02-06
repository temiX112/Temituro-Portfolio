import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Results from './components/Results';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal text-offwhite selection:bg-cyan-500 selection:text-white overflow-x-hidden relative">
      <StarryBackground />
      <Navbar />
      <main className="flex flex-col gap-0 relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Results />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;