
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useMobile } from '../hooks/use-mobile';

const Header = () => {
  const isMobile = useMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gold w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-navy font-bold text-lg">A</span>
          </div>
          <span className="text-white font-bold text-xl">AGT EA</span>
        </Link>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-navy/95 backdrop-blur-md py-4 shadow-lg">
                <nav className="container flex flex-col gap-2">
                  <Link 
                    to="/"
                    className="text-white hover:text-gold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link 
                    to="/product"
                    className="text-white hover:text-gold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Product
                  </Link>
                  <Link 
                    to="/testimonials"
                    className="text-white hover:text-gold py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Button className="bg-gold hover:bg-gold-dark text-navy mt-2">
                    Download Now
                  </Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link to="/" className="text-white hover:text-gold font-medium">
                Home
              </Link>
              <Link to="/product" className="text-white hover:text-gold font-medium">
                Product
              </Link>
              <Link to="/testimonials" className="text-white hover:text-gold font-medium">
                Testimonials
              </Link>
            </nav>
            <Button className="bg-gold hover:bg-gold-dark text-navy">
              Download Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
