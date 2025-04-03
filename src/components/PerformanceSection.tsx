
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

// Sample data for the performance chart
const performanceData = {
  en: [
    { month: 'Jan', balance: 10000 },
    { month: 'Feb', balance: 11200 },
    { month: 'Mar', balance: 10800 },
    { month: 'Apr', balance: 12300 },
    { month: 'May', balance: 13500 },
    { month: 'Jun', balance: 14200 },
    { month: 'Jul', balance: 13800 },
    { month: 'Aug', balance: 15400 },
    { month: 'Sep', balance: 16700 },
    { month: 'Oct', balance: 18200 },
    { month: 'Nov', balance: 19500 },
    { month: 'Dec', balance: 21000 },
  ],
  vi: [
    { month: 'T1', balance: 10000 },
    { month: 'T2', balance: 11200 },
    { month: 'T3', balance: 10800 },
    { month: 'T4', balance: 12300 },
    { month: 'T5', balance: 13500 },
    { month: 'T6', balance: 14200 },
    { month: 'T7', balance: 13800 },
    { month: 'T8', balance: 15400 },
    { month: 'T9', balance: 16700 },
    { month: 'T10', balance: 18200 },
    { month: 'T11', balance: 19500 },
    { month: 'T12', balance: 21000 },
  ]
};

const PerformanceSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const statistics = [
    { label: t('totalProfit'), value: '+110%' },
    { label: t('winRate'), value: '78%' },
    { label: t('maxDrawdown'), value: '12.4%' },
    { label: t('recoveryFactor'), value: '3.2' },
  ];

  const chartData = language === 'en' ? performanceData.en : performanceData.vi;

  return (
    <section id="performance" className="py-20 bg-navy relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl bottom-20 -right-32"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gold-gradient bg-clip-text text-transparent">{t('performanceTitle')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            {t('performanceSubtitle')}
          </p>
        </div>
        
        <div className="bg-navy-light/30 backdrop-blur-sm border border-gold/10 rounded-xl p-6 mb-10">
          <h3 className="text-gold text-xl font-semibold mb-4">{t('accountGrowth')}</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#999' }} />
                <YAxis tick={{ fill: '#999' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0A1128', borderColor: '#D4AF37', color: '#fff' }}
                  labelStyle={{ color: '#D4AF37' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#D4AF37" 
                  fillOpacity={1} 
                  fill="url(#colorBalance)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="bg-navy-light/50 backdrop-blur-sm border border-gold/10 rounded-xl p-6 text-center"
            >
              <h3 className="text-white/70 text-lg mb-2">{stat.label}</h3>
              <p className="text-gold text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('performanceNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
