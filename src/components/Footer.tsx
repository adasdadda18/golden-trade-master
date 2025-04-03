
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const Footer = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);
  const currentYear = new Date().getFullYear();
  const whatsappNumber = '+84919249839';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, '')}`;
  
  const links = {
    quickLinks: language === 'en' ? [
      { label: t('features'), href: '#features' },
      { label: t('settings'), href: '#settings' },
      { label: t('strategy'), href: '#strategy' },
      { label: t('performance'), href: '#performance' }
    ] : language === 'vi' ? [
      { label: t('features'), href: '#features' },
      { label: t('settings'), href: '#settings' },
      { label: t('strategy'), href: '#strategy' },
      { label: t('performance'), href: '#performance' }
    ] : [
      { label: t('features'), href: '#features' },
      { label: t('settings'), href: '#settings' },
      { label: t('strategy'), href: '#strategy' },
      { label: t('performance'), href: '#performance' }
    ],
    resources: language === 'en' ? [
      { label: 'Documentation', href: '#' },
      { label: 'Tutorials', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Support', href: '#' }
    ] : language === 'vi' ? [
      { label: 'Tài liệu', href: '#' },
      { label: 'Hướng dẫn', href: '#' },
      { label: 'Câu hỏi thường gặp', href: '#' },
      { label: 'Hỗ trợ', href: '#' }
    ] : [
      { label: '文档', href: '#' },
      { label: '教程', href: '#' },
      { label: '常见问题', href: '#' },
      { label: '支持', href: '#' }
    ],
    contact: language === 'en' ? [
      { label: 'WhatsApp', href: whatsappLink, icon: <MessageCircle className="w-4 h-4 text-green-500" /> },
      { label: 'Email Us', href: '#' },
      { label: 'Live Chat', href: '#' },
      { label: 'Feedback', href: '#' }
    ] : language === 'vi' ? [
      { label: 'WhatsApp', href: whatsappLink, icon: <MessageCircle className="w-4 h-4 text-green-500" /> },
      { label: 'Gửi Email', href: '#' },
      { label: 'Chat Trực Tuyến', href: '#' },
      { label: 'Phản hồi', href: '#' }
    ] : [
      { label: 'WhatsApp', href: whatsappLink, icon: <MessageCircle className="w-4 h-4 text-green-500" /> },
      { label: '电子邮件', href: '#' },
      { label: '在线聊天', href: '#' },
      { label: '反馈', href: '#' }
    ]
  };

  return (
    <footer className="bg-navy-light py-12 border-t border-gold/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-gold font-bold text-2xl mb-2">AGT EA</div>
            <p className="text-white/60 text-sm max-w-xs">
              {language === 'en' 
                ? 'Advanced Gold Trading Expert Advisor for the volatile gold market'
                : language === 'vi'
                ? 'Cố Vấn Chuyên Gia Giao Dịch Vàng Nâng Cao cho thị trường vàng biến động'
                : '高级黄金交易专家顾问，适用于波动的黄金市场'}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6">
            <div>
              <h4 className="text-gold font-medium mb-3">
                {language === 'en' 
                  ? 'Quick Links' 
                  : language === 'vi'
                  ? 'Liên Kết Nhanh'
                  : '快速链接'}
              </h4>
              <ul className="space-y-2">
                {links.quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-gold text-sm">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold font-medium mb-3">
                {language === 'en' 
                  ? 'Resources' 
                  : language === 'vi'
                  ? 'Tài Nguyên'
                  : '资源'}
              </h4>
              <ul className="space-y-2">
                {links.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-white/70 hover:text-gold text-sm">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-gold font-medium mb-3">
                {language === 'en' 
                  ? 'Contact' 
                  : language === 'vi'
                  ? 'Liên Hệ'
                  : '联系'}
              </h4>
              <ul className="space-y-2">
                {links.contact.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      target={link.href.startsWith('http') ? '_blank' : undefined} 
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/70 hover:text-gold text-sm flex items-center gap-2"
                    >
                      {link.icon && link.icon} {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">&copy; {currentYear} AGT EA. 
            {language === 'en' 
              ? 'All rights reserved.' 
              : language === 'vi'
              ? 'Đã đăng ký bản quyền.'
              : '保留所有权利。'}
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/50 hover:text-gold text-sm">
                  {language === 'en' 
                    ? 'Privacy Policy' 
                    : language === 'vi'
                    ? 'Chính Sách Bảo Mật'
                    : '隐私政策'}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-gold text-sm">
                  {language === 'en' 
                    ? 'Terms of Service' 
                    : language === 'vi'
                    ? 'Điều Khoản Dịch Vụ'
                    : '服务条款'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
