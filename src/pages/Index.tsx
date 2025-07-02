
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AIAutomation from '../components/AIAutomation';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      <Hero />
      <About />
      <Services isHomePage={true} />
      <AIAutomation />
      <FAQ />
      
      {/* CTA Section - moved here after FAQ */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-6">
              Like what you see?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with our innovative solutions? Let's discuss your project and create something amazing together.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#FF9F04] hover:bg-[#e8900a] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
