
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import ChatBot from '../components/ChatBot';

const WorkPage = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navigation />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-5 animate-float rounded-full" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6 animate-fade-in">
              <span className="block animate-slide-in-left">Our</span>
              <span className="text-yellow-gradient block animate-scale-in" style={{animationDelay: '0.3s'}}>Work</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.6s'}}>
              Explore our portfolio of successful projects and see how we've helped businesses transform their digital presence.
            </p>
            
            {/* Animated decorative elements */}
            <div className="flex justify-center items-center mt-8 space-x-4 animate-scale-in" style={{animationDelay: '0.9s'}}>
              <div className="w-2 h-2 bg-[#FF9F04] rounded-full animate-pulse"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#FF9F04] to-transparent"></div>
              <div className="w-3 h-3 bg-[#FF9F04] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-[#FF9F04] to-transparent"></div>
              <div className="w-2 h-2 bg-[#FF9F04] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Component */}
      <Portfolio />

      {/* Like what you see? Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tr from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold font-space text-gray-900 mb-4 animate-scale-in">
              Like what you see?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed animate-slide-in-left">
              Ready to transform your business with our innovative solutions? Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{animationDelay: '0.3s'}}>
              <a 
                href="/contact"
                className="inline-block bg-[#FF9F04] hover:bg-[#e8900a] text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium"
              >
                Get Started Today
              </a>
              <a 
                href="/work"
                className="inline-block border-2 border-gray-300 hover:border-[#FF9F04] text-gray-700 hover:text-[#FF9F04] px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-medium"
              >
                View More Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default WorkPage;

