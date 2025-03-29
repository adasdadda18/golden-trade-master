
import React from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const testimonials = [
  {
    name: "John Smith",
    position: "Professional Trader",
    content: "AGT EA has completely transformed my gold trading. The recovery system alone saved my account during market volatility.",
    image: "/placeholder.svg"
  },
  {
    name: "Maria Chen",
    position: "Forex Analyst",
    content: "I've tested dozens of EAs and AGT stands out for its consistent performance and remarkably low drawdown periods.",
    image: "/placeholder.svg"
  },
  {
    name: "David Kowalski",
    position: "Investment Advisor",
    content: "The automated lot sizing feature is brilliant. My clients are impressed with the risk management capabilities.",
    image: "/placeholder.svg"
  },
  {
    name: "Sarah Johnson",
    position: "Day Trader",
    content: "After trying AGT EA for 6 months, my gold trading profits increased by 32%. The smart entry points are incredibly accurate.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael Wong",
    position: "Portfolio Manager",
    content: "The risk management features of AGT EA allow me to sleep soundly knowing my positions are protected with intelligent stop-losses.",
    image: "/placeholder.svg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-navy-light relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl top-20 -right-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gold-gradient bg-clip-text text-transparent">What Traders Say</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from traders who have integrated AGT EA into their trading systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-navy/70 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300"
            >
              <div className="mb-6 text-gold">
                <Quote className="w-8 h-8 opacity-40" />
              </div>
              <p className="text-white/90 italic mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-navy-light border border-gold/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-gold font-medium">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-gold/20 text-gold hover:border-gold hover:bg-gold/10" asChild>
            <Link to="/testimonials">View All Success Stories</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
