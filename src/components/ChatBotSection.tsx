
import React from 'react';
import ChatBot from './ChatBot';

const ChatBotSection = () => {
  return (
    <section id="chatbot" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          <span className="text-gold">Hỗ Trợ</span> Trực Tuyến
        </h2>
        <div className="flex flex-col items-center justify-center">
          <p className="text-white/80 text-center max-w-2xl mb-10">
            Có câu hỏi về AGT EA? Trợ lý AI của chúng tôi sẵn sàng trả lời mọi thắc mắc của bạn về công cụ giao dịch, cài đặt, và chiến lược.
          </p>
          <ChatBot />
        </div>
      </div>
    </section>
  );
};

export default ChatBotSection;
