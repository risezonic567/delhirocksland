import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import TrustBar from './components/TrustBar';
// import AboutSection from './components/AboutSection';
import Collections from './components/Collections';
import FeaturedStones from './components/FeaturedStones';
import Applications from './components/Applications';
import WhyDelhiRocks from './components/WhyDelhiRocks';
// import Process from './components/Process';
// import Projects from './components/Projects';
import MaterialComparison from './components/MaterialComparison';
import Testimonials from './components/Testimonials';
import ConsultationCTA from './components/ConsultationCTA';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import QuoteFormModal from './components/QuoteFormModal';
import InteractiveStoneShowcase from './components/AboutSection';
import FloatingWhatsApp from './components/FloatingWhatsapp';
// import FloatingCTAs from './components/';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="min-h-screen text-[#E5E1D8] font-sans antialiased selection:bg-[#C5A059] selection:text-[#0F1115]">
      <Navbar onOpenQuote={handleOpenQuote} />
      <main>
        <Hero onOpenQuote={handleOpenQuote} />
        {/* <TrustBar /> */}
        <InteractiveStoneShowcase onOpenQuote={handleOpenQuote} />
        <Collections onOpenQuote={handleOpenQuote} />
        <FeaturedStones onOpenQuote={handleOpenQuote} />
        <Applications onOpenQuote={handleOpenQuote} />
        <WhyDelhiRocks onOpenQuote={handleOpenQuote} />
        {/* <Process onOpenQuote={handleOpenQuote} /> */}
        {/* <Projects onOpenQuote={handleOpenQuote} /> */}
        {/* <MaterialComparison onOpenQuote={handleOpenQuote} /> */}
        <Testimonials  onOpenQuote={handleOpenQuote} />
        {/* <ConsultationCTA onOpenQuote={handleOpenQuote} /> */}
        <FAQSection onOpenQuote={handleOpenQuote}/>
        {/* <FinalCTA onOpenQuote={handleOpenQuote} /> */}
      </main>
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Conversion Overlays */}
      <QuoteFormModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
      {/* <FloatingCTAs onOpenQuote={handleOpenQuote} /> */}
      <FloatingWhatsApp/>
    </div>
  );
} 