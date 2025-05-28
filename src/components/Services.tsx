
import { useEffect, useRef } from 'react';
import { Palette, Code, Smartphone, Megaphone, BarChart3, Shield } from 'lucide-react';
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
      icon: <Palette className="w-10 h-10" />,
      title: "Brand Design",
      description: "Creating compelling brand identities that resonate with your target audience and stand out in the market.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Building responsive, fast, and scalable websites using modern technologies and best practices.",
      features: ["Custom Development", "E-commerce", "CMS Integration", "Performance Optimization"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Mobile Apps",
      description: "Developing native and cross-platform mobile applications with exceptional user experiences.",
      features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive engagement, conversions, and sustainable growth.",
      features: ["Social Media", "Content Marketing", "PPC Campaigns", "Email Marketing"]
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Analytics & SEO",
      description: "Data-driven insights and search optimization to improve visibility and performance.",
      features: ["SEO Optimization", "Analytics Setup", "Performance Tracking", "Conversion Optimization"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to ensure your digital assets perform at their best.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Optimization", "Technical Support"]
    }
  ];

  const displayedServices = isHomePage ? services.slice(0, 3) : services;

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Our
              <span className="text-gradient block">Services</span>
            </h2>
          </div>
          <div className="animate-on-scroll">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {isHomePage 
                ? "We offer a comprehensive range of digital services to help your business thrive."
                : "We offer a comprehensive range of digital services to help your business thrive in the modern landscape."
              }
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isHomePage ? 'lg:grid-cols-3' : ''}`}>
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-gray-700 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 font-space">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {!isHomePage && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link 
                  to="/contact"
                  className="text-black font-medium hover:text-blue-600 transition-colors duration-200 group-hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4 font-space">
              Ready to start your project?
            </h3>
            <p className="text-gray-600 mb-8">
              Let's discuss how we can help bring your vision to life.
            </p>
            <Link 
              to="/contact"
              className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
