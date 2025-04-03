
import { Language } from '../contexts/LanguageContext';

type TranslationKey = 
  | 'downloadNow'
  | 'learnMore'
  | 'home'
  | 'product'
  | 'testimonials'
  | 'features'
  | 'settings'
  | 'strategy'
  | 'performance'
  | 'faq'
  | 'support'
  | 'conclusion'
  | 'heroTitle'
  | 'heroSubtitle'
  | 'featuresTitle'
  | 'featuresSubtitle';

// Define translations for each language
const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    downloadNow: 'Download Now',
    learnMore: 'Learn More',
    home: 'Home',
    product: 'Product',
    testimonials: 'Testimonials',
    features: 'Features',
    settings: 'Settings',
    strategy: 'Strategy',
    performance: 'Performance',
    faq: 'FAQ',
    support: 'Support',
    conclusion: 'Conclusion',
    heroTitle: 'Automated Gold Trading',
    heroSubtitle: 'A powerful trading tool specifically designed for the volatile gold market with precise entry and exit points.',
    featuresTitle: 'AGT Features',
    featuresSubtitle: 'Our Expert Advisor comes packed with powerful features designed to maximize your gold trading potential'
  },
  vi: {
    downloadNow: 'Tải Ngay',
    learnMore: 'Tìm Hiểu Thêm',
    home: 'Trang Chủ',
    product: 'Sản Phẩm',
    testimonials: 'Đánh Giá',
    features: 'Tính Năng',
    settings: 'Cài Đặt',
    strategy: 'Chiến Lược',
    performance: 'Hiệu Suất',
    faq: 'Câu Hỏi',
    support: 'Hỗ Trợ',
    conclusion: 'Tổng Kết',
    heroTitle: 'Giao Dịch Vàng Tự Động',
    heroSubtitle: 'Công cụ giao dịch mạnh mẽ được thiết kế đặc biệt cho thị trường vàng biến động với các điểm vào và ra chính xác.',
    featuresTitle: 'Tính Năng AGT',
    featuresSubtitle: 'Cố Vấn Chuyên Gia của chúng tôi đi kèm với các tính năng mạnh mẽ được thiết kế để tối đa hóa tiềm năng giao dịch vàng của bạn'
  }
};

// Create a translation function
export const useTranslations = (language: Language) => {
  return {
    t: (key: TranslationKey) => translations[language][key] || translations.en[key]
  };
};
