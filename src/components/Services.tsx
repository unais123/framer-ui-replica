
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
      description: isHomePage 
        ? "Creating stunning and user-friendly web designs that captivate your audience."
        : "Creating stunning, user-friendly web designs that captivate your audience and drive conversions. Our design process focuses on user experience, brand consistency, and modern aesthetics.",
      features: ["UI/UX Design", "Responsive Design", "Wireframing", "Prototyping", "Design Systems", "Brand Integration"]
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: isHomePage 
        ? "Building responsive, fast, and scalable websites using modern technologies."
        : "Building responsive, fast, and scalable websites using cutting-edge technologies and frameworks. We ensure optimal performance, security, and seamless user experiences across all devices.",
      features: ["Frontend Development", "Backend Development", "E-commerce Solutions", "CMS Integration", "API Development", "Performance Optimization"]
    },
    {
      icon: <Bot className="w-10 h-10" />,
      title: "AI Automation",
      description: isHomePage 
        ? "Intelligent automation solutions to streamline your business processes."
        : "Intelligent automation solutions powered by AI to streamline your business processes, reduce manual work, and boost efficiency. We implement smart systems that learn and adapt to your needs.",
      features: ["Workflow Automation", "AI Chatbots", "Data Processing", "Smart Analytics", "Machine Learning", "Process Optimization"]
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Branding",
      description: isHomePage 
        ? "Creating compelling brand identities that resonate with your target audience."
        : "Creating compelling brand identities that resonate with your target audience and stand out in the market. We develop comprehensive branding strategies that reflect your values and vision.",
      features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Marketing Materials", "Brand Positioning"]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Meta and Google Ads",
      description: isHomePage 
        ? "Strategic advertising campaigns on Meta and Google platforms to maximize ROI."
        : "Strategic advertising campaigns on Meta and Google platforms designed to maximize your return on investment. We create targeted campaigns that reach your ideal customers and drive conversions.",
      features: ["Campaign Strategy", "Ad Creation", "Audience Targeting", "Performance Tracking", "ROI Optimization", "A/B Testing"]
    },
    {
      icon: <Megaphone className="w-10 h-10" />,
      title: "Social Media Handling",
      description: isHomePage 
        ? "Comprehensive social media management to build and engage your community."
        : "Comprehensive social media management services to build and engage your community across all platforms. We create content strategies that drive engagement and build brand loyalty.",
      features: ["Content Creation", "Community Management", "Social Strategy", "Analytics & Reporting", "Influencer Outreach", "Brand Monitoring"]
    },
    {
      icon: <Camera className="w-10 h-10" />,
      title: "Product Photography",
      description: isHomePage 
        ? "Professional product photography that showcases your products in the best light."
        : "Professional product photography that showcases your products in the best light, driving sales and enhancing brand perception. We create stunning visuals that tell your product's story.",
      features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Image Editing", "Brand Consistency", "E-commerce Ready"]
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: "Video Production",
      description: isHomePage 
        ? "Creating engaging video content that tells your story and connects with audiences."
        : "Creating engaging video content that tells your story and connects with audiences on an emotional level. From concept to final edit, we produce videos that drive results.",
      features: ["Concept Development", "Video Shooting", "Post-Production", "Motion Graphics", "Brand Videos", "Social Media Content"]
    }
  ];

  const displayedServices = isHomePage ? services : services;

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
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${isHomePage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
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
              
              {!isHomePage && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link 
                    to="/contact"
                    className="text-black font-medium hover:text-blue-600 transition-colors duration-200 group-hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              )}
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
