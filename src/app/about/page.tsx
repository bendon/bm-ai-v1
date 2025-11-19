'use client';

import { 
  FiArrowLeft,
  FiUsers,
  FiTarget,
  FiAward,
  FiGlobe,
  FiShield,
  FiZap,
  FiHeart
} from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function About() {
  const team = [
    {
      name: "BM AI Team",
      role: "AI Development & Engineering",
      description: "Our core team of AI engineers and developers working on cutting-edge voice technology.",
      expertise: ["Natural Language Processing", "Voice Recognition", "Machine Learning", "System Architecture"]
    },
    {
      name: "Customer Success",
      role: "Implementation & Support",
      description: "Dedicated team ensuring seamless integration and ongoing support for all clients.",
      expertise: ["System Integration", "Technical Support", "Training", "Account Management"]
    },
    {
      name: "Security & Compliance",
      role: "Bank-Grade Security",
      description: "Specialists maintaining PCI DSS compliance and enterprise-level security protocols.",
      expertise: ["PCI DSS Compliance", "Encryption", "Data Protection", "Security Audits"]
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "BM AI concept developed with focus on Kenyan market needs"
    },
    {
      year: "2024",
      title: "Development",
      description: "Advanced language models trained on English and Swahili datasets"
    },
    {
      year: "2025",
      title: "Launch",
      description: "BM AI unified communication platform officially launched with enterprise-grade infrastructure"
    }
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
            ABOUT BM AI
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            We&apos;re revolutionizing customer communication in Kenya and beyond with a unified AI-powered platform 
            for SMS, Voice Calls, WhatsApp, and Tools. Our technology understands natural language in both English and Swahili.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiTarget size={32} className="text-white stroke-1" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Our Mission</h2>
              </div>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                To eliminate wait times and language barriers in customer communication by providing 
                intelligent, bilingual AI assistants across SMS, Voice Calls, WhatsApp, and Tools that understand 
                and serve customers in their preferred language and channel.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-white font-bold">→</span>
                  Democratize AI voice technology for African businesses
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-white font-bold">→</span>
                  Bridge language gaps between English and Swahili
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <span className="text-white font-bold">→</span>
                  Reduce customer service costs while improving satisfaction
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FiGlobe size={32} className="text-white stroke-1" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Our Vision</h2>
              </div>
              <p className="text-xl text-white/80 mb-6 leading-relaxed">
                To become the leading unified communication platform in East Africa, 
                empowering businesses to deliver exceptional customer experiences 
                through intelligent, multilingual AI assistants across all communication channels.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4">Core Values</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FiHeart size={20} className="text-red-400 stroke-1" />
                    <span className="text-white/90">Customer-Centric Innovation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiShield size={20} className="text-blue-400 stroke-1" />
                    <span className="text-white/90">Security & Trust</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiZap size={20} className="text-yellow-400 stroke-1" />
                    <span className="text-white/90">Speed & Efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FiUsers size={32} className="text-white stroke-1" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Our Team</h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Meet the experts behind BM AI - a dedicated team of AI engineers, 
              language specialists, and customer success professionals building the future of communication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-white/60 mb-4">{member.role}</p>
                <p className="text-white/80 mb-6 leading-relaxed">{member.description}</p>
                
                <div>
                  <h4 className="font-bold mb-3">Expertise:</h4>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        <span className="text-white/90 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-black/50 border-t border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FiAward size={32} className="text-white stroke-1" />
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Our Journey</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-xl">
                  <div className="text-6xl font-black mb-4 text-white/20">{milestone.year}</div>
                  <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                  <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">
              TECHNOLOGY STACK
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Built on cutting-edge technology with enterprise-grade infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Advanced Language Models", desc: "GPT-4 and custom trained models" },
              { name: "Voice Recognition", desc: "Real-time speech-to-text processing" },
              { name: "Natural Language Processing", desc: "Context-aware conversation handling" },
              { name: "Ubuntu Servers", desc: "Enterprise-grade infrastructure" },
              { name: "PCI DSS Compliance", desc: "Bank-grade security protocols" },
              { name: "API Integration", desc: "Seamless system connectivity" },
              { name: "Real-time Analytics", desc: "Advanced conversation insights" },
              { name: "Multi-language Support", desc: "English & Swahili with code-switching" }
            ].map((tech, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all">
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-white/60 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black/90 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tight">
            READY TO TRANSFORM YOUR<br />CUSTOMER SERVICE?
          </h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Join the AI revolution and see how BM can transform your customer interactions.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              href="/pricing"
              className="bg-white text-black px-12 py-6 rounded-2xl text-xl font-bold hover:bg-white/90 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              View Pricing
            </Link>
            <a 
              href="mailto:bm@payl.to?subject=BM AI Inquiry&body=Hello, I'm interested in learning more about BM AI communication platform for my organization."
              className="bg-white/10 text-white border border-white/30 px-12 py-6 rounded-2xl text-xl font-semibold hover:bg-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center gap-3 justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 