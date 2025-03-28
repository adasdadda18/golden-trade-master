
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { href: "#features", label: "Features" },
    { href: "#settings", label: "Settings" },
    { href: "#strategy", label: "Strategy" },
    { href: "#performance", label: "Performance" },
    { href: "#chatbot", label: "Hỗ Trợ" }
  ];

  return (
    <header className="py-4 w-full z-50 fixed top-0 bg-navy/80 backdrop-blur-md">
      <div className="container flex items-center justify-between">
        <div className="text-gold font-bold text-xl md:text-2xl">AGT EA</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-white hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <Button className="bg-gold hover:bg-gold-dark text-navy font-semibold transition-colors hidden sm:flex">
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white hover:text-gold" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy-light border-t border-gold/10 absolute w-full top-full left-0 z-50 py-3 shadow-lg animate-in fade-in slide-in-from-top-5">
          <div className="container flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-white hover:text-gold py-2 border-b border-gold/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button 
              className="bg-gold hover:bg-gold-dark text-navy font-semibold mt-3 w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
