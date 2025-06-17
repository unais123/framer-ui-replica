
import { useEffect, useRef } from 'react';
import { Bot, Zap, GitBranch, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomation = () => {
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
              }, index * 200);
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
      icon: <Zap className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "Streamline repetitive tasks and connect your favorite apps seamlessly with n8n's powerful automation platform."
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Custom Integrations",
      description: "Build complex workflows that integrate with hundreds of services, APIs, and databases without writing code."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Time-Saving Solutions",
      description: "Reduce manual work by up to 80% with intelligent automation that learns and adapts to your business needs."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <div className="flex items-center justify-center mb-6">
              <Bot className="w-12 h-12 text-yellow-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900">
                AI Automation with
                <span className="text-yellow-600 block md:inline md:ml-3">n8n</span>
              </h2>
            </div>
          </div>
          <div className="animate-on-scroll">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with intelligent automation powered by n8n. 
              Connect apps, automate workflows, and boost productivity like never before.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="animate-on-scroll bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-all duration-300 group"
            >
              <div className="text-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 font-space text-gray-900">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="animate-on-scroll bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 font-space text-gray-900">
                Why Choose Our n8n Automation Services?
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Visual workflow builder - no coding required</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">As per requirement, we will create custom automation solutions</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Self-hosted solution for complete data control</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Advanced error handling and monitoring</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Scalable automation for growing businesses</span>
                </li>
              </ul>

              <Link 
                to="/contact"
                className="inline-flex items-center bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started with AI Automation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-yellow-600/20 to-yellow-700/20 rounded-3xl p-8 border border-yellow-600/30">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">80%</div>
                  <div className="text-gray-600 mb-6">Time Saved on Manual Tasks</div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">10+</div>
                      <div className="text-sm text-gray-600">Integrations</div>
                    </div>
                    <div className="bg-white/70 rounded-lg p-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                      <div className="text-sm text-gray-600">Automation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
