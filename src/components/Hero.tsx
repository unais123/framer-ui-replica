
import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Creative", "Digital", "Innovative", "Modern"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-[#FF9F04] to-[#e8900a] opacity-10 animate-float rounded-full" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-5 animate-float rounded-full" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-[#FF9F04] to-[#e8900a] opacity-5 animate-float rounded-full" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Heading with enhanced animations */}
          <h1 className="text-3xl md:text-6xl font-bold font-space mb-6 pt-8">
            <span className="block animate-slide-in-left mb-4">We Create</span>
            <span className="inline-block transition-all duration-500 ease-in-out text-transparent bg-gradient-to-r from-[#FF9F04] to-[#e8900a] bg-clip-text animate-scale-in mb-4" style={{animationDelay: '0.3s'}}>
              {texts[currentText]}
            </span>
            <span className="block animate-slide-in-left" style={{animationDelay: '0.6s'}}>Experiences</span>
          </h1>

          {/* Subtitle with staggered animation */}
          <p className="text-base md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.9s'}}>
            Transforming ideas into exceptional digital experiences through thoughtful design and cutting-edge technology.
          </p>

          {/* CTA Buttons with enhanced hover effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{animationDelay: '1.2s'}}>
            <button 
              className="bg-[#FF9F04] hover:bg-[#e8900a] text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#FF9F04]/25 flex items-center gap-2 group"
            >
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a 
              href="https://www.instagram.com/atua_agency/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 px-8 py-4 group"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Play size={16} className="ml-1" />
              </div>
              Watch Our Story
            </a>
          </div>

          {/* Stats with enhanced animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "25+", label: "Projects Delivered" },
              { number: "24/7", label: "AI Support Available" },
              { number: "10+", label: "AI Integrations" }
            ].map((stat, index) => (
              <div key={index} className="animate-scale-in hover:scale-105 transition-transform duration-300 cursor-pointer" style={{animationDelay: `${1.5 + index * 0.1}s`}}>
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center hover:border-[#FF9F04] transition-colors duration-300">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

