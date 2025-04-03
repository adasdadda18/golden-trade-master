
import React from 'react';
import { TrendingUp, Shield, Bell, BarChart, LineChart } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const FeaturesSection = () => {
  const isMobile = useIsMobile();
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  const features = [
    {
      icon: <BarChart className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Automatic Lot Size Adjustment' : 'Điều Chỉnh Khối Lượng Tự Động',
      description: language === 'en' ? 'Flexibly adjusts lot sizes based on account balance and desired risk level.' : 'Linh hoạt điều chỉnh kích thước lô dựa trên số dư tài khoản và mức độ rủi ro mong muốn.'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Recovery System' : 'Hệ Thống Phục Hồi',
      description: language === 'en' ? 'Built-in recovery feature helps offset losses by adjusting future trade sizes.' : 'Tính năng phục hồi tích hợp giúp bù đắp tổn thất bằng cách điều chỉnh kích thước giao dịch trong tương lai.'
    },
    {
      icon: <Bell className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'News Filter' : 'Bộ Lọc Tin Tức',
      description: language === 'en' ? 'Avoid high volatility periods by pausing trading before and after major news events.' : 'Tránh các giai đoạn biến động cao bằng cách tạm dừng giao dịch trước và sau các sự kiện tin tức lớn.'
    },
    {
      icon: <LineChart className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Profit Management' : 'Quản Lý Lợi Nhuận',
      description: language === 'en' ? 'EA automatically closes trades when certain profit targets are reached.' : 'EA tự động đóng giao dịch khi đạt được mục tiêu lợi nhuận nhất định.'
    },
    {
      icon: <Shield className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Low Drawdown' : 'Giảm Thiểu Rủi Ro',
      description: language === 'en' ? 'Strategically minimizes drawdown, maintaining stable performance even in uncertain market conditions.' : 'Giảm thiểu rủi ro một cách chiến lược, duy trì hiệu suất ổn định ngay cả trong điều kiện thị trường không chắc chắn.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-navy to-navy-light">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            <span className="bg-gold-gradient bg-clip-text text-transparent">{t('featuresTitle')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg px-4">
            {t('featuresSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-navy-light/50 backdrop-blur-sm border border-gold/10 rounded-xl p-4 sm:p-6 hover:border-gold/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]"
            >
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-gold text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/70 text-sm sm:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
