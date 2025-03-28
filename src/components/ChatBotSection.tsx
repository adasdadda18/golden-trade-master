
import React from 'react';
import ChatBot from './ChatBot';
import { useIsMobile } from "@/hooks/use-mobile";

const ChatBotSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="chatbot" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="text-gold">Hỗ Trợ</span> Trực Tuyến
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-10">
          Có câu hỏi về AGT EA? Trợ lý AI của chúng tôi sẵn sàng trả lời mọi thắc mắc của bạn về công cụ giao dịch, cài đặt, và chiến lược.
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <ChatBot />
          </div>
          <div className="mt-8 text-center">
            <p className="text-gold-light italic">"Trải nghiệm hỗ trợ không giới hạn 24/7 với AGT Assistant."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBotSection;
