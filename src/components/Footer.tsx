
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-light py-12 border-t border-gold/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-gold font-bold text-2xl mb-2">AGT EA</div>
            <p className="text-white/60 text-sm max-w-xs">
              Advanced Gold Trading Expert Advisor for the volatile gold market
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
            <div>
              <h4 className="text-gold font-medium mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/70 hover:text-gold text-sm">Features</a></li>
                <li><a href="#settings" className="text-white/70 hover:text-gold text-sm">Settings</a></li>
                <li><a href="#strategy" className="text-white/70 hover:text-gold text-sm">Strategy</a></li>
                <li><a href="#performance" className="text-white/70 hover:text-gold text-sm">Performance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold font-medium mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">Documentation</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">Tutorials</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold font-medium mb-3">Contact</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">Email Us</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">Live Chat</a></li>
                <li><a href="#" className="text-white/70 hover:text-gold text-sm">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {currentYear} AGT EA. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-white/50 hover:text-gold text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-white/50 hover:text-gold text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
