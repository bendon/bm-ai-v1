'use client';

import { useState, useEffect } from 'react';
import { 
  FiMic, 
  FiZap, 
  FiGlobe, 
  FiShield, 
  FiDollarSign, 
  FiRefreshCw, 
  FiBarChart,
  FiMail,
  FiPhone,
  FiMapPin,
  FiMenu,
  FiX
} from 'react-icons/fi';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  const simulateCall = () => {
    alert("🎤 Connecting to BM AI Voice Bot...\n\nNiaje!\nI'm BM, your AI Assistant.\nNaweza kukusaidia in English or Swahili.\nHow may I help you today?\n\n(This is a demo preview)");
  };

  const usps = [
    {
      icon: <FiZap size={48} className="stroke-1" />,
      title: "Zero Wait Times",
      description: "Customers connect instantly with BM. No more frustrating menu navigation or long hold queues. Get immediate, intelligent responses 24/7."
    },
    {
      icon: <FiGlobe size={48} className="stroke-1" />,
      title: "Bilingual Intelligence", 
      description: "Seamlessly handles conversations in both English and Swahili. Code-switching supported for natural Kenyan communication patterns."
    },
    {
      icon: <FiShield size={48} className="stroke-1" />,
      title: "Bank-Grade Security",
      description: "PCI DSS compliant infrastructure with end-to-end encryption. Your customer data is protected with enterprise-level security protocols."
    },
    {
      icon: <FiDollarSign size={48} className="stroke-1" />,
      title: "Cost Reduction",
      description: "Reduce call center operational costs by up to 40% while improving customer satisfaction. Handle more inquiries with fewer human agents."
    },
    {
      icon: <FiRefreshCw size={48} className="stroke-1" />,
      title: "Real-Time Processing",
      description: "Process transactions, check balances, and update accounts in real-time. Direct integration with your existing systems for seamless operations."
    },
    {
      icon: <FiBarChart size={48} className="stroke-1" />,
      title: "Smart Analytics",
      description: "Gain insights into customer behavior, common pain points, and service optimization opportunities through advanced conversation analytics."
    }
  ];



  return (
    <div className="bg-black text-white font-['Gill_Sans',_'Gill_Sans_MT',_Calibri,_sans-serif]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/10 px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-[2px] uppercase">BM</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 list-none">
            <li><a href="#product" className="text-white/80 hover:text-white transition-colors">Technology</a></li>
            <li><a href="#usps" className="text-white/80 hover:text-white transition-colors">Features</a></li>
            <li><a href="#demo" className="text-white/80 hover:text-white transition-colors">Demo</a></li>
            <li><a href="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
            <li><a href="/about" className="text-white/80 hover:text-white transition-colors">About</a></li>
            <li><a href="/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} className="stroke-1" /> : <FiMenu size={24} className="stroke-1" />}
          </button>

          <a href="#contact" className="hidden md:block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all hover:-translate-y-0.5">
            Get Started
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-4 mt-4">
              <li><a href="#product" className="block text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Technology</a></li>
              <li><a href="#usps" className="block text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Features</a></li>
              <li><a href="#demo" className="block text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Demo</a></li>
              <li><a href="/pricing" className="block text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Pricing</a></li>
              <li><a href="/about" className="block text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="/contact" className="block text-white/80 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%), url('/images/tea-sector-loans-1200px.jpg')"
          }}
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='2' height='2' patternUnits='userSpaceOnUse'><path d='M 2 0 L 0 0 0 2' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='0.1'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-32 pb-16 z-10 relative text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight uppercase">
            NEXT-GENERATION<br />VOICE AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI voice technology that understands natural language and eliminates wait times. 
            Transform your customer service with human-like conversations in English and Swahili.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="#demo" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 hover:shadow-2xl">
              Experience Demo
            </a>
            <a href="#contact" className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 hover:border-white/60 transition-all">
              Get Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">92%</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">2M+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Conversations</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">60%</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Faster Resolution</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">24/7</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-32">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight tracking-tight">
                WHAT&apos;S IN THE<br />AI VOICE BOT
              </h2>
              <p className="text-xl text-white/80 mb-12 leading-relaxed">
                BM AI Voice Bot comes with everything you need to revolutionize customer service. 
                Powered by advanced language models running on enterprise Ubuntu servers.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Natural Language Processing in English & Swahili",
                  "Real-time Transaction Processing", 
                  "Intelligent Call Routing & Escalation",
                  "PCI DSS Compliant Security",
                  "24/7 Automated Customer Support",
                  "Advanced Analytics & Reporting"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-lg text-white/90 py-4 border-b border-white/10">
                    <span className="text-white font-bold text-xl">→</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#demo" className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:-translate-y-1">
                See Specifications
              </a>
            </div>
            
            {/* Product Visual */}
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Orbital Rings */}
              <div className="absolute w-96 h-96 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute w-[500px] h-[500px] border border-white/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
              
              {/* Central Bot Visual */}
              <div className="w-72 h-72 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center relative animate-bounce" style={{ animationDuration: '6s' }}>
                <FiMic size={96} className="text-white animate-pulse stroke-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section id="usps" className="py-32 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight">
            WHY CHOOSE BM
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left hover:-translate-y-3 hover:bg-white/8 hover:border-white/20 hover:shadow-2xl transition-all duration-300 backdrop-blur-xl group">
                <div className="w-full h-1 bg-gradient-to-r from-white/80 to-white/20 mb-6 rounded" />
                <div className="text-white mb-6 group-hover:scale-110 transition-transform">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-white">
                  {usp.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-32 bg-black/80 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tight">
            SEE BM IN ACTION
          </h2>
          
          {/* Enhanced Conversation Demo */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-black/80 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-8 p-4 border-b border-white/10">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white/80 font-medium">BM AI Assistant - Live Demo</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                </div>
              </div>
              
              {/* Enhanced Chat Messages */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {[
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
                ].map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.type === 'ai' ? 'justify-start' : 'justify-end'}`}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className={`max-w-xs md:max-w-md p-4 rounded-2xl ${
                      message.type === 'ai' 
                        ? 'bg-white/10 border-l-4 border-white text-left' 
                        : 'bg-white/5 border-r-4 border-white/50 text-right'
                    }`}>
                      <div className="text-sm text-white/60 mb-1">{message.time}</div>
                      <div className="whitespace-pre-line">{message.text}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Typing Indicator */}
              <div className="mt-4 flex items-center gap-2 text-white/60">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm">BM is typing...</span>
              </div>
            </div>
          </div>

          {/* Demo CTA */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <button 
              onClick={simulateCall}
              className="bg-white/10 text-white border border-white/30 px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all backdrop-blur-xl flex items-center gap-3 justify-center"
            >
              <FiPhone size={24} className="stroke-1" />
              Call Live Demo: +254711082454
            </button>
            <a 
              href="/pricing"
              className="bg-white text-black px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black/90 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">
            GET STARTED
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Ready to transform your customer service with next-generation AI voice technology? 
            Contact us to discuss your requirements and schedule a custom demonstration.
          </p>
          
          <div className="bg-black/80 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
            <a 
              href="mailto:bm@payl.to?subject=BM AI Voice Bot Inquiry&body=Hello, I'm interested in learning more about BM AI Voice Bot for my organization."
              className="inline-flex items-center gap-3 bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all mb-8"
            >
              <FiMail size={24} className="stroke-1" />
              Email Us: bm@payl.to
            </a>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
              <div className="flex items-center gap-2 text-white/80">
                <FiPhone size={20} className="stroke-1" />
                <span>+254 - 736 - 355183</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FiMapPin size={20} className="stroke-1" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white/60 py-12 text-center border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border-t border-white/10 pt-8">
            <p>&copy; 2025 BM AI Voice Bot. Powered by advanced language models on Ubuntu servers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
