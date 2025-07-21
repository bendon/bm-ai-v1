'use client';

import { useState } from 'react';
import { 
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiMessageCircle
} from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'general'
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: <FiMail size={32} className="stroke-1" />,
      title: "Email Us",
      details: "bm@payl.to",
      description: "Send us an email and we'll respond within 24 hours",
      action: "mailto:bm@payl.to?subject=BM AI Voice Bot Inquiry"
    },
    {
      icon: <FiPhone size={32} className="stroke-1" />,
      title: "Call Us",
      details: "+254 736 355183",
      description: "Speak directly with our team during business hours",
      action: "tel:+254736355183"
    },
    {
      icon: <FiMapPin size={32} className="stroke-1" />,
      title: "Visit Us",
      details: "Nairobi, Kenya",
      description: "Schedule an in-person meeting at our office",
      action: "#"
    },
    {
      icon: <FiMessageCircle size={32} className="stroke-1" />,
      title: "Live Demo",
      details: "+254 711 082454",
      description: "Call for a live demonstration of BM AI Voice Bot",
      action: "tel:+254711082454"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM EAT" },
    { day: "Saturday", hours: "9:00 AM - 2:00 PM EAT" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="bg-black text-white font-['Gill_Sans',_'Gill_Sans_MT',_Calibri,_sans-serif] min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <FiArrowLeft size={20} className="stroke-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
            GET IN TOUCH
          </h1>
                        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your customer service with BM AI Voice Bot? 
                We&apos;re here to help you get started.
              </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.action}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all backdrop-blur-xl group"
              >
                <div className="text-white mb-4 group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-white/80 mb-2">{method.details}</p>
                <p className="text-white/60 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">
                SEND US A MESSAGE
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors"
                      placeholder="+254 XXX XXX XXX"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2">Interest Area</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="general" className="bg-black text-white">General Inquiry</option>
                    <option value="pricing" className="bg-black text-white">Pricing Information</option>
                    <option value="demo" className="bg-black text-white">Request Demo</option>
                    <option value="integration" className="bg-black text-white">Integration Support</option>
                    <option value="enterprise" className="bg-black text-white">Enterprise Solutions</option>
                    <option value="support" className="bg-black text-white">Technical Support</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/80 mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                
                <button
                  type="button"
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
                  disabled
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  <FiSend className="stroke-1" />
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tight">
                CONTACT INFORMATION
              </h2>
              
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FiClock size={24} className="text-white stroke-1" />
                    <h3 className="text-xl font-bold">Office Hours</h3>
                  </div>
                  <div className="space-y-2">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-white/80">{schedule.day}</span>
                        <span className="text-white/60">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Location */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FiMapPin size={24} className="text-white stroke-1" />
                    <h3 className="text-xl font-bold">Location</h3>
                  </div>
                  <p className="text-white/80 mb-2">Nairobi, Kenya</p>
                  <p className="text-white/60 text-sm">
                    East Africa&apos;s technology hub, serving clients across the region
                  </p>
                </div>
                
                {/* Quick Contact */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:bm@payl.to"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <FiMail size={20} className="stroke-1" />
                      bm@payl.to
                    </a>
                    <a 
                      href="tel:+254736355183"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <FiPhone size={20} className="stroke-1" />
                      +254 736 355183
                    </a>
                    <a 
                      href="tel:+254711082454"
                      className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                    >
                      <FiMessageCircle size={20} className="stroke-1" />
                      Demo: +254 711 082454
                    </a>
                  </div>
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
                question: "How quickly will you respond to my inquiry?",
                answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, you can call us directly."
              },
              {
                question: "Do you offer free consultations?",
                answer: "Yes, we offer free initial consultations to understand your requirements and provide tailored recommendations."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! You can call our demo line at +254 711 082454 or request a demo through our contact form."
              },
              {
                question: "What information should I include in my inquiry?",
                answer: "Please include your company size, current customer service setup, expected call volume, and any specific requirements you have."
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