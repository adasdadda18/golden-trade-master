
import React from 'react';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const testimonials = {
  en: [
    {
      name: "John Smith",
      position: "Professional Trader",
      content: "AGT EA has completely transformed my gold trading. The recovery system alone saved my account during market volatility.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Maria Chen",
      position: "Forex Analyst",
      content: "I've tested dozens of EAs and AGT stands out for its consistent performance and remarkably low drawdown periods.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "David Kowalski",
      position: "Investment Advisor",
      content: "The automated lot sizing feature is brilliant. My clients are impressed with the risk management capabilities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sarah Johnson",
      position: "Day Trader",
      content: "After trying AGT EA for 6 months, my gold trading profits increased by 32%. The smart entry points are incredibly accurate.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Wong",
      position: "Portfolio Manager",
      content: "The risk management features of AGT EA allow me to sleep soundly knowing my positions are protected with intelligent stop-losses.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ],
  vi: [
    {
      name: "John Smith",
      position: "Nhà Giao Dịch Chuyên Nghiệp",
      content: "AGT EA đã hoàn toàn thay đổi giao dịch vàng của tôi. Chỉ riêng hệ thống phục hồi đã cứu tài khoản của tôi trong thời kỳ biến động thị trường.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Maria Chen",
      position: "Nhà Phân Tích Forex",
      content: "Tôi đã thử nghiệm hàng chục EA và AGT nổi bật với hiệu suất ổn định và thời kỳ giảm giá đáng chú ý thấp.",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "David Kowalski",
      position: "Cố Vấn Đầu Tư",
      content: "Tính năng tự động điều chỉnh kích thước lô rất xuất sắc. Khách hàng của tôi rất ấn tượng với khả năng quản lý rủi ro.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Sarah Johnson",
      position: "Nhà Giao Dịch Ngày",
      content: "Sau khi thử AGT EA trong 6 tháng, lợi nhuận giao dịch vàng của tôi tăng 32%. Các điểm vào thị trường thông minh cực kỳ chính xác.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Wong",
      position: "Quản Lý Danh Mục Đầu Tư",
      content: "Các tính năng quản lý rủi ro của AGT EA cho phép tôi ngủ ngon biết rằng vị thế của mình được bảo vệ bằng các điểm dừng lỗ thông minh.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ]
};

const TestimonialsSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  
  const currentTestimonials = language === 'en' ? testimonials.en : testimonials.vi;

  return (
    <section id="testimonials" className="py-20 bg-navy-light relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl top-20 -right-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gold-gradient bg-clip-text text-transparent">{t('whatTradersSay')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('hearFromTraders')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTestimonials.slice(0, 3).map((testimonial, index) => (
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
            <Link to="/testimonials">{t('viewAllSuccess')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
