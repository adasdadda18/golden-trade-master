
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import SettingsSection from '../components/SettingsSection';
import StrategySection from '../components/StrategySection';
import PerformanceSection from '../components/PerformanceSection';
import ConclusionSection from '../components/ConclusionSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SettingsSection />
      <StrategySection />
      <PerformanceSection />
      <ConclusionSection />
      <Footer />
    </div>
  );
};

export default Index;
