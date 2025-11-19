'use client';

import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Terms() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors">
            <FiArrowLeft size={20} className="stroke-1" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
            TERMS OF SERVICE
          </h1>
          
          <div className="mb-8 text-white/60">
            <p><strong>EdgeTech Consults Ltd</strong></p>
            <p>Beatrice Courts, Parklands</p>
            <p>Nairobi, Kenya</p>
            <p className="mt-4"><strong>Effective Date:</strong> June 1, 2025</p>
            <p><strong>Last Updated:</strong> June 1, 2025</p>
          </div>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of BM AI services, a product of EdgeTech Consults Ltd 
                ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms. If you do not agree 
                to these Terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Description of Services</h2>
              <p>
                BM AI is a unified communication platform providing SMS, Voice Calls, WhatsApp, and Tools services. Our services include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>SMS messaging and conversations</li>
                <li>Voice and telephony services (inbound and outbound)</li>
                <li>WhatsApp Business API integration</li>
                <li>AI-powered tools and automation</li>
                <li>Analytics and reporting</li>
                <li>API access and integrations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Account Registration</h2>
              <p>To use our services, you must:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Create an account with accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be at least 18 years of age or have parental consent</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Use License and Restrictions</h2>
              <p>We grant you a limited, non-exclusive, non-transferable license to use our services. You agree not to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use the services for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer, decompile, or disassemble any part of our services</li>
                <li>Use automated systems to access our services without permission</li>
                <li>Send spam, unsolicited messages, or engage in abusive behavior</li>
                <li>Infringe upon intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Payment Terms</h2>
              <p>Our services are offered under various subscription plans:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Pay As You Go:</strong> Free subscription with pay-per-use pricing</li>
                <li><strong>Starter:</strong> Monthly or yearly subscription with defined limits</li>
                <li><strong>Enterprise:</strong> Custom pricing for large organizations</li>
              </ul>
              <p className="mt-4">
                All fees are billed in advance and are non-refundable except as required by law. You are responsible for any taxes 
                applicable to your use of the service. Failure to pay may result in suspension or termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Service Availability</h2>
              <p>
                We strive to provide reliable service but do not guarantee uninterrupted or error-free operation. We reserve the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Modify, suspend, or discontinue any part of the service at any time</li>
                <li>Perform maintenance that may temporarily interrupt service</li>
                <li>Limit access to prevent abuse or ensure security</li>
                <li>Update features and functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. User Content and Data</h2>
              <p>
                You retain ownership of content and data you submit through our services. By using our services, you grant us a license to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Store, process, and transmit your content as necessary to provide services</li>
                <li>Use anonymized data to improve our services and AI models</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4">
                You are responsible for ensuring you have the right to use and share any content you submit through our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Intellectual Property</h2>
              <p>
                All content, features, and functionality of BM AI services, including but not limited to text, graphics, logos, icons, 
                images, software, and algorithms, are the exclusive property of EdgeTech Consults Ltd and are protected by international 
                copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">9. Termination</h2>
              <p>We may terminate or suspend your account and access to services immediately, without prior notice, if you:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Violate these Terms of Service</li>
                <li>Engage in fraudulent or illegal activity</li>
                <li>Fail to pay required fees</li>
                <li>Abuse or misuse our services</li>
              </ul>
              <p className="mt-4">
                You may cancel your account at any time. Upon termination, your right to use the services will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, EdgeTech Consults Ltd shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, 
                resulting from your use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">11. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless EdgeTech Consults Ltd, its officers, directors, employees, and agents from any 
                claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or 
                violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">12. Dispute Resolution</h2>
              <p>Any disputes arising from these Terms or your use of our services shall be resolved through:</p>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>Good faith negotiation between parties</li>
                <li>Mediation if negotiation fails</li>
                <li>Arbitration in accordance with Kenyan law, if mediation is unsuccessful</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">13. Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of Kenya. Any disputes shall be subject 
                to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">14. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of material changes by:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Posting the updated Terms on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending email notifications for material changes</li>
              </ul>
              <p className="mt-4">
                Continued use of our services after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">15. Contact Information</h2>
              <p>For questions about these Terms of Service, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>EdgeTech Consults Ltd</strong></p>
                <p>Beatrice Courts, Parklands</p>
                <p>Nairobi, Kenya</p>
                <p><strong>Email:</strong> ops@edgetech.co.ke</p>
                <p><strong>Phone:</strong> +254 743 799799</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
