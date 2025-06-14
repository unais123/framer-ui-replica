import { useEffect, useRef } from 'react';
import { Users, Lightbulb, Target, Heart } from 'lucide-react';

const About = () => {
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
              }, index * 100);
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

  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Satisfaction",
      description: "Our clients are our priority. We deliver exceptional results that exceed expectations and build lasting relationships."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Talented professionals with diverse skills and years of experience in their fields."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Solutions",
      description: "Innovative approaches to complex problems, delivering unique and effective solutions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal Focused",
      description: "Strategic thinking and execution aligned with your business objectives and vision."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div>
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
                About Our
                <span className="text-yellow-gradient block">Creative Studio</span>
              </h2>
            </div>
            
            <div className="animate-on-scroll">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are a passionate team of designers, developers, and strategists who believe in the power of great design to transform businesses and create meaningful connections with audiences.
              </p>
            </div>

            <div className="animate-on-scroll">
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our approach combines creativity with data-driven insights to deliver solutions that not only look amazing but also drive real results for our clients.
              </p>
            </div>

            <div className="animate-on-scroll">
              <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="animate-on-scroll p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-yellow-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-space">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "98%", label: "Client Satisfaction" },
              { number: "200+", label: "Projects Delivered" },
              { number: "24/7", label: "Support Available" },
              { number: "10+", label: "Industry Awards" }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
