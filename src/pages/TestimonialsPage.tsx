
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseStudy from '../components/CaseStudy';
import TestimonialCard from '../components/TestimonialCard';
import { Button } from '../components/ui/button';
import { Filter, Star } from 'lucide-react';

// Mock data for all testimonials with ratings added
const allTestimonials = [
  {
    name: "John Smith",
    position: "Professional Trader",
    content: "AGT EA has completely transformed my gold trading. The recovery system alone saved my account during market volatility.",
    image: "/placeholder.svg",
    rating: 5,
    category: "professional"
  },
  {
    name: "Maria Chen",
    position: "Forex Analyst",
    content: "I've tested dozens of EAs and AGT stands out for its consistent performance and remarkably low drawdown periods.",
    image: "/placeholder.svg",
    rating: 4,
    category: "analyst"
  },
  {
    name: "David Kowalski",
    position: "Investment Advisor",
    content: "The automated lot sizing feature is brilliant. My clients are impressed with the risk management capabilities.",
    image: "/placeholder.svg",
    rating: 5,
    category: "advisor"
  },
  {
    name: "Sarah Johnson",
    position: "Day Trader",
    content: "After trying AGT EA for 6 months, my gold trading profits increased by 32%. The smart entry points are incredibly accurate.",
    image: "/placeholder.svg",
    rating: 4,
    category: "professional"
  },
  {
    name: "Michael Wong",
    position: "Portfolio Manager",
    content: "The risk management features of AGT EA allow me to sleep soundly knowing my positions are protected with intelligent stop-losses.",
    image: "/placeholder.svg",
    rating: 5,
    category: "professional"
  },
  {
    name: "Rachel Lewis",
    position: "Retail Trader",
    content: "As a beginner trader, AGT EA gave me the confidence to start trading gold. The automation helps me follow proper trading discipline.",
    image: "/placeholder.svg",
    rating: 4,
    category: "beginner"
  },
  {
    name: "Thomas Mueller",
    position: "Financial Consultant",
    content: "I recommend AGT EA to my clients who are interested in gold trading. The results have consistently exceeded expectations.",
    image: "/placeholder.svg",
    rating: 5,
    category: "advisor"
  },
  {
    name: "Emma Garcia",
    position: "Institutional Trader",
    content: "The custom settings allow us to tailor the EA to match our institutional risk parameters. Very impressive flexibility.",
    image: "/placeholder.svg",
    rating: 4,
    category: "professional"
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
  const [filter, setFilter] = useState<string>("all");
  
  const filteredTestimonials = filter === "all" 
    ? allTestimonials 
    : allTestimonials.filter(testimonial => testimonial.category === filter);

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
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gold-gradient bg-clip-text text-transparent">Trader Testimonials</span>
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-navy-light/50 rounded-lg border border-gold/10">
              <Button
                variant="ghost" 
                className={`${filter === 'all' ? 'bg-navy text-gold' : 'text-white/70'} rounded-md px-4`}
                onClick={() => setFilter('all')}
              >
                All
              </Button>
              <Button
                variant="ghost" 
                className={`${filter === 'professional' ? 'bg-navy text-gold' : 'text-white/70'} rounded-md px-4`}
                onClick={() => setFilter('professional')}
              >
                Professional
              </Button>
              <Button
                variant="ghost" 
                className={`${filter === 'analyst' ? 'bg-navy text-gold' : 'text-white/70'} rounded-md px-4`}
                onClick={() => setFilter('analyst')}
              >
                Analysts
              </Button>
              <Button
                variant="ghost" 
                className={`${filter === 'advisor' ? 'bg-navy text-gold' : 'text-white/70'} rounded-md px-4`}
                onClick={() => setFilter('advisor')}
              >
                Advisors
              </Button>
              <Button
                variant="ghost" 
                className={`${filter === 'beginner' ? 'bg-navy text-gold' : 'text-white/70'} rounded-md px-4`}
                onClick={() => setFilter('beginner')}
              >
                Beginners
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
