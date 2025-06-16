
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold font-space mb-8 text-gray-900">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 2024</p>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Services</h2>
              <p className="text-gray-700 mb-4">
                ATUA Agency provides the following services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Web Development:</strong> Custom website design and development, responsive web applications, e-commerce solutions</li>
                <li><strong>AI Automation:</strong> n8n workflow automation, process optimization, custom integrations</li>
                <li><strong>Branding:</strong> Logo design, brand identity development, visual design systems</li>
                <li><strong>Digital Marketing:</strong> SEO optimization, content strategy, social media management</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>50% deposit required before project commencement</li>
                <li>Final payment due upon project completion</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Upon full payment, clients receive ownership of custom-developed materials. ATUA Agency retains the right to showcase completed work in our portfolio and marketing materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Project Timeline</h2>
              <p className="text-gray-700 mb-4">
                Project timelines are estimates and may vary based on project complexity, client feedback, and revisions. We strive to meet all agreed-upon deadlines.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Revisions and Changes</h2>
              <p className="text-gray-700 mb-4">
                Each project includes a specified number of revisions. Additional revisions beyond the agreed scope may incur extra charges.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                ATUA Agency's liability is limited to the amount paid for our services. We are not responsible for indirect damages or losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact</h2>
              <p className="text-gray-700">
                For questions about these terms, contact us at atuaagency@gmail.com.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
