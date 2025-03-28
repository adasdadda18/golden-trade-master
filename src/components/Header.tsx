
import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="py-4 w-full z-50 fixed top-0 bg-navy/80 backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <div className="text-gold font-bold text-xl md:text-2xl">AGT EA</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-white hover:text-gold transition-colors">Features</a>
          <a href="#settings" className="text-white hover:text-gold transition-colors">Settings</a>
          <a href="#strategy" className="text-white hover:text-gold transition-colors">Strategy</a>
          <a href="#performance" className="text-white hover:text-gold transition-colors">Performance</a>
          <a href="#chatbot" className="text-white hover:text-gold transition-colors">Hỗ Trợ</a>
        </nav>
        <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold transition-colors">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
