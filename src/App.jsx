import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import TravelGallery from './components/sections/TravelGallery';
import GlobalNetwork from './components/sections/GlobalNetwork';
import AiProcessing from './components/sections/AiProcessing';
import Footer from './components/layout/Footer';
import Background3D from './components/3d/Background3D';
import Intro from './components/ui/Intro';
import ScrollAnimations from './components/ui/ScrollAnimations';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onComplete={() => setShowIntro(false)} />
      ) : (
        <div className="min-h-screen text-white selection:bg-cyan-500/30 animate-in fade-in duration-1000 relative">
          <Background3D />
          <ScrollAnimations />
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10 flex flex-col gap-0">
            <Hero />
            <Features />
            <TravelGallery />
            <GlobalNetwork />
            <AiProcessing />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
