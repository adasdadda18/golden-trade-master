
import React from 'react';
import { Clock, LineChart, DollarSign, Percent, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const SettingsSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const settings = language === 'en' ? [
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
  ] : language === 'vi' ? [
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: 'Khung Thời Gian',
      description: 'Hoạt động tốt nhất trên khung thời gian M5, M15 hoặc H1 để có kết quả tối ưu.'
    },
    {
      icon: <LineChart className="w-6 h-6 text-gold" />,
      title: 'Cặp Tiền Tệ',
      description: 'Chủ yếu giao dịch trên XAUUSD (Vàng).'
    },
    {
      icon: <Percent className="w-6 h-6 text-gold" />,
      title: 'Cài Đặt Rủi Ro',
      description: 'Rủi ro có thể được điều chỉnh theo sở thích của nhà giao dịch, nhưng khuyến nghị rủi ro 1-2% cho mỗi giao dịch.'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-gold" />,
      title: 'Kích Thước Lô',
      description: 'Có sẵn chức năng điều chỉnh kích thước lô tự động, nhưng nên đặt kích thước lô cố định tùy thuộc vào quy mô tài khoản (ví dụ: 0,01 lô cho mỗi 1000 USD).'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-gold" />,
      title: 'Bộ Lọc Tin Tức',
      description: 'Nên bật tùy chọn bộ lọc tin tức để tránh giao dịch trong các sự kiện có tác động cao.'
    }
  ] : [
    {
      icon: <Clock className="w-6 h-6 text-gold" />,
      title: '时间周期',
      description: '在M5、M15或H1时间周期上效果最佳，可获得最优结果。'
    },
    {
      icon: <LineChart className="w-6 h-6 text-gold" />,
      title: '货币对',
      description: '主要在XAUUSD（黄金）上交易。'
    },
    {
      icon: <Percent className="w-6 h-6 text-gold" />,
      title: '风险设置',
      description: '风险可根据交易者偏好进行调整，但建议每笔交易风险为1-2%。'
    },
    {
      icon: <DollarSign className="w-6 h-6 text-gold" />,
      title: '交易量大小',
      description: '提供自动交易量调整功能，但固定交易量应根据账户规模设置（例如，每1000美元设为0.01手）。'
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-gold" />,
      title: '新闻过滤器',
      description: '应启用新闻过滤器选项，以避免在高影响事件期间交易。'
    }
  ];

  return (
    <section id="settings" className="py-20 bg-navy relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl top-20 -left-32"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-white">{t('recommendedSettings')}</span>
            </h2>
            <p className="text-white/80 mb-8">
              {t('settingsDescription')}
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
                <h3 className="text-gold font-semibold">{t('settingsPreview')}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-white/60 text-sm mb-1">{t('currencyPair')}</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>XAUUSD (Gold)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">{t('timeframe')}</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>M5</option>
                      <option>M15</option>
                      <option>H1</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">{t('lotSize')}</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>{language === 'en' ? 'Auto' : 'Tự động'}</option>
                      <option>{language === 'en' ? 'Fixed (0.01)' : 'Cố định (0.01)'}</option>
                      <option>{language === 'en' ? 'Fixed (0.1)' : 'Cố định (0.1)'}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">{t('risk')} (%)</label>
                    <input 
                      type="number" 
                      value="2" 
                      className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/60 text-sm mb-1">{t('recoveryMode')}</label>
                    <select className="w-full bg-navy border border-gold/20 text-white rounded-md p-2 focus:border-gold">
                      <option>{t('enabled')}</option>
                      <option>{t('disabled')}</option>
                    </select>
                  </div>
                  
                  <div className="col-span-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" checked className="rounded border-gold/30 text-gold" />
                      <span className="text-white">{t('enableNewsFilter')}</span>
                    </label>
                  </div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-gold/10">
                  <button className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-2 rounded-md transition-colors">
                    {t('applySettings')}
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
