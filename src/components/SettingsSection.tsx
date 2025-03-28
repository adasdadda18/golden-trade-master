
import React from 'react';
import { Clock, LineChart, DollarSign, Percent, AlertTriangle } from 'lucide-react';

const settings = [
  {
    icon: <Clock className="w-6 h-6 text-gold" />,
    title: 'Timeframe',
    description: 'Works best on M5, M15, or H1 timeframes for optimal results.'
  },
  {
    icon: <LineChart className="w-6 h-6 text-gold" />,
    title: 'Currency Pair',
    description: 'Primarily trades on XAUUSD (Gold).'
  },
  {
    icon: <Percent className="w-6 h-6 text-gold" />,
    title: 'Risk Settings',
    description: 'Risk can be adjusted according to trader preference, but 1-2% risk per trade is recommended.'
  },
  {
    icon: <DollarSign className="w-6 h-6 text-gold" />,
    title: 'Lot Size',
    description: 'Auto lot size adjustment is available, but fixed lot sizes should be set depending on account size (e.g., 0.01 lot per 1000 USD).'
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-gold" />,
    title: 'News Filter',
    description: 'The news filter option should be enabled to avoid trading during high-impact events.'
  }
];

const SettingsSection = () => {
  return (
    <section id="settings" className="py-20 bg-navy relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl top-20 -left-32"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">Recommended</span>
              <span className="block bg-gold-gradient bg-clip-text text-transparent">Settings</span>
            </h2>
            <p className="text-white/80 mb-8">
              To maximize the potential of AGT EA, the following settings are recommended. These configurations have been tested extensively to deliver optimal performance in various market conditions.
            </p>
            
            <div className="space-y-4">
              {settings.map((setting, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 p-4 border border-gold/10 rounded-lg bg-navy-light/30 backdrop-blur-sm"
                >
                  <div className="mt-1">{setting.icon}</div>
                  <div>
                    <h3 className="text-gold font-semibold">{setting.title}</h3>
                    <p className="text-white/70 text-sm">{setting.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-navy-light border border-gold/20 rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 border-b border-gold/10">
                <h3 className="text-gold font-semibold">Settings Preview</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-white/60 text-sm mb-1">Currency Pair</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>XAUUSD (Gold)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">Timeframe</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>M5</option>
                      <option>M15</option>
                      <option>H1</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">Lot Size</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>Auto</option>
                      <option>Fixed (0.01)</option>
                      <option>Fixed (0.1)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">Risk (%)</label>
                    <input 
                      type="number" 
                      value="2" 
                      className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">Recovery Mode</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>Enabled</option>
                      <option>Disabled</option>
                    </select>
                  </div>
                  
                  <div className="col-span-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" checked className="rounded border-gold/30 text-gold" />
                      <span className="text-white">Enable News Filter</span>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gold/10">
                  <button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-2 rounded-md transition-colors">
                    Apply Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettingsSection;
