
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How does AGT EA differ from other gold trading bots?",
    answer: "AGT EA stands out with its adaptive recovery system, precise entry/exit points based on proprietary algorithms, and highly effective news filtering system. Unlike many other gold EAs, it's specifically designed for the unique volatility patterns of the gold market."
  },
  {
    question: "What's the minimum account size recommended?",
    answer: "While AGT EA can work with any account size, we recommend starting with at least $1,000 to allow for proper risk management and to take full advantage of the recovery system features."
  },
  {
    question: "Does AGT EA work with any broker?",
    answer: "AGT EA works with most MT4/MT5 brokers that offer XAUUSD trading. However, for optimal performance, we recommend brokers with tight spreads and fast execution."
  },
  {
    question: "How often are updates released?",
    answer: "We regularly update AGT EA to adapt to changing market conditions. Major updates are typically released quarterly, with minor updates and optimizations provided monthly."
  },
  {
    question: "Is technical knowledge required to use AGT EA?",
    answer: "No technical knowledge is required. AGT EA comes with a detailed installation guide and pre-configured settings. Our support team is also available to assist with installation and optimization."
  },
  {
    question: "What kind of support is provided after purchase?",
    answer: "We offer lifetime support for all purchasers, including installation assistance, parameter optimization, and troubleshooting. Our team typically responds within 24 hours on business days."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-navy relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl bottom-20 -left-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gold-gradient bg-clip-text text-transparent">Frequently Asked Questions</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Find answers to common questions about AGT EA
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-navy-light/30 backdrop-blur-sm border border-gold/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-gold hover:text-gold-light text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70">
            Still have questions? <a href="#chatbot" className="text-gold hover:underline">Ask our AI assistant</a> or <a href="#" className="text-gold hover:underline">contact our support team</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
