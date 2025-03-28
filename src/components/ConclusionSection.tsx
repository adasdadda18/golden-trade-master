
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const benefits = [
  'Reliable solution for gold trading',
  'Grid-based strategy with news filters',
  'Recovery system for minimizing risk',
  'Low drawdown and stable performance',
  'Suitable for both new and experienced traders'
];

const ConclusionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-navy to-navy-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gold-gradient bg-clip-text text-transparent">Ready to Transform Your Gold Trading?</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            AGT EA is a powerful expert advisor that provides traders with a reliable solution for gold trading
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center mb-16">
          <div className="md:w-1/2 lg:w-2/5">
            <div className="bg-navy-light/40 backdrop-blur-sm border border-gold/10 rounded-xl p-6">
              <h3 className="text-gold text-2xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 bg-gold/20 rounded-full p-1">
                      <Check className="text-gold w-3 h-3" />
                    </span>
                    <span className="text-white">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-2/5">
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/30 rounded-xl p-8 text-center">
              <h3 className="text-gold text-2xl font-semibold mb-4">Get Started Today</h3>
              <p className="text-white/80 mb-6">
                Experience the power of AGT EA and see the difference in your gold trading results
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 text-lg">
                  Download Now
                </Button>
                <p className="text-white/60 text-sm">
                  Compatible with MT4 | Instant Download | 24/7 Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
