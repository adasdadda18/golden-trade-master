
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const FAQSection = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  const faqItems = language === 'en' ? [
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
  ] : [
    {
      question: "AGT EA khác biệt như thế nào so với các bot giao dịch vàng khác?",
      answer: "AGT EA nổi bật với hệ thống phục hồi thích ứng, điểm vào/ra chính xác dựa trên thuật toán độc quyền và hệ thống lọc tin tức hiệu quả. Khác với nhiều EA vàng khác, nó được thiết kế đặc biệt cho các mẫu biến động độc đáo của thị trường vàng."
    },
    {
      question: "Quy mô tài khoản tối thiểu được khuyến nghị là bao nhiêu?",
      answer: "Mặc dù AGT EA có thể hoạt động với bất kỳ quy mô tài khoản nào, chúng tôi khuyên bạn nên bắt đầu với ít nhất 1.000 USD để cho phép quản lý rủi ro hợp lý và tận dụng tối đa các tính năng của hệ thống phục hồi."
    },
    {
      question: "AGT EA có hoạt động với bất kỳ sàn giao dịch nào không?",
      answer: "AGT EA hoạt động với hầu hết các sàn MT4/MT5 cung cấp giao dịch XAUUSD. Tuy nhiên, để có hiệu suất tối ưu, chúng tôi khuyên dùng các sàn có spread thấp và thực thi nhanh."
    },
    {
      question: "Các bản cập nhật được phát hành thường xuyên như thế nào?",
      answer: "Chúng tôi thường xuyên cập nhật AGT EA để thích ứng với điều kiện thị trường thay đổi. Các bản cập nhật lớn thường được phát hành hàng quý, với các bản cập nhật nhỏ và tối ưu hóa được cung cấp hàng tháng."
    },
    {
      question: "Có cần kiến thức kỹ thuật để sử dụng AGT EA không?",
      answer: "Không cần kiến thức kỹ thuật. AGT EA đi kèm với hướng dẫn cài đặt chi tiết và cài đặt được cấu hình sẵn. Đội hỗ trợ của chúng tôi cũng có sẵn để hỗ trợ cài đặt và tối ưu hóa."
    },
    {
      question: "Loại hỗ trợ nào được cung cấp sau khi mua?",
      answer: "Chúng tôi cung cấp hỗ trợ suốt đời cho tất cả người mua, bao gồm hỗ trợ cài đặt, tối ưu hóa tham số và xử lý sự cố. Đội ngũ của chúng tôi thường phản hồi trong vòng 24 giờ vào các ngày làm việc."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-navy relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-gold/5 rounded-full blur-3xl bottom-20 -left-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gold-gradient bg-clip-text text-transparent">{t('frequentlyAskedQuestions')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            {t('findAnswers')}
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
            {t('stillHaveQuestions')} <a href="#chatbot" className="text-gold hover:underline">{t('askAI')}</a> {language === 'en' ? 'or' : 'hoặc'} <a href="#" className="text-gold hover:underline">{t('contactSupport')}</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
