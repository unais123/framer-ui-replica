
import { useEffect, useRef } from 'react';
import { Palette, Code, Bot, Megaphone, Camera, Video } from 'lucide-react';
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
      icon: <Palette className="w-8 h-8" />,
      title: "Planning",
      description: "Creating stunning, user-friendly web designs that captivate your audience and drive conversions."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Designing",
      description: "Building responsive, fast, and scalable websites using modern technologies and frameworks."
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Development",
      description: "Intelligent automation solutions powered by AI to streamline your business processes."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing",
      description: "Strategic advertising campaigns on Meta and Google platforms to maximize ROI."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Analytics",
      description: "Professional product photography that showcases your products in the best light."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Support",
      description: "Creating engaging video content that tells your story and connects with audiences."
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold font-space mb-4 text-gray-900">
              OUR BEST SERVICES
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:bg-yellow-600 transition-all duration-300">
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
                className="bg-yellow-600 text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105 font-medium"
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
