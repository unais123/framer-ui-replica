
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
      
      {/* CTA Section - "Like what you see?" */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-6 animate-scale-in">
              Like what you see?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-in-left">
              Ready to transform your business with our innovative solutions? Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{animationDelay: '0.3s'}}>
              <a 
                href="/contact"
                className="inline-block bg-[#FF9F04] hover:bg-[#e8900a] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
              >
                Get Started Today
              </a>
              <a 
                href="/work"
                className="inline-block border-2 border-gray-300 hover:border-[#FF9F04] text-gray-700 hover:text-[#FF9F04] px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
