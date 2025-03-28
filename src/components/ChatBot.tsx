
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Xin chào! Tôi là AGT Assistant, tôi có thể giúp gì cho bạn về EA giao dịch vàng?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const API_KEY = "AIzaSyDcQmwW9n5P5hqX3L51buPzZ_VBXqCI_Ok";
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-2.0:generateContent";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [
                { 
                  text: `
                  Context about AGT EA: 
                  AGT EA là một công cụ giao dịch mạnh mẽ được thiết kế riêng cho thị trường vàng đầy biến động. 
                  Logic giao dịch của nó được xây dựng dựa trên các điểm vào và ra chính xác, khiến nó trở nên lý tưởng cho cả người giao dịch mới lẫn người có kinh nghiệm. 
                  Với trọng tâm là phục hồi từ các khoản lỗ, EA này hoạt động với mức sụt giảm tối thiểu và tối ưu hóa lợi nhuận thông qua các chiến lược quản lý rủi ro. 
                  Bộ lọc tin tức tích hợp và tính năng thực thi giao dịch tự động giúp đảm bảo sự ổn định trong các điều kiện thị trường biến động.
                  
                  Cài đặt Đề xuất: Khung thời gian: Hoạt động tốt nhất trên các khung thời gian M5, M15 hoặc H1 để đạt kết quả tối ưu.
                  Cặp tiền: Chủ yếu giao dịch trên XAUUSD (Vàng).
                  Cài đặt rủi ro: Rủi ro có thể được điều chỉnh theo sở thích của người giao dịch, nhưng mức rủi ro 1-2% cho mỗi giao dịch được khuyến nghị.
                  Kích thước lô: Có sẵn tính năng tự động điều chỉnh kích thước lô, nhưng nên đặt kích thước lô cố định tùy thuộc vào quy mô tài khoản (ví dụ: 0.01 lô cho mỗi 1000 USD).
                  Bộ lọc tin tức: Nên bật tùy chọn bộ lọc tin tức để tránh giao dịch trong các sự kiện có tác động lớn.
                  
                  Tính năng của AGT: Tự động điều chỉnh kích thước lô, Hệ thống phục hồi, Bộ lọc tin tức, Quản lý lợi nhuận, Sụt giảm thấp.
                  
                  User message: ${input}
                  
                  Instructions: Be helpful, concise, and accurate. Answer questions about AGT EA trading tool. If you don't know the answer, say so clearly without making up information. Respond in Vietnamese.
                  `
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.2,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1000,
          }
        }),
      });

      const data = await response.json();
      
      if (data.candidates && data.candidates[0]?.content) {
        const botResponse: Message = { 
          role: 'assistant', 
          content: data.candidates[0].content.parts[0].text 
        };
        setMessages((prev) => [...prev, botResponse]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      toast({
        title: "Lỗi kết nối",
        description: "Không thể kết nối với dịch vụ AI. Vui lòng thử lại sau.",
        variant: "destructive"
      });
      setMessages((prev) => [...prev, { 
        role: 'assistant' as const, 
        content: 'Xin lỗi, đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto h-[500px] bg-navy-light rounded-lg border border-navy">
      <div className="p-4 bg-navy rounded-t-lg border-b border-navy flex items-center">
        <Bot className="text-gold mr-2" size={20} />
        <h3 className="text-gold font-semibold">AGT Assistant</h3>
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === 'user' 
                ? 'ml-auto bg-gold/20 text-white' 
                : 'mr-auto bg-navy text-white'
            } p-3 rounded-lg max-w-[80%]`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-navy bg-navy-light rounded-b-lg">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Nhập câu hỏi của bạn..."
            disabled={isLoading}
            className="flex-1 bg-navy-light text-white border-navy focus:border-gold"
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()} 
            className="bg-gold hover:bg-gold-dark text-navy"
          >
            <Send size={18} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
