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
  | 'featuresSubtitle'
  | 'readyToTransform'
  | 'keyBenefits'
  | 'getStartedToday'
  | 'experienceThePower'
  | 'compatibleWith'
  | 'viewAllSuccess'
  | 'whatTradersSay'
  | 'hearFromTraders'
  | 'accountGrowth'
  | 'totalProfit'
  | 'winRate'
  | 'maxDrawdown'
  | 'recoveryFactor'
  | 'performanceTitle'
  | 'performanceSubtitle'
  | 'performanceNote'
  | 'recommendedSettings'
  | 'settingsDescription'
  | 'settingsPreview'
  | 'currencyPair'
  | 'timeframe'
  | 'lotSize'
  | 'risk'
  | 'recoveryMode'
  | 'enabled'
  | 'disabled'
  | 'enableNewsFilter'
  | 'applySettings'
  | 'frequentlyAskedQuestions'
  | 'findAnswers'
  | 'stillHaveQuestions'
  | 'askAI'
  | 'contactSupport'
  | 'expertAdvisor';

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
    featuresSubtitle: 'Our Expert Advisor comes packed with powerful features designed to maximize your gold trading potential',
    readyToTransform: 'Ready to Transform Your Gold Trading?',
    keyBenefits: 'Key Benefits',
    getStartedToday: 'Get Started Today',
    experienceThePower: 'Experience the power of AGT EA and see the difference in your gold trading results',
    compatibleWith: 'Compatible with MT4 | Instant Download | 24/7 Support',
    viewAllSuccess: 'View All Success Stories',
    whatTradersSay: 'What Traders Say',
    hearFromTraders: 'Hear from traders who have integrated AGT EA into their trading systems',
    accountGrowth: 'Account Growth Over Time',
    totalProfit: 'Total Profit',
    winRate: 'Win Rate',
    maxDrawdown: 'Max Drawdown',
    recoveryFactor: 'Recovery Factor',
    performanceTitle: 'Performance & Drawdown',
    performanceSubtitle: 'In backtests and real-time simulations, AGT EA has demonstrated the ability to generate consistent profits with minimal drawdown',
    performanceNote: 'Even in volatile market conditions, the EA performs effectively thanks to its news filter and recovery mechanisms. Drawdowns are well-controlled, with losses being offset in short timeframes.',
    recommendedSettings: 'Recommended Settings',
    settingsDescription: 'To maximize the potential of AGT EA, the following settings are recommended. These configurations have been tested extensively to deliver optimal performance in various market conditions.',
    settingsPreview: 'Settings Preview',
    currencyPair: 'Currency Pair',
    timeframe: 'Timeframe',
    lotSize: 'Lot Size',
    risk: 'Risk (%)',
    recoveryMode: 'Recovery Mode',
    enabled: 'Enabled',
    disabled: 'Disabled',
    enableNewsFilter: 'Enable News Filter',
    applySettings: 'Apply Settings',
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    findAnswers: 'Find answers to common questions about AGT EA',
    stillHaveQuestions: 'Still have questions?',
    askAI: 'Ask our AI assistant',
    contactSupport: 'contact our support team',
    expertAdvisor: 'Expert Advisor'
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
    featuresSubtitle: 'Cố Vấn Chuyên Gia của chúng tôi đi kèm với các tính năng mạnh mẽ được thiết kế để tối đa hóa tiềm năng giao dịch vàng của bạn',
    readyToTransform: 'Sẵn Sàng Thay Đổi Giao Dịch Vàng Của Bạn?',
    keyBenefits: 'Lợi Ích Chính',
    getStartedToday: 'Bắt Đầu Ngay Hôm Nay',
    experienceThePower: 'Trải nghiệm sức mạnh của AGT EA và thấy sự khác biệt trong kết quả giao dịch vàng của bạn',
    compatibleWith: 'Tương thích với MT4 | Tải xuống ngay | Hỗ trợ 24/7',
    viewAllSuccess: 'Xem Tất Cả Câu Chuyện Thành Công',
    whatTradersSay: 'Nhà Giao Dịch Nói Gì',
    hearFromTraders: 'Lắng nghe từ các nhà giao dịch đã tích hợp AGT EA vào hệ thống giao dịch của họ',
    accountGrowth: 'Tăng Trưởng Tài Khoản Theo Thời Gian',
    totalProfit: 'Tổng Lợi Nhuận',
    winRate: 'Tỷ Lệ Thắng',
    maxDrawdown: 'Giảm Giá Tối Đa',
    recoveryFactor: 'Hệ Số Phục Hồi',
    performanceTitle: 'Hiệu Suất & Giảm Giá',
    performanceSubtitle: 'Trong các bài kiểm tra lùi và mô phỏng thời gian thực, AGT EA đã chứng minh khả năng tạo ra lợi nhuận ổn định với mức giảm giá tối thiểu',
    performanceNote: 'Ngay cả trong điều kiện thị trường biến động, EA hoạt động hiệu quả nhờ bộ lọc tin tức và cơ chế phục hồi. Giảm giá được kiểm soát tốt, với các khoản lỗ được bù đắp trong thời gian ngắn.',
    recommendedSettings: 'Cài Đặt Đề Xuất',
    settingsDescription: 'Để tối đa hóa tiềm năng của AGT EA, các cài đặt sau đây được đề xuất. Những cấu hình này đã được kiểm tra kỹ lưỡng để mang lại hiệu suất tối ưu trong các điều kiện thị trường khác nhau.',
    settingsPreview: 'Xem Trước Cài Đặt',
    currencyPair: 'Cặp Tiền Tệ',
    timeframe: 'Khung Thời Gian',
    lotSize: 'Kích Thước Lô',
    risk: 'Rủi Ro (%)',
    recoveryMode: 'Chế Độ Phục Hồi',
    enabled: 'Bật',
    disabled: 'Tắt',
    enableNewsFilter: 'Bật Bộ Lọc Tin Tức',
    applySettings: 'Áp Dụng Cài Đặt',
    frequentlyAskedQuestions: 'Câu Hỏi Thường Gặp',
    findAnswers: 'Tìm câu trả lời cho các câu hỏi phổ biến về AGT EA',
    stillHaveQuestions: 'Vẫn còn câu hỏi?',
    askAI: 'Hỏi trợ lý AI của chúng tôi',
    contactSupport: 'liên hệ đội hỗ trợ của chúng tôi',
    expertAdvisor: 'Cố Vấn Chuyên Gia'
  },
  zh: {
    downloadNow: '立即下载',
    learnMore: '了解更多',
    home: '首页',
    product: '产品',
    testimonials: '用户评价',
    features: '功能特点',
    settings: '设置',
    strategy: '策略',
    performance: '性能',
    faq: '常见问题',
    support: '支持',
    conclusion: '总结',
    heroTitle: '自动化黄金交易',
    heroSubtitle: '专为波动的黄金市场设计的强大交易工具，具有精确的进出点。',
    featuresTitle: 'AGT 功能',
    featuresSubtitle: '我们的专家顾问配备了强大的功能，旨在最大化您的黄金交易潜力',
    readyToTransform: '准备好改变您的黄金交易了吗？',
    keyBenefits: '主要优势',
    getStartedToday: '今天开始',
    experienceThePower: '体验AGT EA的强大功能，看到您的黄金交易结果的差异',
    compatibleWith: '兼容MT4 | 即时下载 | 24/7支持',
    viewAllSuccess: '查看所有成功案例',
    whatTradersSay: '交易者怎么说',
    hearFromTraders: '听听已将AGT EA整合到其交易系统中的交易者的意见',
    accountGrowth: '账户随时间增长',
    totalProfit: '总利润',
    winRate: '胜率',
    maxDrawdown: '最大回撤',
    recoveryFactor: '恢复因子',
    performanceTitle: '性能与回撤',
    performanceSubtitle: '在回测和实时模拟中，AGT EA已经证明了以最小的回撤生成一致利润的能力',
    performanceNote: '即使在波动的市场条件下，EA也能有效运行，这要归功于其新闻过滤器和恢复机制。回撤得到良好控制，损失在短时间内得到抵消。',
    recommendedSettings: '推荐设置',
    settingsDescription: '为了最大化AGT EA的潜力，建议使用以下设置。这些配置经过广泛测试，可在各种市场条件下提供最佳性能。',
    settingsPreview: '设置预览',
    currencyPair: '货币对',
    timeframe: '时间周期',
    lotSize: '交易量',
    risk: '风险 (%)',
    recoveryMode: '恢复模式',
    enabled: '启用',
    disabled: '禁用',
    enableNewsFilter: '启用新闻过滤器',
    applySettings: '应用设置',
    frequentlyAskedQuestions: '常见问题',
    findAnswers: '查找有关AGT EA的常见问题答案',
    stillHaveQuestions: '还有问题？',
    askAI: '咨询我们的AI助手',
    contactSupport: '联系我们的支持团队',
    expertAdvisor: '专家顾问'
  }
};

// Create a translation function
export const useTranslations = (language: Language) => {
  return {
    t: (key: TranslationKey) => translations[language][key] || translations.en[key]
  };
};
