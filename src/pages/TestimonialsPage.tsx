
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudy from '../components/CaseStudy';
import { Quote } from 'lucide-react';

// Mock data for all testimonials
const allTestimonials = [
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
  },
  {
    name: "Rachel Lewis",
    position: "Retail Trader",
    content: "As a beginner trader, AGT EA gave me the confidence to start trading gold. The automation helps me follow proper trading discipline.",
    image: "/placeholder.svg"
  },
  {
    name: "Thomas Mueller",
    position: "Financial Consultant",
    content: "I recommend AGT EA to my clients who are interested in gold trading. The results have consistently exceeded expectations.",
    image: "/placeholder.svg"
  },
  {
    name: "Emma Garcia",
    position: "Institutional Trader",
    content: "The custom settings allow us to tailor the EA to match our institutional risk parameters. Very impressive flexibility.",
    image: "/placeholder.svg"
  }
];

// Case studies with more detailed success stories
const caseStudies = [
  {
    title: "From Struggling to Profitable: A Gold Trader's Journey",
    trader: {
      name: "Robert Chen",
      position: "Full-time Trader",
      image: "/placeholder.svg",
      initials: "RC"
    },
    content: {
      challenge: "I was struggling with inconsistent results trading gold, often letting emotions drive my trading decisions. Manual entry and exit points were causing me to miss opportunities and take significant losses during volatile market conditions.",
      solution: "After implementing AGT EA with its recovery system and automatic lot sizing, I was able to remove emotion from my trading. The custom settings allowed me to optimize the EA for my risk tolerance and trading style.",
      results: "Within three months, my gold trading account showed consistent profitability. The intelligent entry points caught trends I would have missed, and the automated recovery system prevented significant drawdowns during sudden market movements."
    },
    metrics: {
      profitIncrease: "47%",
      drawdownReduction: "63%",
      timeframe: "3 Months"
    }
  },
  {
    title: "Scaling a Trading Business with AGT EA",
    trader: {
      name: "Jennifer Williams",
      position: "Trading Firm Owner",
      image: "/placeholder.svg",
      initials: "JW"
    },
    content: {
      challenge: "Our firm was looking to expand our gold trading operations, but we lacked the manpower to monitor multiple accounts and execute trades consistently across all of them.",
      solution: "We deployed AGT EA across our trading accounts, customizing the settings for different risk profiles. The centralized dashboard allowed us to monitor performance while the EA handled execution.",
      results: "We successfully scaled from managing 5 to 25 trading accounts without adding staff. The consistent performance of AGT EA across different market conditions gave us confidence to further expand our operations."
    },
    metrics: {
      profitIncrease: "58%",
      drawdownReduction: "41%",
      timeframe: "6 Months"
    }
  },
  {
    title: "Surviving and Thriving in Market Volatility",
    trader: {
      name: "Marcus Johnson",
      position: "Veteran Trader",
      image: "/placeholder.svg",
      initials: "MJ"
    },
    content: {
      challenge: "During the extreme market volatility of 2022, my manual gold trading strategies were failing. I was taking heavy losses and considering abandoning gold trading altogether.",
      solution: "I implemented AGT EA with a focus on its volatility adaptation features and recovery system. The EA's ability to adjust to changing market conditions proved crucial during this period.",
      results: "Not only did I avoid the catastrophic losses many gold traders experienced, but AGT EA was able to capitalize on the volatility with its precise entry and exit points, turning what could have been a disastrous year into my most profitable one."
    },
    metrics: {
      profitIncrease: "112%",
      drawdownReduction: "78%",
      timeframe: "12 Months"
    }
  }
];

// Set document title
document.title = "Testimonials & Case Studies | AGT EA";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-navy text-white overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl top-20 left-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gold-gradient bg-clip-text text-transparent">Success Stories</span>
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Real traders share their experiences and results using AGT EA in the gold markets
          </p>
        </div>
      </section>
      
      {/* Featured Case Studies */}
      <section className="py-12 bg-navy-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gold-gradient-light bg-clip-text text-transparent">Detailed Case Studies</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy
                key={index}
                title={study.title}
                trader={study.trader}
                content={study.content}
                metrics={study.metrics}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="bg-gold-gradient bg-clip-text text-transparent">Trader Testimonials</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-navy-light border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300"
              >
                <div className="mb-4 text-gold">
                  <Quote className="w-6 h-6 opacity-40" />
                </div>
                <p className="text-white/90 italic mb-6 text-sm">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-navy border border-gold/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-gold font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-white/60 text-xs">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
