
import React from 'react';
import { Header, Footer, FloatingWhatsApp } from './components/Navigation';
import { Hero, InfoBar } from './components/HeroSection';
import { Mission, Classes, FeaturedCourses, Faculty } from './components/ContentSections';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InfoBar />
        <Mission />
        <Classes />
        <FeaturedCourses />
        <Faculty />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
