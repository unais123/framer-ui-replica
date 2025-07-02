
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';

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

      <Footer />
    </div>
  );
};

export default WorkPage;
