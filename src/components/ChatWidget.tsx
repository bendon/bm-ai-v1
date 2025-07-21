"use client"
import { useState } from 'react';
import { FiMessageCircle, FiX } from 'react-icons/fi';

const demoMessages = [
  { type: 'ai', text: "🎤 Niaje!\nI'm BM, your AI assistant.\nNaweza kukusaidia in English or Swahili.\nHow may I help you today?", time: "2:30 PM" },
  { type: 'user', text: "Hi BM! I want to check my account balance.\nNataka kuconfirm pia transaction nilifanya leo asubuhi.", time: "2:31 PM" },
  { type: 'ai', text: "Of course! Sawa, let me help you with that. Can you confirm your phone number please? Tafadhali nambari yako ya simu?", time: "2:31 PM" },
  { type: 'user', text: "0722123456", time: "2:32 PM" },
  { type: 'ai', text: "Perfect! Sawa sana. Your current balance is KSh 1,450. Would you like to see recent transactions? Unataka kuona transactions za hivi karibuni?", time: "2:32 PM" },
  { type: 'user', text: "Yes, please show me the last 5 transactions. Naomba transactions 5 za mwisho", time: "2:33 PM" },
  { type: 'ai', text: "Here are your last 5 transactions:\n\n1. M-Pesa Deposit: +KSh 5,000 (Today 10:30 AM)\n2. Shop Payment: -KSh 2,150 (Yesterday 3:45 PM)\n3. ATM Withdrawal: -KSh 1,000 (Yesterday 11:20 AM)\n4. Salary Credit: +KSh 25,000 (2 days ago)\n5. Utility Bill: -KSh 3,400 (3 days ago)\n\nTotal balance: KSh 1,450\n\nKuna transaction yoyote unayotaka kujua zaidi?", time: "2:33 PM" },
  { type: 'user', text: "Hiyo M-Pesa deposit, ni nani aliyetuma?", time: "2:34 PM" },
  { type: 'ai', text: "The M-Pesa deposit was from John Kamau. Alikuwa anatumia number 0712***678. Would you like me to save this contact for future reference? Unataka nisave contact hii?", time: "2:34 PM" },
  { type: 'user', text: "Yes, please save it. Asante BM!", time: "2:35 PM" },
  { type: 'ai', text: "You're welcome! Karibu sana. Contact imesave. Is there anything else I can help you with today? Kuna jambo lingine naweza kukusaidia?", time: "2:35 PM" }
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          className="bg-black text-white rounded-full shadow-2xl p-4 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10"
          onClick={() => setOpen(true)}
          aria-label="Open chat demo"
        >
          <FiMessageCircle size={28} />
        </button>
      )}
      {/* Chat Widget */}
      {open && (
        <div className="w-80 max-w-[90vw] bg-black border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/90">
            <div className="flex items-center gap-2">
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">BM</span>
              <span className="font-semibold text-white/90 text-lg">BM AI Assistant</span>
            </div>
            <button
              className="text-white/60 hover:text-white p-1"
              onClick={() => setOpen(false)}
              aria-label="Close chat demo"
            >
              <FiX size={22} />
            </button>
          </div>
          <div className="flex-1 bg-black/95 px-4 py-3 space-y-3 overflow-y-auto" style={{ maxHeight: 400 }}>
            {demoMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.type === 'ai' ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[75%] p-3 rounded-2xl text-base whitespace-pre-line font-medium ${
                  msg.type === 'ai'
                    ? 'bg-white/10 border-l-4 border-white text-left text-white'
                    : 'bg-white/5 border-r-4 border-white/50 text-right text-white'
                }`}>
                  <div className="text-xs text-white/70 mb-1 font-semibold">{msg.time}</div>
                  <div>{msg.text}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 bg-black/80 border-t border-white/10 text-center text-base text-white/80 font-semibold">
            This is a demo preview. No input required.
          </div>
        </div>
      )}
    </div>
  );
} 