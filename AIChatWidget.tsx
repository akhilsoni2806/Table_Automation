import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'System Online. Query the Maglev database.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setLoading(true);

    const responseText = await generateAIResponse(inputValue);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-black border border-neutral-800 shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-none flex flex-col h-96">
          <div className="flex justify-between items-center p-3 border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-white">Maglev AI Core</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 text-xs md:text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-neutral-800 text-white border border-neutral-700' 
                    : 'bg-black text-neutral-300 border border-neutral-900 border-l-2 border-l-white'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-black text-neutral-500 text-xs p-2 animate-pulse">
                  Processing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-neutral-800 bg-black flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Enter command..."
              className="flex-1 bg-transparent border-b border-neutral-800 focus:border-white outline-none text-sm text-white placeholder-neutral-700 pb-1"
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="text-white hover:text-neutral-400 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-black border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]"
      >
        <MessageSquare className="w-5 h-5" />
      </button>
    </div>
  );
};

export default AIChatWidget;
