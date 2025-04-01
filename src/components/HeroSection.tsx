
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import { useIsMobile } from '../hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Load Vimeo player script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen bg-navy pt-20 pb-16 flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/20 rounded-full blur-3xl -top-20 -right-20"></div>
        <div className="absolute w-96 h-96 bg-gold/10 rounded-full blur-3xl bottom-32 -left-32"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
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
          
          <div className="md:w-1/2 w-full relative mt-8 md:mt-0">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square bg-gold-gradient p-1 rounded-2xl shadow-[0_0_30px_5px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full bg-white/90 rounded-xl overflow-hidden">
                  {/* Vimeo Video Embed với nền sáng hơn */}
                  <div style={{padding:'100% 0 0 0', position:'relative'}}>
                    <iframe 
                      src="https://player.vimeo.com/video/1070737527?h=fd5ae7d240&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;playsinline=1&amp;portrait=0&amp;title=0&amp;byline=0" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                      style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
                      title="AGT EA Introduction"
                      allowFullScreen={true}
                    ></iframe>
                  </div>
                  
                  {/* Đã loại bỏ phần fallback hiển thị dòng text */}
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
