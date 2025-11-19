'use client';

import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Legal() {
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
            LEGAL INFORMATION
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
              <h2 className="text-2xl font-bold mb-4 text-white">Company Information</h2>
              <p>
                BM AI is a product of EdgeTech Consults Ltd, a technology consulting company specializing in system integrations, 
                mobile applications, IT infrastructure, and AI-powered solutions.
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Legal Entity:</strong> EdgeTech Consults Ltd</p>
                <p><strong>Registered Address:</strong> Beatrice Courts, Parklands, Nairobi, Kenya</p>
                <p><strong>Business Email:</strong> ops@edgetech.co.ke</p>
                <p><strong>Business Phone:</strong> +254 743 799799</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Intellectual Property Rights</h2>
              <p>
                All intellectual property rights in BM AI, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Software, code, and algorithms</li>
                <li>Trademarks, logos, and brand names</li>
                <li>Documentation and technical specifications</li>
                <li>AI models and training data</li>
                <li>User interface designs and graphics</li>
              </ul>
              <p className="mt-4">
                are the exclusive property of EdgeTech Consults Ltd and are protected by Kenyan and international intellectual property laws, 
                including copyright, trademark, and patent laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Compliance and Regulations</h2>
              <p>
                EdgeTech Consults Ltd and BM AI are committed to full compliance with all applicable data privacy laws and regulations, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Data Protection:</strong> Kenya Data Protection Act, 2019 and all other applicable data protection laws</li>
                <li><strong>Communications:</strong> Kenya Information and Communications Act</li>
                <li><strong>Payments:</strong> PCI DSS compliance for payment processing</li>
                <li><strong>International:</strong> GDPR compliance for EU users and all other international data privacy regulations</li>
                <li><strong>Telecommunications:</strong> Compliance with telecommunications regulations in Kenya</li>
                <li><strong>General:</strong> Compliance with all data privacy laws applicable to our operations and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Service Level Agreements</h2>
              <p>
                BM AI services are provided with the following commitments:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Uptime targets as specified in your subscription plan</li>
                <li>Data security and encryption standards</li>
                <li>Backup and disaster recovery procedures</li>
                <li>Support response times based on your plan</li>
              </ul>
              <p className="mt-4">
                Specific SLA terms are detailed in your service agreement or subscription plan documentation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Warranties and Disclaimers</h2>
              <p>
                BM AI services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, 
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, EdgeTech Consults Ltd&apos;s total liability for any claims arising from or related 
                to BM AI services shall not exceed the amount you paid for the services in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Dispute Resolution</h2>
              <p>Any legal disputes shall be resolved through the following process:</p>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li><strong>Negotiation:</strong> Parties will attempt to resolve disputes through good faith negotiation</li>
                <li><strong>Mediation:</strong> If negotiation fails, disputes will be referred to mediation under Kenyan mediation rules</li>
                <li><strong>Arbitration:</strong> If mediation is unsuccessful, disputes will be resolved through binding arbitration in accordance with the Arbitration Act of Kenya</li>
                <li><strong>Courts:</strong> As a last resort, disputes may be brought before the courts of Kenya, which shall have exclusive jurisdiction</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
              <p>
                This legal information and all matters relating to BM AI services are governed by and construed in accordance with the laws 
                of the Republic of Kenya, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Force Majeure</h2>
              <p>
                EdgeTech Consults Ltd shall not be liable for any failure or delay in performance under these terms resulting from circumstances 
                beyond our reasonable control, including but not limited to natural disasters, war, terrorism, labor disputes, government actions, 
                or failures of telecommunications or internet infrastructure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Severability</h2>
              <p>
                If any provision of these legal terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue 
                in full force and effect, and the invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Changes to Legal Information</h2>
              <p>
                EdgeTech Consults Ltd reserves the right to modify this legal information at any time. We will notify users of any material changes 
                via email or through our service. Continued use of BM AI services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">Contact for Legal Matters</h2>
              <p>For legal inquiries, notices, or concerns, please contact us:</p>
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
