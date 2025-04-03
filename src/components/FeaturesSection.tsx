
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
      title: language === 'en' ? 'Automatic Lot Size Adjustment' : 
             language === 'vi' ? 'Điều Chỉnh Khối Lượng Tự Động' : 
             '自动调整交易量',
      description: language === 'en' ? 'Flexibly adjusts lot sizes based on account balance and desired risk level.' : 
                   language === 'vi' ? 'Linh hoạt điều chỉnh kích thước lô dựa trên số dư tài khoản và mức độ rủi ro mong muốn.' : 
                   '根据账户余额和所需风险水平灵活调整交易量。'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Recovery System' : 
             language === 'vi' ? 'Hệ Thống Phục Hồi' : 
             '恢复系统',
      description: language === 'en' ? 'Built-in recovery feature helps offset losses by adjusting future trade sizes.' : 
                   language === 'vi' ? 'Tính năng phục hồi tích hợp giúp bù đắp tổn thất bằng cách điều chỉnh kích thước giao dịch trong tương lai.' : 
                   '内置恢复功能通过调整未来交易规模来抵消损失。'
    },
    {
      icon: <Bell className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'News Filter' : 
             language === 'vi' ? 'Bộ Lọc Tin Tức' : 
             '新闻过滤器',
      description: language === 'en' ? 'Avoid high volatility periods by pausing trading before and after major news events.' : 
                   language === 'vi' ? 'Tránh các giai đoạn biến động cao bằng cách tạm dừng giao dịch trước và sau các sự kiện tin tức lớn.' : 
                   '通过在重大新闻事件前后暂停交易来避免高波动时期。'
    },
    {
      icon: <LineChart className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Profit Management' : 
             language === 'vi' ? 'Quản Lý Lợi Nhuận' : 
             '利润管理',
      description: language === 'en' ? 'EA automatically closes trades when certain profit targets are reached.' : 
                   language === 'vi' ? 'EA tự động đóng giao dịch khi đạt được mục tiêu lợi nhuận nhất định.' : 
                   '当达到特定利润目标时，EA自动关闭交易。'
    },
    {
      icon: <Shield className="w-10 h-10 text-gold" />,
      title: language === 'en' ? 'Low Drawdown' : 
             language === 'vi' ? 'Giảm Thiểu Rủi Ro' : 
             '低回撤',
      description: language === 'en' ? 'Strategically minimizes drawdown, maintaining stable performance even in uncertain market conditions.' : 
                   language === 'vi' ? 'Giảm thiểu rủi ro một cách chiến lược, duy trì hiệu suất ổn định ngay cả trong điều kiện thị trường không chắc chắn.' : 
                   '战略性地最小化回撤，即使在不确定的市场条件下也能保持稳定的表现。'
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
