'use client';

import { useEffect } from 'react';
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

  return (
    <div className="bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.8) 100%), url('/images/tea-sector-loans-1200px.jpg')" }} />
        <div className="relative z-10 w-full max-w-3xl lg:max-w-4xl mx-auto text-center py-20 sm:py-24 px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight uppercase text-white drop-shadow-lg break-words">
            BM AI<br />COMMUNICATION PLATFORM
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Unified communication platform for SMS, Voice Calls, WhatsApp, and Tools. AI-powered conversations. Zero wait times. 24/7 automation across all channels.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/#services" className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/90 transition-all hover:-translate-y-1 hover:shadow-2xl">Our Services</Link>
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

      {/* Services Section */}
      <section id="services" className="py-24 bg-black/95 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-center uppercase tracking-tight">Our Services</h2>
          <p className="text-xl text-white/70 mb-12 text-center max-w-2xl mx-auto">Unified communication platform across SMS, Voice Calls, WhatsApp, and Tools</p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* SMS Service */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col shadow-xl hover:border-white/20 transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-white">SMS</h3>
                <p className="text-white/80 mb-6">Send and receive SMS messages with AI-powered conversations. Manage conversations, track analytics, and automate customer communications via text messaging.</p>
              </div>
              <ul className="mb-6 space-y-3 text-white/80 flex-grow">
                {[
                  'SMS Conversations',
                  'SMS Analytics',
                  'Bulk messaging',
                  'Two-way communication',
                  'Automated responses',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Voice & Telephony Service */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col shadow-xl hover:border-white/20 transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M13 2a9 9 0 0 1 9 9"></path>
                    <path d="M13 6a5 5 0 0 1 5 5"></path>
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-white">Voice & Telephony</h3>
                <p className="text-white/80 mb-6">AI-powered voice calls for inbound and outbound communications. Handle customer calls, make automated calls, and manage call history with intelligent voice agents.</p>
              </div>
              <ul className="mb-6 space-y-3 text-white/80 flex-grow">
                {[
                  'Voice Calls (Inbound & Outbound)',
                  'Call History & Analytics',
                  'Live Voice Sessions',
                  'Bilingual (English & Swahili)',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* WhatsApp Service */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col shadow-xl hover:border-white/20 transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-white">WhatsApp</h3>
                <p className="text-white/80 mb-6">Connect with customers on WhatsApp. Manage conversations, make voice calls, and leverage WhatsApp Business API for automated customer communications.</p>
              </div>
              <ul className="mb-6 space-y-3 text-white/80 flex-grow">
                {[
                  'WhatsApp Conversations',
                  'WhatsApp Voice Calls',
                  'WhatsApp Analytics',
                  'Automated messaging',
                  'Media sharing support',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span
                      className={
                        feature === 'WhatsApp Voice Calls'
                          ? 'text-red-400 font-semibold'
                          : undefined
                      }
                    >
                      {feature}
                      {feature === 'WhatsApp Voice Calls' && (
                        <span className="text-red-300 font-normal text-sm ml-2">
                          (highly technical setup required)
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Tools Service */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col shadow-xl hover:border-white/20 transition-all">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-white">Tools</h3>
                <p className="text-white/80 mb-6">Powerful tools and integrations to enhance your communication workflows. Access custom tools, marketplace solutions, and survey capabilities.</p>
              </div>
              <ul className="mb-6 space-y-3 text-white/80 flex-grow">
                {[
                  'My Tools',
                  'Tool Marketplace',
                  'Surveys & Feedback',
                  'Custom integrations',
                  'Workflow automation',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base">
                    <FiCheck className="text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-12 text-center uppercase tracking-tight">Why Choose BM AI</h2>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SMS Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-white">SMS</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Notifications & Alerts</span>
                  <span className="text-white/70 text-sm">Order updates, appointment reminders</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Two-Way Conversations</span>
                  <span className="text-white/70 text-sm">Customer support via SMS</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Bulk Messaging</span>
                  <span className="text-white/70 text-sm">Campaigns and announcements</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">OTP & Verification</span>
                  <span className="text-white/70 text-sm">Security codes and confirmations</span>
                </div>
              </div>
            </div>
            {/* Voice Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-white">Voice & Telephony</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Customer Support</span>
                  <span className="text-white/70 text-sm">24/7 inbound call handling</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Outbound Campaigns</span>
                  <span className="text-white/70 text-sm">Reminders, collections, surveys</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Account Queries</span>
                  <span className="text-white/70 text-sm">Balance checks, transactions</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Emergency Alerts</span>
                  <span className="text-white/70 text-sm">Critical notifications via calls</span>
                </div>
              </div>
            </div>
            {/* WhatsApp Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-white">WhatsApp</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Customer Chat</span>
                  <span className="text-white/70 text-sm">Real-time WhatsApp conversations</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Voice & Video Calls</span>
                  <span className="text-white/70 text-sm">WhatsApp calling integration</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Media Sharing</span>
                  <span className="text-white/70 text-sm">Send images, documents, videos</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Business Messaging</span>
                  <span className="text-white/70 text-sm">WhatsApp Business API automation</span>
                </div>
              </div>
            </div>
            {/* Tools Use Cases */}
            <div>
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide text-white">Tools</h3>
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Custom Tools</span>
                  <span className="text-white/70 text-sm">Build and manage your own tools</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Tool Marketplace</span>
                  <span className="text-white/70 text-sm">Discover and integrate tools</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Surveys & Polls</span>
                  <span className="text-white/70 text-sm">Create and manage surveys</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 shadow">
                  <span className="text-base font-bold text-white block mb-1">Workflow Automation</span>
                  <span className="text-white/70 text-sm">Automate business processes</span>
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
    </div>
  );
}
