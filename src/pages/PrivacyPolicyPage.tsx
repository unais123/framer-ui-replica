
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-space mb-8 text-gray-900">📄 Privacy Policy – Atua Agency</h1>
          <p className="text-gray-600 mb-8">Effective Date: 17/06/2025</p>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Atua Agency ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal data when you use autuaagency.com or our services.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Identity Data:</strong> name, company name, phone number, email address</li>
                <li><strong>Billing Information:</strong> payment method, transaction details</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device type</li>
                <li><strong>Behavioral Data:</strong> pages visited, time on site, referring URL</li>
                <li><strong>Media Uploads:</strong> any files, logos, videos, or brand assets you share</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Respond to inquiries and provide services</li>
                <li>Create and manage project timelines</li>
                <li>Send invoices and process payments</li>
                <li>Analyze user behavior to improve our services</li>
                <li>Send important updates or marketing emails (only with your permission)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Data Storage & Security</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All user data is stored securely on encrypted servers and tools we use (e.g., Gmail, Stripe, Google Drive).</li>
                <li>We use HTTPS encryption, password-protected systems, and access controls to prevent unauthorized access.</li>
                <li>Although we take all reasonable steps, no method of online transmission is 100% secure.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Sharing of Data</h2>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information.</p>
              <p className="text-gray-700 mb-4">We may share your data only with:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Internal team members working on your project (under confidentiality)</li>
                <li>Trusted third-party service providers (e.g., payment processors, hosting platforms, analytics tools)</li>
                <li>Government authorities, if required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Cookies & Tracking</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We use cookies and pixels (e.g., Meta Pixel, Google Analytics) to understand user behavior.</li>
                <li>You can manage cookie settings in your browser or opt-out of tracking tools.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Data Retention</h2>
              <p className="text-gray-700 mb-4">We retain client data only as long as necessary to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Complete services</li>
                <li>Comply with legal requirements</li>
                <li>Provide records for future support</li>
              </ul>
              <p className="text-gray-700 mb-4">You may request deletion of your data anytime by contacting us.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal data</li>
                <li>Correct or update information</li>
                <li>Request deletion of your information</li>
                <li>Unsubscribe from email communications</li>
              </ul>
              <p className="text-gray-700 mb-4">Contact us at atuaagency@gmail.com to exercise these rights.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Third-Party Links</h2>
              <p className="text-gray-700 mb-4">
                Our website may link to other websites. We are not responsible for the privacy practices or content of those third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Us</h2>
              <p className="text-gray-700 mb-4">For any questions or concerns about our Terms or Privacy practices:</p>
              <div className="text-gray-700">
                <p><strong>Atua Agency</strong></p>
                <p>Website: https://autuaagency.com</p>
                <p>Email: atuaagency@gmail.com</p>
                <p>Phone: +91 86600 70620</p>
                <p>Location: Mangalore, Karnataka, India</p>
              </div>
              <p className="text-gray-600 mt-4">📌 Last updated: 17/06/2025</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
