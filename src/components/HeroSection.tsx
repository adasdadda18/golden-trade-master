
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const HeroSection = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative min-h-screen bg-navy pt-20 pb-16 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/20 rounded-full blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-gold/10 rounded-full blur-3xl bottom-32 -left-32"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Automated Gold Trading</span>
              <span className="block mt-2 bg-gold-gradient bg-clip-text text-transparent">Expert Advisor</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
              A powerful trading tool specifically designed for the volatile gold market with precise entry and exit points.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-gold hover:bg-gold-dark text-navy text-lg px-8 py-6 h-auto font-semibold">
                Download Now
              </Button>
              <Button onClick={scrollToFeatures} variant="outline" className="border-gold text-gold hover:bg-gold/10 text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-full max-w-md mx-auto animate-float">
              <div className="aspect-square bg-gold-gradient p-1 rounded-2xl shadow-[0_0_30px_5px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full bg-navy rounded-xl overflow-hidden">
                  <div className="p-4 bg-navy-light">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-gold font-bold">XAUUSD - Gold</div>
                      <div className="text-gold">M15</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-navy/80 p-2 rounded">
                        <div className="text-xs text-white/60">Profit</div>
                        <div className="text-green-400 font-bold">+$1,245</div>
                      </div>
                      <div className="bg-navy/80 p-2 rounded">
                        <div className="text-xs text-white/60">Trades</div>
                        <div className="text-white font-bold">85</div>
                      </div>
                      <div className="bg-navy/80 p-2 rounded">
                        <div className="text-xs text-white/60">Drawdown</div>
                        <div className="text-gold font-bold">8.2%</div>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-navy flex items-center justify-center">
                    <div className="w-full h-48 px-4 relative">
                      {/* Simulated chart pattern */}
                      <svg viewBox="0 0 400 150" className="w-full h-full">
                        <path 
                          d="M0,100 L40,90 L80,110 L120,80 L160,120 L200,70 L240,90 L280,40 L320,60 L360,30 L400,50" 
                          fill="none" 
                          stroke="#D4AF37" 
                          strokeWidth="2"
                        />
                        <path 
                          d="M0,100 L40,90 L80,110 L120,80 L160,120 L200,70 L240,90 L280,40 L320,60 L360,30 L400,50 L400,150 L0,150 Z" 
                          fill="url(#goldGradient)" 
                          fillOpacity="0.2"
                        />
                        <defs>
                          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      {/* Buy/Sell markers */}
                      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold rounded-full p-2 animate-pulse-gold">
              <ArrowDownCircle className="w-8 h-8 text-navy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
