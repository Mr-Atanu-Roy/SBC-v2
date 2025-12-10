import React, { useState } from 'react';
import { Header, Footer, FloatingWhatsApp } from './components/Navigation';
import { Hero, InfoBar } from './components/HeroSection';
import { Mission, Classes, FeaturedCourses, Faculty } from './components/ContentSections';
import { EnquiryPage } from './components/EnquiryPage';
import { PageType } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigate = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header activePage={currentPage} onNavigate={navigate} />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <InfoBar />
            <Mission />
            <Classes />
            <FeaturedCourses />
            <Faculty />
          </>
        ) : (
          <EnquiryPage />
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;