'use client';

import { useState } from 'react';
import { 
  FiCheck, 
  FiX,
  FiMail,
  FiPhone,
  FiArrowLeft
} from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [currency, setCurrency] = useState<'USD' | 'KES'>('USD');

  const plans = [
    {
      name: "Pay As You Go",
      monthlyPrice: 0,
      description: "Free subscription, pay per use for calls and messages. 1 seat, 1 Chat AI Agent, 100 sessions/month.",
      features: {
        campaigns: true,
        voiceTelephony: true,
        teamManagement: false,
        advancedAnalytics: false,
        apiAccess: false,
        prioritySupport: false,
        customIntegrations: false,
        whiteLabel: false,
        tools: false
      },
      limits: {
        users: 1,
        calls: "Unlimited",
        messages: "Unlimited",
        storage: "0.1GB"
      },
      buttonText: "Sign Up",
      buttonStyle: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
      buttonLink: "http://bmaiapp.payl.to/"
    },
    {
      name: "Starter",
      monthlyPrice: 25,
      description: "3 seats, 2 AI Agents (chat + voice), 1000 sessions/month, tools included.",
      features: {
        campaigns: true,
        voiceTelephony: true,
        teamManagement: true,
        advancedAnalytics: false,
        apiAccess: false,
        prioritySupport: false,
        customIntegrations: false,
        whiteLabel: false,
        tools: true
      },
      limits: {
        users: 3,
        calls: "Unlimited",
        messages: "Unlimited",
        storage: "1GB"
      },
      buttonText: "Sign Up",
      buttonStyle: "bg-white text-black hover:bg-white/90",
      buttonLink: "http://bmaiapp.payl.to/",
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 500,
      description: "30 seats, Unlimited AI Agents, 1M sessions/month, All features and tools.",
      features: {
        campaigns: true,
        voiceTelephony: true,
        teamManagement: true,
        advancedAnalytics: true,
        apiAccess: true,
        prioritySupport: true,
        customIntegrations: false,
        whiteLabel: true,
        tools: true
      },
      limits: {
        users: 30,
        calls: "Unlimited",
        messages: "Unlimited",
        storage: "1000GB"
      },
      buttonText: "Contact Sales",
      buttonStyle: "bg-white/10 text-white border border-white/30 hover:bg-white/20"
    }
  ];

  const getPrice = (monthlyPrice: number) => {
    if (billingCycle === 'yearly') {
      // Calculate yearly price with 20% discount (pay for 10 months, get 2 free)
      const yearlyPrice = monthlyPrice * 10;
      return yearlyPrice;
    }
    return monthlyPrice;
  };

  const formatPrice = (price: number) => {
    if (currency === 'KES') {
      // Approximate conversion: 1 USD = 130 KES (adjust as needed)
      const kesPrice = Math.round(price * 130);
      return `KES ${kesPrice.toLocaleString()}`;
    }
    return `$${price.toLocaleString()}`;
  };

  const featureLabels = [
    { key: 'campaigns', label: 'Campaigns' },
    { key: 'voiceTelephony', label: 'Voice Telephony' },
    { key: 'teamManagement', label: 'Team Management' },
    { key: 'advancedAnalytics', label: 'Advanced Analytics' },
    { key: 'apiAccess', label: 'API Access' },
    { key: 'prioritySupport', label: 'Priority Support' },
    { key: 'customIntegrations', label: 'Custom Integrations' },
    { key: 'whiteLabel', label: 'White Label' },
    { key: 'tools', label: 'Tools' }
  ];

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
            BILLING & PLAN
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your business. All plans include unlimited calls and messages.
          </p>

          {/* Billing Cycle & Currency Toggle */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex items-center gap-4">
              <span className="text-white/60">Billing Cycle:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    billingCycle === 'monthly' 
                      ? 'bg-white text-black' 
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all relative ${
                    billingCycle === 'yearly' 
                      ? 'bg-white text-black' 
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  Yearly
                  {billingCycle === 'yearly' && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                      Save 20%
                    </span>
                  )}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/60">Currency:</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currency === 'USD' 
                      ? 'bg-white text-black' 
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  USD
                </button>
                <button
                  onClick={() => setCurrency('KES')}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    currency === 'KES' 
                      ? 'bg-white text-black' 
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  KES
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white/5 border rounded-3xl p-8 flex flex-col shadow-xl hover:shadow-2xl transition-all ${
                  plan.popular ? 'border-blue-500/50 border-2' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-3xl font-black mb-4 uppercase tracking-tight">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-black">{formatPrice(getPrice(plan.monthlyPrice))}</span>
                    <span className="text-white/60 text-xl ml-2">/{billingCycle === 'yearly' ? 'year' : 'month'}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-bold text-lg mb-4">Features:</h4>
                  <div className="space-y-3">
                    {featureLabels.map((feature) => {
                      const hasFeature = plan.features[feature.key as keyof typeof plan.features];
                      return (
                        <div key={feature.key} className="flex items-center gap-3">
                          {hasFeature ? (
                            <FiCheck size={18} className="text-green-400 flex-shrink-0" />
                          ) : (
                            <FiX size={18} className="text-red-400/50 flex-shrink-0" />
                          )}
                          <span className={`text-sm ${hasFeature ? 'text-white/90' : 'text-white/40'}`}>
                            {feature.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Limits */}
                <div className="mb-6 border-t border-white/10 pt-6">
                  <h4 className="font-bold text-lg mb-4">Limits:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Users:</span>
                      <span className="text-white font-semibold">{plan.limits.users}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Calls:</span>
                      <span className="text-white font-semibold">{plan.limits.calls}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Messages:</span>
                      <span className="text-white font-semibold">{plan.limits.messages}/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Storage:</span>
                      <span className="text-white font-semibold">{plan.limits.storage}</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                {plan.buttonLink ? (
                  <a
                    href={plan.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all block text-center ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </a>
                ) : (
                  <button 
                    className={`w-full py-4 rounded-2xl font-bold text-lg transition-all ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                question: "What happens if I exceed my plan limits?",
                answer: "For Pay As You Go, you'll be charged per use. For Starter and Enterprise plans, you can contact us to discuss upgrading or adding additional capacity."
              },
              {
                question: "Do unused sessions roll over?",
                answer: "Sessions are reset monthly and do not roll over. However, calls and messages are unlimited on all plans."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, bank transfers, and mobile money payments. Billing can be set to USD or KES."
              },
              {
                question: "Is there a setup fee?",
                answer: "No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan."
              },
              {
                question: "Can I get a custom plan for my organization?",
                answer: "Yes, we offer custom enterprise solutions with tailored features and limits. Contact our sales team to discuss your specific requirements."
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
            Join thousands of businesses already using BM AI to transform their customer communication.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="mailto:bm@payl.to?subject=BM AI Pricing Inquiry&body=Hello, I'm interested in learning more about BM AI pricing plans for my organization."
              className="bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              <FiMail size={24} className="stroke-1" />
              Contact Sales
            </a>
            <a 
              href="tel:+254743799799"
              className="bg-white/10 text-white border border-white/30 px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              <FiPhone size={24} className="stroke-1" />
              Call Us: +254 - 743 - 799799
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
