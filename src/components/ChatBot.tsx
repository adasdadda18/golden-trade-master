
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
  // Gemini Pro 1.5 model
  const API_KEY = "AIzaSyDcQmwW9n5P5hqX3L51buPzZ_VBXqCI_Ok";
  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent";

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
        role: 'assistant', 
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
    <div className="flex flex-col w-full max-w-md mx-auto h-[500px] sm:h-[600px] bg-navy-light rounded-lg border border-gold/30 shadow-lg overflow-hidden">
      <div className="p-3 sm:p-4 bg-gold bg-gradient-to-r from-gold to-gold-dark rounded-t-lg border-b border-navy flex items-center">
        <Avatar className="h-8 w-8 mr-2 bg-navy">
          <AvatarFallback className="text-gold">AGT</AvatarFallback>
          <AvatarImage src="/placeholder.svg" alt="AGT Assistant" />
        </Avatar>
        <h3 className="text-navy font-bold text-base sm:text-lg">AGT Assistant</h3>
      </div>
      
      <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gradient-to-b from-navy to-navy-light">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === 'user' 
                ? 'ml-auto flex items-start gap-2' 
                : 'mr-auto flex items-start gap-2'
            } max-w-[85%] animate-fade-in`}
          >
            {msg.role === 'user' ? (
              <>
                <div className="order-2 bg-gold text-navy p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                  {msg.content}
                </div>
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8 bg-gold/80 order-1">
                  <AvatarFallback className="text-navy text-xs sm:text-sm">You</AvatarFallback>
                  <User className="h-3 w-3 sm:h-4 sm:w-4 text-navy" />
                </Avatar>
              </>
            ) : (
              <>
                <Avatar className="h-6 w-6 sm:h-8 sm:w-8 bg-navy order-1">
                  <AvatarFallback className="text-gold text-xs sm:text-sm">AGT</AvatarFallback>
                  <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-gold" />
                </Avatar>
                <div className="order-2 bg-navy-light text-white border border-gold/20 p-2 sm:p-3 rounded-lg shadow-md text-sm sm:text-base">
                  {msg.content}
                </div>
              </>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 sm:p-4 border-t border-gold/30 bg-navy">
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
            className="flex-1 bg-navy-light text-white border-gold/30 focus:border-gold focus:ring-2 focus:ring-gold/30 text-sm sm:text-base"
          />
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()} 
            className="bg-gold hover:bg-gold-dark text-navy font-medium h-9 sm:h-10 w-9 sm:w-10 p-0"
            size="icon"
          >
            {isLoading ? (
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Send className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
