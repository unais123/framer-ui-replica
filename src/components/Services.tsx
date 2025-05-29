
import { useEffect, useRef } from 'react';
import { Palette, Code, Bot, Megaphone, Camera, Video, Smartphone } from 'lucide-react';
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
      title: "Web Designing",
      shortDescription: "Creating stunning, user-friendly web designs that captivate your audience and drive conversions.",
      description: "Creating stunning, user-friendly web designs that captivate your audience and drive conversions. Our design process focuses on user experience, brand consistency, and modern aesthetics that make your business stand out in the digital landscape.",
      features: ["UI/UX Design", "Responsive Design", "Wireframing", "Prototyping", "Design Systems", "Brand Integration"]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Building responsive, fast, and scalable websites using cutting-edge technologies and frameworks. We ensure optimal performance, security, and seamless user experiences across all devices and platforms.",
      shortDescription: "Building responsive, fast, and scalable websites using modern technologies and frameworks.",
      features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "CMS Integration", "API Development", "Performance Optimization"]
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Automation",
      shortDescription: "Intelligent automation solutions powered by AI to streamline your business processes.",
      description: "Intelligent automation solutions powered by AI to streamline your business processes, reduce manual work, and boost efficiency. We implement smart systems that learn and adapt to your business needs while reducing operational costs.",
      features: ["Workflow Automation", "AI Chatbots", "Data Processing", "Smart Analytics", "Machine Learning", "Process Optimization"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Branding",
      shortDescription: "Creating compelling brand identities that resonate with your target audience.",
      description: "Creating compelling brand identities that resonate with your target audience and stand out in the market. We develop comprehensive branding strategies that reflect your values, vision, and unique market position.",
      features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Materials", "Brand Positioning"]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Meta and Google Ads",
      shortDescription: "Strategic advertising campaigns on Meta and Google platforms to maximize ROI.",
      description: "Strategic advertising campaigns on Meta and Google platforms designed to maximize your return on investment. We create targeted campaigns that reach your ideal customers, drive conversions, and grow your business efficiently.",
      features: ["Campaign Strategy", "Ad Creation", "Audience Targeting", "Performance Tracking", "ROI Optimization", "A/B Testing"]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Social Media Handling",
      shortDescription: "Comprehensive social media management to build and engage your community.",
      description: "Comprehensive social media management services to build and engage your community across all platforms. We create content strategies that drive engagement, build brand loyalty, and convert followers into customers.",
      features: ["Content Creation", "Community Management", "Social Strategy", "Analytics & Reporting", "Influencer Outreach", "Brand Monitoring"]
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Product Photography",
      shortDescription: "Professional product photography that showcases your products in the best light.",
      description: "Professional product photography that showcases your products in the best light, driving sales and enhancing brand perception. We create stunning visuals that tell your product's story and increase conversion rates.",
      features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Image Editing", "Brand Consistency", "E-commerce Ready"]
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Production",
      shortDescription: "Creating engaging video content that tells your story and connects with audiences.",
      description: "Creating engaging video content that tells your story and connects with audiences on an emotional level. From concept to final edit, we produce videos that drive results and enhance your brand presence.",
      features: ["Concept Development", "Video Shooting", "Post-Production", "Motion Graphics", "Brand Videos", "Social Media Content"]
    }
  ];

  const getGridClasses = () => {
    if (isHomePage) {
      return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8";
    }
    return "space-y-12";
  };

  const renderServicesPage = () => {
    const row1 = services.slice(0, 3);
    const row2 = services.slice(3, 6);
    const row3 = services.slice(6, 8);

    return (
      <>
        {/* Row 1 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {row1.map((service, index) => (
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
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
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

        {/* Row 2 - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {row2.map((service, index) => (
            <div 
              key={index + 3}
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
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
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

        {/* Row 3 - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {row3.map((service, index) => (
            <div 
              key={index + 6}
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
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
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
      </>
    );
  };

  const renderHomePage = () => {
    return (
      <div className={getGridClasses()}>
        {services.map((service, index) => (
          <div 
            key={index}
            className="animate-on-scroll bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group text-center"
          >
            <div className="text-gray-700 mb-4 group-hover:text-blue-600 transition-colors duration-300 flex justify-center">
              {service.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-3 font-space">
              {service.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.shortDescription}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Services
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
        {isHomePage ? renderHomePage() : renderServicesPage()}

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
