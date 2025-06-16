
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-space mb-8 text-gray-900">📄 Terms of Service – Atua Agency</h1>
          <p className="text-gray-600 mb-8">Effective Date: 17/06/2025</p>
          
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-6">
              Welcome to autuaagency.com. These Terms of Service ("Terms") govern your access to and use of our website and all services provided by Atua Agency, located in Mangalore, Karnataka, India.
            </p>
            <p className="text-gray-700 mb-8">
              By accessing our website or using our services, you agree to be legally bound by these Terms.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Overview of Services</h2>
              <p className="text-gray-700 mb-4">
                Atua Agency ("we," "us," "our") offers digital services including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Web Design & Development</li>
                <li>AI Marketing & Business Automation</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Social Media Management</li>
                <li>Meta (Facebook/Instagram) & Google Ads Management</li>
                <li>Branding & Identity</li>
                <li>Product Photography & Videography</li>
                <li>Custom Marketing Strategies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">User Agreement</h2>
              <p className="text-gray-700 mb-4">By engaging with our website or services, you:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Confirm that you are at least 18 years old or are using our services under adult supervision.</li>
                <li>Agree to provide accurate information when communicating with us.</li>
                <li>Will not use our services for unlawful purposes or activities.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Booking, Billing & Payments</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All projects require an upfront advance as per the signed proposal or invoice.</li>
                <li>Remaining payments are due on a milestone or completion basis, as agreed upon.</li>
                <li>Payments must be made to official accounts listed on autuaagency.com or on our invoices.</li>
                <li>Late payments may result in delay of deliverables or termination of the agreement.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Revisions, Delays & Cancellations</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We include a fixed number of revisions per project. Extra revisions are billed additionally.</li>
                <li>If clients delay in providing required inputs/content for more than 14 days, the project may be archived or delayed without refunds.</li>
                <li>Cancellation before the halfway point of a project may entitle the client to a partial refund, minus administrative and effort-based charges.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Intellectual Property & Licensing</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All final deliverables are owned by the client only upon full payment.</li>
                <li>We retain the right to display completed work for portfolio, marketing, and promotional purposes unless otherwise agreed in writing.</li>
                <li>Third-party assets (fonts, stock images, licensed software) used in your project are subject to their respective licenses.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Limitation of Liability</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Atua Agency will not be held liable for indirect, incidental, or consequential damages arising from project use or delivery.</li>
                <li>We are not liable for third-party service outages (hosting, ads, APIs).</li>
                <li>Clients are responsible for reviewing and approving content before publication.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We respect client confidentiality. Any confidential information shared with us (logins, strategies, campaign data) will be securely stored and not disclosed unless legally required.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Support & Maintenance</h2>
              <p className="text-gray-700 mb-4">
                Support is offered only during project timelines. Ongoing maintenance, security, or content updates are available as an add-on service or under a maintenance agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Termination</h2>
              <p className="text-gray-700 mb-4">We reserve the right to terminate services if:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Payment is delayed repeatedly.</li>
                <li>Abusive or unethical behavior is shown.</li>
                <li>Our work is misused or plagiarized.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Jurisdiction</h2>
              <p className="text-gray-700 mb-4">
                These Terms are governed by the laws of India. Any disputes shall be handled by the appropriate courts of Mangalore, Karnataka.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact</h2>
              <div className="text-gray-700 mb-4">
                <p><strong>Atua Agency</strong></p>
                <p>Email: atuaagency@gmail.com</p>
                <p>Phone: +91 86600 70620</p>
                <p>Website: https://autuaagency.com</p>
                <p>Location: Mangalore, Karnataka, India</p>
              </div>
              <p className="text-gray-700 mb-4">
                We may update these Terms periodically. It is your responsibility to check this page for updates.
              </p>
              <p className="text-gray-600">📌 Last updated: 17/06/2025</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
