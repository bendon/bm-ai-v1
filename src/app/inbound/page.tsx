import Navigation from '@/components/Navigation';
import { FiCheck, FiTarget } from 'react-icons/fi';
import Link from 'next/link';

export default function InboundAI() {
  const features = [
    { icon: <FiCheck className="text-green-400" />, text: 'Natural language understanding' },
    { icon: <FiCheck className="text-green-400" />, text: 'Real-time account info & transactions' },
    { icon: <FiCheck className="text-green-400" />, text: 'Bilingual (English & Swahili)' },
    { icon: <FiCheck className="text-green-400" />, text: 'Secure, PCI DSS compliant' },
    { icon: <FiCheck className="text-green-400" />, text: 'Analytics & reporting' },
    { icon: <FiCheck className="text-green-400" />, text: 'Seamless escalation to human agents' },
    { icon: <FiCheck className="text-green-400" />, text: '24/7 availability' },
  ];
  const useCases = [
    { icon: <FiTarget className="text-blue-400" />, text: 'Customer support hotlines' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Account balance & transaction queries' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Service information & FAQs' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Complaint resolution' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Automated self-service' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">Voice & Telephony - Inbound</h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Part of BM AI's unified communication platform. Automate and enhance your customer support with AI that answers calls, resolves queries, and processes transactions 24/7 in English & Swahili. Also available via SMS, WhatsApp, and Tools.</p>
      </section>
      <section className="py-12 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3 text-white/90 text-lg mb-2">
              {f.icon}
              <span>{f.text}</span>
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-wide">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {useCases.map((u, i) => (
            <div key={i} className="flex items-start gap-3 text-white/80 text-lg mb-2">
              {u.icon}
              <span>{u.text}</span>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/#demo" className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all">How it Works</Link>
        </div>
      </section>
    </div>
  );
} 