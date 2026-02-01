
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Bot, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';
import { AI_CONTEXT } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Corporate Intelligence Online. Inquire about MART BUILDERS technical capacity or tender protocols.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: AI_CONTEXT,
          temperature: 0.2,
        },
      });

      const botResponse = response.text || "Security protocol engaged. Please contact our Sylhet office directly for official verification.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily restricted for maintenance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#0B2A4A] text-white rounded-full shadow-2xl flex items-center justify-center border-4 border-white relative"
      >
        {isOpen ? <X size={24} strokeWidth={2} /> : <Command size={24} strokeWidth={2} />}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F2B705] rounded-full border-2 border-white"></span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-24 right-0 w-[420px] h-[640px] bg-white shadow-[0_40px_80px_-20px_rgba(11,42,74,0.3)] rounded-3xl border border-[#0B2A4A]/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#0B2A4A] p-8 flex items-center justify-between text-white border-b border-white/5">
              <div className="flex items-center space-x-5">
                <div className="w-12 h-12 bg-[#F2B705] rounded-xl flex items-center justify-center shadow-lg">
                  <Bot size={22} className="text-[#0B2A4A]" />
                </div>
                <div>
                  <h4 className="font-black text-lg tracking-tight uppercase">Corporate Assistant</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-[#F2B705] rounded-full animate-pulse" />
                    <p className="font-mono text-[9px] text-[#F2B705] uppercase tracking-widest font-black">Authorized Interface</p>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-8 bg-[#F7F9FB]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-white font-mono text-[10px] font-black ${msg.role === 'user' ? 'bg-[#2F6FA3]' : 'bg-[#0B2A4A]'}`}>
                      {msg.role === 'user' ? 'USR' : 'MB'}
                    </div>
                    <div className={`p-5 text-sm rounded-2xl font-medium leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                      ? 'bg-[#0B2A4A] text-white rounded-tr-none' 
                      : 'bg-white text-[#1F2933] border border-[#0B2A4A]/5 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl flex items-center space-x-3 text-[#0B2A4A]/30 border border-[#0B2A4A]/5 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-[#F2B705]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest font-black">Verifying Protocols...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-8 border-t border-[#0B2A4A]/5 bg-white">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="relative"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about tenders or compliance..."
                  className="w-full pl-6 pr-16 py-5 bg-[#F7F9FB] border-2 border-[#0B2A4A]/5 rounded-2xl text-sm text-[#0B2A4A] font-medium focus:outline-none focus:border-[#F2B705] transition-all placeholder:text-[#0B2A4A]/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#0B2A4A] text-white rounded-xl flex items-center justify-center hover:bg-[#F2B705] hover:text-[#0B2A4A] disabled:bg-neutral-100 disabled:text-neutral-400 transition-all shadow-md"
                >
                  <Send size={18} />
                </button>
              </form>
              <p className="font-mono text-[8px] text-center text-[#1F2933]/30 mt-6 uppercase tracking-[0.2em] font-black">Secure Government Liaison Channel</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAssistant;