'use client';

import { useState } from 'react';
import { 
  FiCheck, 
  FiMail,
  FiPhone,
  FiArrowLeft
} from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const mainProduct = {
    name: "BM AI Voice Agent",
    price: "$0.0025",
    period: "per minute",
    description: "Our flagship AI voice calling service - pay only for what you use",
    minimumPurchase: "$20 minimum bundle required",
    features: [
      "AI Voice Agent calls",
      "English & Swahili support",
      "Natural language processing",
      "Real-time transaction processing",
      "Bank-grade security (PCI DSS)",
      "24/7 availability",
      "Advanced analytics dashboard",
      "API integration",
      "Email & phone support",
      "Free chatbot included"
    ],
    cta: "Get Started",
    popular: true
  };

  const additionalServices = [
    {
      name: "Custom Integrations",
      description: "Integrate with your existing systems",
      price: "Custom",
      period: "on demand"
    },
    {
      name: "Enterprise Solutions",
      description: "On-premise deployment & custom AI training",
      price: "Custom",
      period: "on demand"
    },
    {
      name: "White-label Solutions",
      description: "Brand the AI agent as your own",
      price: "Custom",
      period: "on demand"
    }
  ];

  const calculateCost = (minutes: number) => {
    const rate = 0.0025;
    const cost = minutes * rate;
    return cost.toFixed(2);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <FiArrowLeft size={20} className="stroke-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
            SIMPLE, TRANSPARENT<br />PRICING
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Pay only for what you use. Our flat-rate pricing ensures predictable costs with no hidden fees.
          </p>

          {/* Pricing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-white' : 'bg-white/20'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-black rounded-full transition-transform ${
                billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-white/60'}`}>Yearly</span>
            {billingCycle === 'yearly' && (
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">Save 20%</span>
            )}
          </div>
        </div>
      </section>

      {/* Main Product */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              OUR MAIN PRODUCT
            </h2>
            <p className="text-xl text-white/80">
              One simple, transparent pricing for our AI Voice Agent
            </p>
          </div>
          
          <div className="relative bg-white/10 border border-white/30 rounded-3xl p-12 backdrop-blur-xl">
            <div className="flex flex-col items-center">
              {/* Badge */}
              <div className="relative z-10 mb-4 md:mb-0 md:-mb-8 w-full flex justify-center">
                <span className="inline-block bg-white text-black px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  FLAGSHIP PRODUCT
                </span>
              </div>

              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-6">{mainProduct.name}</h3>
                <div className="mb-6">
                  <span className="text-6xl font-black">{mainProduct.price}</span>
                  <span className="text-white/60 ml-3 text-2xl">{mainProduct.period}</span>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-4 mb-6">
                  <p className="text-lg font-bold text-white">💳 {mainProduct.minimumPurchase}</p>
                  <p className="text-white/80 text-sm">8,000 minutes included - never expires</p>
                </div>
                <p className="text-xl text-white/80 max-w-2xl mx-auto">{mainProduct.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="font-bold text-xl mb-6">What&apos;s included:</h4>
                  <div className="space-y-4">
                    {mainProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <FiCheck size={20} className="text-green-400 stroke-1 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-bold text-xl mb-4">Free Bonus:</h4>
                  <div className="flex items-center gap-3 mb-4">
                    <FiCheck size={24} className="text-green-400 stroke-1" />
                    <span className="text-xl font-bold text-white">Chatbot Included</span>
                  </div>
                  <p className="text-white/80">
                    Get our AI chatbot completely free with every Voice Agent subscription. 
                    Perfect for handling text-based inquiries alongside voice calls.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button className="bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all">
                  {mainProduct.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              ADDITIONAL SERVICES
            </h2>
            <p className="text-xl text-white/80">
              Custom solutions available on demand
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                <p className="text-white/80 mb-6">{service.description}</p>
                <div className="mb-6">
                  <span className="text-3xl font-black">{service.price}</span>
                  <span className="text-white/60 ml-2">{service.period}</span>
                </div>
                <button className="w-full bg-white/10 text-white border border-white/30 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                  Contact Us
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-16 uppercase tracking-tight">
            PRICING CALCULATOR
          </h2>
          
          <div className="bg-black/80 border border-white/10 rounded-3xl p-12 backdrop-blur-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6">Calculate Your Costs</h3>
                <p className="text-white/80 mb-8">
                  Enter your estimated monthly call minutes to see your projected costs.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/80 mb-2">Monthly Call Minutes</label>
                    <input 
                      type="range" 
                      min="100" 
                      max="10000" 
                      step="100"
                      defaultValue="1000"
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                      onChange={(e) => {
                        const minutes = parseInt(e.target.value);
                        const cost = calculateCost(minutes);
                        const costDisplay = document.getElementById('cost-display');
                        const minutesDisplay = document.getElementById('minutes-display');
                        if (costDisplay) costDisplay.textContent = `$${cost}`;
                        if (minutesDisplay) minutesDisplay.textContent = minutes.toLocaleString();
                      }}
                    />
                    <div className="flex justify-between text-sm text-white/60 mt-2">
                      <span>100 min</span>
                      <span id="minutes-display">1,000 min</span>
                      <span>10,000 min</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <div className="text-3xl font-black mb-2">
                      <span id="cost-display">$2.50</span>
                    </div>
                    <div className="text-white/60">total cost</div>
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="text-sm text-white/80">Minimum purchase: $20</div>
                      <div className="text-sm text-white/60">(8,000 minutes - never expires)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-6">Pricing Examples</h3>
                <div className="space-y-4">
                  {[
                    { minutes: 8000, label: "Minimum Bundle", special: true },
                    { minutes: 500, label: "Small Business" },
                    { minutes: 2000, label: "Medium Business" },
                    { minutes: 5000, label: "Large Business" },
                    { minutes: 10000, label: "Enterprise" }
                  ].map((example, index) => (
                    <div key={index} className={`flex justify-between items-center p-4 rounded-xl ${
                      example.special ? 'bg-white/20 border border-white/30' : 'bg-white/5'
                    }`}>
                      <div>
                        <div className="font-bold">{example.label}</div>
                        <div className="text-white/60">{example.minutes.toLocaleString()} minutes - never expires</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">${example.special ? '20.00' : calculateCost(example.minutes)}</div>
                        <div className="text-white/60">{example.special ? 'minimum bundle' : 'total cost'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How does the per-minute billing work?",
                answer: "You are charged $0.0025 for each minute of actual call time. For example, a 3-minute call costs $0.0075. Billing is calculated in real-time and you only pay for the time you use."
              },
              {
                question: "Is there a minimum purchase requirement?",
                answer: "Yes, there is a minimum purchase of $20 required to get started. This gives you 8,000 minutes of Voice Agent calls that never expire. After that, you can purchase additional minutes as needed at $0.0025 per minute."
              },
              {
                question: "What languages does BM support?",
                answer: "BM currently supports English and Swahili with natural code-switching between languages. Additional languages can be added for custom enterprise solutions."
              },
              {
                question: "How secure is the system?",
                answer: "BM uses bank-grade security with PCI DSS compliance, end-to-end encryption, and enterprise-level data protection protocols."
              },
              {
                question: "Can I integrate with my existing systems?",
                answer: "Yes! BM provides API access and custom integrations available on demand. We can integrate with your CRM, banking systems, and other business applications."
              },
              {
                question: "What&apos;s included with the Voice Agent?",
                answer: "Every Voice Agent subscription includes AI voice calls, English & Swahili support, real-time processing, bank-grade security, 24/7 availability, analytics dashboard, API access, support, and a free chatbot."
              },
              {
                question: "Is the chatbot really free?",
                answer: "Yes! The AI chatbot is completely free and included with every Voice Agent subscription. It's perfect for handling text-based inquiries alongside your voice calls."
              },
              {
                question: "What's included in the $20 minimum bundle?",
                answer: "The $20 minimum bundle includes 8,000 minutes of Voice Agent calls that never expire, plus the free chatbot, all features, and support. This is enough for approximately 133 hours of AI voice conversations."
              },
              {
                question: "Do the minutes expire?",
                answer: "No! All purchased minutes never expire. You can use them at any time, whether it's today, next month, or next year. There's no rush to use them up."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-white/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/90 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join thousands of businesses already using BM AI Voice Bot to transform their customer service.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="mailto:bm@payl.to?subject=BM AI Voice Bot Pricing Inquiry&body=Hello, I'm interested in learning more about BM AI Voice Bot pricing for my organization."
              className="bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              <FiMail size={24} className="stroke-1" />
              Contact Sales
            </a>
            <a 
              href="tel:+254736355183"
              className="bg-white/10 text-white border border-white/30 px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              <FiPhone size={24} className="stroke-1" />
              Call Us: +254 736 355183
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 