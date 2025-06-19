
import { useEffect, useRef } from 'react';
import { Palette, Code, Bot, Megaphone, Camera, Video, Brush } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesProps {
  isHomePage?: boolean;
}

const Services = ({ isHomePage = false }: ServicesProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Designing & Development",
      description: "Creating stunning, responsive websites with modern technologies and user-friendly designs that drive conversions."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Automation",
      description: "Intelligent automation solutions powered by AI to streamline your business processes and boost productivity."
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Branding",
      description: "Comprehensive brand identity design including logos, color schemes, and brand guidelines for consistent messaging."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns across multiple platforms to maximize reach and return on investment."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Search Engine Optimization",
      description: "Professional SEO strategies to improve your website's visibility and ranking on search engines to drive organic traffic."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Product Photography & Video Production",
      description: "High-quality product photography and video production that showcases your products in the best light for marketing and e-commerce."
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
              <span className="text-black">Our</span> <span style={{ color: '#FF9F04' }}>Services</span>
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll text-center group"
            >
              {/* Icon Container */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6 group-hover:transition-all duration-300 group-hover:bg-[#FF9F04]">
                <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 font-space text-gray-900 uppercase tracking-wide">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {isHomePage && (
          <div className="text-center mt-16">
            <div className="animate-on-scroll">
              <Link 
                to="/contact"
                className="px-8 py-4 rounded-full text-white transition-all duration-300 transform hover:scale-105 font-medium hover:bg-[#e8900a]"
                style={{ backgroundColor: '#FF9F04' }}
              >
                Get Started Today
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
