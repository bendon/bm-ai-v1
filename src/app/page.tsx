'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FiZap, 
  FiGlobe, 
  FiShield, 
  FiDollarSign, 
  FiRefreshCw, 
  FiBarChart,
  FiCheck
} from 'react-icons/fi';
import Navigation from '@/components/Navigation';
import { CallFlowDiagrams } from '@/components/CallFlowIcons';

export default function Home() {
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

  return (
    <div className="bg-black text-white font-['Gill_Sans',_'Gill_Sans_MT',_Calibri,_sans-serif]">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%), url('/images/tea-sector-loans-1200px.jpg')" }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center py-24 px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight uppercase text-white drop-shadow-lg">Next-Generation<br />Voice AI</h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">Transform your customer service and outreach with BM AI’s Inbound and Outbound Voice Agents. Human-like conversations. Zero wait times. 24/7 automation.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/#demo" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 hover:shadow-2xl">How it Works</Link>
            <Link href="/pricing" className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 hover:border-white/60 transition-all">Get Pricing</Link>
          </div>
        </div>
      </section>

      {/* Quick Value/Stats Section */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-black mb-2 text-white">92%</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 text-white">2M+</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Conversations</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 text-white">60%</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Faster Resolution</div>
          </div>
          <div>
            <div className="text-5xl font-black mb-2 text-white">24/7</div>
            <div className="text-sm text-white/60 uppercase tracking-wider">Availability</div>
          </div>
        </div>
      </section>

      {/* Inbound/Outbound Split Section */}
      <section className="py-24 bg-black/95 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">AI Voice Agents for Every Need</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inbound AI */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-white">Inbound AI Agent</h3>
                <p className="text-white/80 mb-6">Handle incoming customer calls, answer questions, process transactions, and provide 24/7 support in English & Swahili. Perfect for banks, telcos, and enterprises seeking to automate and enhance customer experience.</p>
                <ul className="mb-6 space-y-3 text-white/80">
                  {[
                    'Natural language understanding',
                    'Real-time account info & transactions',
                    'Bilingual (English & Swahili)',
                    'Secure, PCI DSS compliant',
                    'Analytics & reporting',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-base">
                      <FiCheck className="text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/inbound" className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/90 transition-all">Learn More</Link>
            </div>
            {/* Outbound AI */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-white">Outbound AI Agent</h3>
                <p className="text-white/80 mb-6">Automate outbound calls for reminders, collections, notifications, surveys, and more. Reach thousands instantly with personalized, interactive voice calls—no human agent required.</p>
                <ul className="mb-6 space-y-3 text-white/80">
                  {[
                    'Bulk & scheduled calling',
                    'Personalized scripts',
                    'Payment & appointment reminders',
                    'Surveys & feedback collection',
                    'Emergency notifications',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-base">
                      <FiCheck className="text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/outbound" className="mt-4 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/90 transition-all">Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">Why Choose BM</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-black border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
              <FiZap size={64} color="white" strokeWidth={1.5} className="mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Zero Wait Times</h3>
              <p className="text-white/80 text-base">Customers connect instantly with BM. No more frustrating menu navigation or long hold queues. Get immediate, intelligent responses 24/7.</p>
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
              <FiGlobe size={64} color="white" strokeWidth={1.5} className="mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Bilingual Intelligence</h3>
              <p className="text-white/80 text-base">Seamlessly handles conversations in both English and Swahili. Code-switching supported for natural Kenyan communication patterns.</p>
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
              <FiShield size={64} color="white" strokeWidth={1.5} className="mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Bank-Grade Security</h3>
              <p className="text-white/80 text-base">PCI DSS compliant infrastructure with end-to-end encryption. Your customer data is protected with enterprise-level security protocols.</p>
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
              <FiDollarSign size={64} color="white" strokeWidth={1.5} className="mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Cost Reduction</h3>
              <p className="text-white/80 text-base">Reduce call center operational costs by up to 40% while improving customer satisfaction. Handle more inquiries with fewer human agents.</p>
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
              <FiRefreshCw size={64} color="white" strokeWidth={1.5} className="mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Real-Time Processing</h3>
              <p className="text-white/80 text-base">Process transactions, check balances, and update accounts in real-time. Direct integration with your existing systems for seamless operations.</p>
            </div>
            <div className="bg-black border border-white/20 rounded-3xl p-10 flex flex-col items-center text-center shadow-xl">
              <FiBarChart size={64} color="white" strokeWidth={1.5} className="mb-6" />
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">Smart Analytics</h3>
              <p className="text-white/80 text-base">Gain insights into customer behavior, common pain points, and service optimization opportunities through advanced conversation analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="demo" className="py-24 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">How It Works</h2>
          <CallFlowDiagrams />
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-24 bg-black/95 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Inbound Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-white">Inbound Use Cases</h3>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Customer Support Hotlines</span>
                  <span className="text-white/80">Banks, telcos, insurance, retail</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Account & Transaction Queries</span>
                  <span className="text-white/80">Balance checks, transaction history, statements</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Service Information & FAQs</span>
                  <span className="text-white/80">Automated answers to common questions</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Complaint Resolution</span>
                  <span className="text-white/80">Automated intake and escalation</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Automated Self-Service</span>
                  <span className="text-white/80">PIN resets, bill payments, service activation</span>
                </div>
              </div>
            </div>
            {/* Outbound Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-white">Outbound Use Cases</h3>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Debt Recovery</span>
                  <span className="text-white/80">Banks, microfinance, loan companies</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Bill Reminders</span>
                  <span className="text-white/80">Utilities, telecom, insurance</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">School Communication</span>
                  <span className="text-white/80">Fee reminders, event notifications, emergency alerts</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Appointment Reminders</span>
                  <span className="text-white/80">Hospitals, clinics, service providers</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Survey & Feedback</span>
                  <span className="text-white/80">Market research, customer satisfaction</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Lead Generation</span>
                  <span className="text-white/80">Sales calls, product promotions</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow flex flex-col items-start">
                  <span className="text-lg font-bold text-white mb-2">Emergency Notifications</span>
                  <span className="text-white/80">Government alerts, safety warnings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">Simple, Transparent Pricing</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">Pay only for what you use. Our flat-rate pricing ensures predictable costs with no hidden fees. Minimum bundle, no expiry, and on-demand options for enterprises.</p>
          <Link href="/pricing" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all">View Full Pricing</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 bg-black/95 border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-white/60 text-sm">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
            <span className="font-bold text-white text-lg">BM AI Voice Bot</span>
            <span>© {new Date().getFullYear()} BM AI. All rights reserved.</span>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
          <div>
            <span>Nairobi, Kenya | bm@payl.to | +254 736 355183</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
