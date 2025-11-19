import Navigation from '@/components/Navigation';
import { FiCheck, FiTarget } from 'react-icons/fi';
import Link from 'next/link';

export default function OutboundAI() {
  const features = [
    { icon: <FiCheck className="text-green-400" />, text: 'Bulk & scheduled calling' },
    { icon: <FiCheck className="text-green-400" />, text: 'Personalized scripts' },
    { icon: <FiCheck className="text-green-400" />, text: 'Payment & appointment reminders' },
    { icon: <FiCheck className="text-green-400" />, text: 'Surveys & feedback collection' },
    { icon: <FiCheck className="text-green-400" />, text: 'Emergency notifications' },
    { icon: <FiCheck className="text-green-400" />, text: 'Lead generation & sales calls' },
    { icon: <FiCheck className="text-green-400" />, text: 'Detailed reporting & analytics' },
  ];
  const useCases = [
    { icon: <FiTarget className="text-blue-400" />, text: 'Debt recovery (banks, microfinance, loan companies)' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Bill reminders (utilities, telecom, insurance)' },
    { icon: <FiTarget className="text-blue-400" />, text: 'School communication (fee reminders, event notifications, emergency alerts)' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Appointment reminders (hospitals, clinics, service providers)' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Survey & feedback (market research, customer satisfaction)' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Lead generation (sales calls, product promotions)' },
    { icon: <FiTarget className="text-blue-400" />, text: 'Emergency notifications (government alerts, safety warnings)' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">Voice & Telephony - Outbound</h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">Part of BM AI&apos;s unified communication platform. Automate outbound calls for reminders, collections, notifications, surveys, and more. Reach thousands instantly with personalized, interactive voice calls. Also available via SMS, WhatsApp, and Tools.</p>
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