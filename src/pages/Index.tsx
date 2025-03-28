
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SettingsSection from '../components/SettingsSection';
import StrategySection from '../components/StrategySection';
import PerformanceSection from '../components/PerformanceSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ChatBotSection from '../components/ChatBotSection';
import ConclusionSection from '../components/ConclusionSection';
import Footer from '../components/Footer';

// Ensuring page has correct meta title
document.title = "AGT EA - Automated Gold Trading";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SettingsSection />
      <StrategySection />
      <PerformanceSection />
      <TestimonialsSection />
      <FAQSection />
      <ChatBotSection />
      <ConclusionSection />
      <Footer />
    </div>
  );
};

export default Index;
