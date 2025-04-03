
import React from 'react';
import { Zap, Workflow, BarChart4, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslations } from '../translations';

const StrategySection = () => {
  const { language } = useLanguage();
  const { t } = useTranslations(language);

  return (
    <section id="strategy" className="py-20 bg-gradient-to-b from-navy-light to-navy">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gold-gradient bg-clip-text text-transparent">{t('strategy')}</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            {language === 'en' 
              ? 'AGT EA follows a grid-based strategic approach combined with a recovery system' 
              : 'AGT EA tuân theo phương pháp chiến lược dựa trên lưới kết hợp với hệ thống phục hồi'}
          </p>
        </div>

        <div className="bg-navy-light/30 backdrop-blur-sm border border-gold/10 rounded-xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-gold text-2xl font-semibold mb-4">
                {language === 'en' ? 'How Our Strategy Works' : 'Cách Hoạt Động Của Chiến Lược'}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'en'
                  ? 'When the market shows a trend or volatility, the EA carefully places trades in the direction of the market, waiting for retracements before entering new positions. It takes advantage of both short-term price volatility and long-term trends by maintaining flexible risk management.'
                  : 'Khi thị trường cho thấy xu hướng hoặc biến động, EA đặt các giao dịch một cách cẩn thận theo hướng của thị trường, chờ đợi các điều chỉnh trước khi đưa vào các vị thế mới. Nó tận dụng cả biến động giá ngắn hạn và xu hướng dài hạn bằng cách duy trì quản lý rủi ro linh hoạt.'}
              </p>
              <p className="text-white/80 mb-6">
                {language === 'en'
                  ? 'Stop-loss and take-profit levels are dynamically adjusted, ensuring optimal trade entry and exit points. In case of losses, the recovery system places larger trades in subsequent cycles to offset the deficit.'
                  : 'Các mức dừng lỗ và chốt lời được điều chỉnh động, đảm bảo các điểm vào và thoát giao dịch tối ưu. Trong trường hợp có tổn thất, hệ thống phục hồi sẽ đặt các giao dịch lớn hơn trong các chu kỳ tiếp theo để bù đắp khoản thiếu hụt.'}
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <Zap className="text-gold mt-1 w-5 h-5" />
                  <div>
                    <h4 className="text-white font-medium">
                      {language === 'en' 
                        ? 'Precision Entry Points' 
                        : 'Điểm Vào Chính Xác'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {language === 'en'
                        ? 'Algorithmic analysis identifies optimal market entry moments'
                        : 'Phân tích thuật toán xác định các thời điểm vào thị trường tối ưu'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Workflow className="text-gold mt-1 w-5 h-5" />
                  <div>
                    <h4 className="text-white font-medium">
                      {language === 'en' 
                        ? 'Adaptive Recovery' 
                        : 'Phục Hồi Linh Hoạt'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {language === 'en'
                        ? 'Smart position sizing after losses to recover efficiently'
                        : 'Điều chỉnh kích thước vị thế thông minh sau các tổn thất để phục hồi hiệu quả'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BarChart4 className="text-gold mt-1 w-5 h-5" />
                  <div>
                    <h4 className="text-white font-medium">
                      {language === 'en' 
                        ? 'Market Volatility Protection' 
                        : 'Bảo Vệ Khỏi Biến Động Thị Trường'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {language === 'en'
                        ? 'Built-in mechanisms to protect against extreme market conditions'
                        : 'Các cơ chế tích hợp để bảo vệ chống lại các điều kiện thị trường cực đoan'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <div className="bg-navy p-4 rounded-xl border border-gold/20">
                  <div className="mb-4 border-b border-gold/10 pb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gold font-medium">Strategy Flow</span>
                      <TrendingUp className="text-gold w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Flow chart for strategy */}
                    <div className="flex flex-col items-center">
                      <div className="w-48 bg-navy-light border border-gold/20 rounded-lg p-3 text-center mb-8 relative">
                        <span className="text-white">Market Analysis</span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-px h-6 bg-gold/30"></div>
                      </div>
                      
                      <div className="w-48 bg-navy-light border border-gold/20 rounded-lg p-3 text-center mb-8 relative">
                        <span className="text-white">Entry Condition Check</span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-px h-6 bg-gold/30"></div>
                      </div>
                      
                      <div className="flex justify-center gap-8 mb-8 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-32 h-px bg-gold/30"></div>
                        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-6 w-px h-6 bg-gold/30"></div>
                        <div className="absolute top-0 left-3/4 transform -translate-x-1/2 -translate-y-6 w-px h-6 bg-gold/30"></div>
                        
                        <div className="w-32 bg-green-800/60 border border-green-500/30 rounded-lg p-2 text-center">
                          <span className="text-white text-sm">Successful Trade</span>
                        </div>
                        
                        <div className="w-32 bg-red-900/40 border border-red-500/30 rounded-lg p-2 text-center">
                          <span className="text-white text-sm">Loss</span>
                        </div>
                      </div>
                      
                      <div className="w-48 bg-navy-light border border-gold/20 rounded-lg p-3 text-center mb-4 relative">
                        <span className="text-white">Recovery Analysis</span>
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-px h-6 bg-gold/30"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-gold/20 rounded-full blur-xl"></div>
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-gold/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;

