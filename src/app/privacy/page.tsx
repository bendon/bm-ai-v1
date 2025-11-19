'use client';

import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Privacy() {
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
            PRIVACY POLICY
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
              <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
              <p>
                EdgeTech Consults Ltd ("we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use BM AI services, visit our website, 
                or interact with us.
              </p>
              <p className="mt-4">
                By using our services, you consent to the data practices described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-white mt-6">2.1 Personal Information</h3>
              <p>We may collect personally identifiable information that you voluntarily provide to us, including but not limited to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name and position</li>
                <li>Physical address</li>
                <li>Payment and billing information</li>
                <li>Business requirements and project specifications</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">2.2 Technical Information</h3>
              <p>When you access our website or services, we automatically collect:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">2.3 Service-Related Information</h3>
              <p>Depending on the services you use, we may collect:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>System integration data</li>
                <li>Application usage patterns</li>
                <li>Infrastructure and security logs</li>
                <li>Performance metrics and analytics</li>
                <li>AI model training data (where applicable and with consent)</li>
                <li>Dashboard and reporting data</li>
                <li>Communication data (SMS, voice calls, WhatsApp messages)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              
              <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.1 Service Delivery</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Providing, operating, and maintaining BM AI communication platform services</li>
                <li>Delivering SMS, Voice Calls, WhatsApp, and Tools services</li>
                <li>Processing transactions and sending related information</li>
                <li>Providing technical support and customer service</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.2 Communication</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Responding to inquiries and support requests</li>
                <li>Sending administrative information and service updates</li>
                <li>Providing technical notifications and security alerts</li>
                <li>Marketing communications (with your consent)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.3 Business Operations</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Analyzing usage patterns to improve our services</li>
                <li>Conducting research and development, including AI innovations</li>
                <li>Detecting and preventing fraud and security threats</li>
                <li>Complying with legal obligations</li>
                <li>Enforcing our terms and conditions</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">3.4 AI and Machine Learning</h3>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Training and improving AI models and algorithms</li>
                <li>Providing AI-powered features and recommendations</li>
                <li>Enhancing automation and analytics capabilities</li>
                <li>Note: Personal data used for AI training is anonymized where possible</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Data Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.1 Service Providers</h3>
              <p>We engage third-party companies and individuals to facilitate our services, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Cloud hosting providers</li>
                <li>Payment processors</li>
                <li>Analytics services</li>
                <li>Technical infrastructure partners</li>
                <li>Telecommunications providers</li>
              </ul>
              <p className="mt-4">These providers are bound by confidentiality agreements and may only use your information to perform services on our behalf.</p>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.2 Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</p>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.3 Legal Requirements</h3>
              <p>We may disclose your information if required by law, court order, or governmental regulation, or to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Protect our legal rights</li>
                <li>Prevent fraud or security threats</li>
                <li>Protect the safety of our users and the public</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-white mt-6">4.4 With Your Consent</h3>
              <p>We may share information with third parties when you have given explicit consent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
              <p>We implement appropriate technical and organizational security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
                <li>PCI DSS compliance for payment processing</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Data Retention</h2>
              <p>We retain personal information for as long as necessary to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Fulfill the purposes outlined in this Privacy Policy</li>
                <li>Comply with legal, accounting, or reporting requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
              </ul>
              <p className="mt-4">When information is no longer needed, we securely delete or anonymize it.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the following rights:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Access and Portability:</strong> Request access to your personal information and receive a copy in a structured format</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                <li><strong>Objection:</strong> Object to processing of your information for specific purposes</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where consent is the legal basis</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at ops@edgetech.co.ke.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">8. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Remember your preferences</li>
                <li>Analyze website traffic and usage</li>
                <li>Improve user experience</li>
                <li>Deliver targeted advertising</li>
              </ul>
              <p className="mt-4">
                You can control cookie settings through your browser preferences. However, disabling cookies may limit functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">9. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries outside Kenya. We ensure appropriate safeguards are in place 
                to protect your data in accordance with this Privacy Policy and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">10. Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. 
                If you believe we have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">11. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. 
                We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">12. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending email notifications for material changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">13. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p><strong>EdgeTech Consults Ltd</strong></p>
                <p>Beatrice Courts, Parklands</p>
                <p>Nairobi, Kenya</p>
                <p><strong>Email:</strong> ops@edgetech.co.ke</p>
                <p><strong>Phone:</strong> +254 743 799799</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">14. Governing Law</h2>
              <p>
                This Privacy Policy is governed by the laws of Kenya and complies with all applicable data privacy laws, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>The Data Protection Act, 2019</li>
                <li>The Kenya Information and Communications Act</li>
                <li>General Data Protection Regulation (GDPR) for EU users</li>
                <li>All other applicable data protection and privacy regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">15. Consent</h2>
              <p>
                By using our services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, 
                use, and disclosure of your information as described herein.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
