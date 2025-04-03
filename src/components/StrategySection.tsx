
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
              : language === 'vi'
              ? 'AGT EA tuân theo phương pháp chiến lược dựa trên lưới kết hợp với hệ thống phục hồi'
              : 'AGT EA遵循基于网格的策略方法，结合恢复系统'}
          </p>
        </div>

        <div className="bg-navy-light/30 backdrop-blur-sm border border-gold/10 rounded-xl p-8 mb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-gold text-2xl font-semibold mb-4">
                {language === 'en' 
                  ? 'How Our Strategy Works' 
                  : language === 'vi'
                  ? 'Cách Hoạt Động Của Chiến Lược'
                  : '我们的策略如何运作'}
              </h3>
              <p className="text-white/80 mb-6">
                {language === 'en'
                  ? 'When the market shows a trend or volatility, the EA carefully places trades in the direction of the market, waiting for retracements before entering new positions. It takes advantage of both short-term price volatility and long-term trends by maintaining flexible risk management.'
                  : language === 'vi'
                  ? 'Khi thị trường cho thấy xu hướng hoặc biến động, EA đặt các giao dịch một cách cẩn thận theo hướng của thị trường, chờ đợi các điều chỉnh trước khi đưa vào các vị thế mới. Nó tận dụng cả biến động giá ngắn hạn và xu hướng dài hạn bằng cách duy trì quản lý rủi ro linh hoạt.'
                  : '当市场显示趋势或波动时，EA会沿着市场方向谨慎下单，等待回调后再进入新仓位。它通过维持灵活的风险管理，同时利用短期价格波动和长期趋势。'}
              </p>
              <p className="text-white/80 mb-6">
                {language === 'en'
                  ? 'Stop-loss and take-profit levels are dynamically adjusted, ensuring optimal trade entry and exit points. In case of losses, the recovery system places larger trades in subsequent cycles to offset the deficit.'
                  : language === 'vi'
                  ? 'Các mức dừng lỗ và chốt lời được điều chỉnh động, đảm bảo các điểm vào và thoát giao dịch tối ưu. Trong trường hợp có tổn thất, hệ thống phục hồi sẽ đặt các giao dịch lớn hơn trong các chu kỳ tiếp theo để bù đắp khoản thiếu hụt.'
                  : '止损和止盈水平被动态调整，确保最佳交易入场和出场点位。在出现亏损的情况下，恢复系统会在后续周期中下更大的单，以抵消亏损。'}
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <Zap className="text-gold mt-1 w-5 h-5" />
                  <div>
                    <h4 className="text-white font-medium">
                      {language === 'en' 
                        ? 'Precision Entry Points' 
                        : language === 'vi'
                        ? 'Điểm Vào Chính Xác'
                        : '精确入场点'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {language === 'en'
                        ? 'Algorithmic analysis identifies optimal market entry moments'
                        : language === 'vi'
                        ? 'Phân tích thuật toán xác định các thời điểm vào thị trường tối ưu'
                        : '算法分析识别最佳市场入场时机'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Workflow className="text-gold mt-1 w-5 h-5" />
                  <div>
                    <h4 className="text-white font-medium">
                      {language === 'en' 
                        ? 'Adaptive Recovery' 
                        : language === 'vi'
                        ? 'Phục Hồi Linh Hoạt'
                        : '自适应恢复'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {language === 'en'
                        ? 'Smart position sizing after losses to recover efficiently'
                        : language === 'vi'
                        ? 'Điều chỉnh kích thước vị thế thông minh sau các tổn thất để phục hồi hiệu quả'
                        : '亏损后的智能仓位调整，以实现高效恢复'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <BarChart4 className="text-gold mt-1 w-5 h-5" />
                  <div>
                    <h4 className="text-white font-medium">
                      {language === 'en' 
                        ? 'Market Volatility Protection' 
                        : language === 'vi'
                        ? 'Bảo Vệ Khỏi Biến Động Thị Trường'
                        : '市场波动保护'}
                    </h4>
                    <p className="text-white/60 text-sm">
                      {language === 'en'
                        ? 'Built-in mechanisms to protect against extreme market conditions'
                        : language === 'vi'
                        ? 'Các cơ chế tích hợp để bảo vệ chống lại các điều kiện thị trường cực đoan'
                        : '内置机制，保护交易免受极端市场条件影响'}
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
                      <span className="text-gold font-medium">
                        {language === 'en' ? 'Strategy Flow' : language === 'vi' ? 'Luồng Chiến Lược' : '策略流程'}
                      </span>
                      <TrendingUp className="text-gold w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Flow chart for strategy */}
                    <div className="flex flex-col items-center">
                      <div className="w-48 bg-navy-light border border-gold/20 rounded-lg p-3 text-center mb-8 relative">
                        <span className="text-white">
                          {language === 'en' ? 'Market Analysis' : language === 'vi' ? 'Phân Tích Thị Trường' : '市场分析'}
                        </span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-px h-6 bg-gold/30"></div>
                      </div>
                      
                      <div className="w-48 bg-navy-light border border-gold/20 rounded-lg p-3 text-center mb-8 relative">
                        <span className="text-white">
                          {language === 'en' ? 'Entry Condition Check' : language === 'vi' ? 'Kiểm Tra Điều Kiện Vào' : '入场条件检查'}
                        </span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-px h-6 bg-gold/30"></div>
                      </div>
                      
                      <div className="flex justify-center gap-8 mb-8 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 w-32 h-px bg-gold/30"></div>
                        <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-6 w-px h-6 bg-gold/30"></div>
                        <div className="absolute top-0 left-3/4 transform -translate-x-1/2 -translate-y-6 w-px h-6 bg-gold/30"></div>
                        
                        <div className="w-32 bg-green-800/60 border border-green-500/30 rounded-lg p-2 text-center">
                          <span className="text-white text-sm">
                            {language === 'en' ? 'Successful Trade' : language === 'vi' ? 'Giao Dịch Thành Công' : '成功交易'}
                          </span>
                        </div>
                        
                        <div className="w-32 bg-red-900/40 border border-red-500/30 rounded-lg p-2 text-center">
                          <span className="text-white text-sm">
                            {language === 'en' ? 'Loss' : language === 'vi' ? 'Thua Lỗ' : '亏损'}
                          </span>
                        </div>
                      </div>
                      
                      <div className="w-48 bg-navy-light border border-gold/20 rounded-lg p-3 text-center mb-4 relative">
                        <span className="text-white">
                          {language === 'en' ? 'Recovery Analysis' : language === 'vi' ? 'Phân Tích Phục Hồi' : '恢复分析'}
                        </span>
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
