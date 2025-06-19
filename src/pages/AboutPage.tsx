
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Eye, Heart, Lightbulb, Award, Rocket, Globe, Code, Palette } from 'lucide-react';
import { useEffect, useRef } from 'react';

const AboutPage = () => {
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

  const teamMembers = [
    {
      name: "Arjun Shetty",
      role: "Founder & CEO",
      description: "Visionary leader with 8+ years in digital transformation, specializing in AI integration and business automation. Passionate about helping businesses thrive in the digital age.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: "Priya Nair",
      role: "Creative Director",
      description: "Award-winning designer with expertise in brand identity and user experience. Transforms complex ideas into visually stunning and intuitive digital experiences.",
      icon: <Palette className="w-6 h-6" />
    },
    {
      name: "Rahul Kumar",
      role: "Technical Lead",
      description: "Full-stack developer and AI specialist with deep knowledge in modern web technologies and machine learning implementations for business solutions.",
      icon: <Code className="w-6 h-6" />
    },
    {
      name: "Sneha Rao",
      role: "Marketing Strategist",
      description: "Digital marketing expert with proven track record in SEO, social media, and performance marketing. Drives measurable growth for our clients.",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const ideationProcess = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We dive deep into understanding your business, target audience, and market landscape to identify opportunities and challenges."
    },
    {
      step: "02",
      title: "Strategic Planning",
      description: "Based on our research, we develop comprehensive strategies that align with your business goals and market positioning."
    },
    {
      step: "03",
      title: "Creative Conceptualization",
      description: "Our creative team brainstorms innovative solutions, exploring multiple approaches to solve your unique challenges."
    },
    {
      step: "04",
      title: "Prototyping & Testing",
      description: "We create prototypes and conduct testing to validate concepts before moving to full-scale implementation."
    },
    {
      step: "05",
      title: "Implementation & Launch",
      description: "We execute the finalized strategy with precision, ensuring every detail meets our high standards of quality."
    },
    {
      step: "06",
      title: "Optimization & Growth",
      description: "Post-launch, we continuously monitor, analyze, and optimize to ensure maximum performance and ROI."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold font-space mb-6">
              About
              <span className="block" style={{ color: '#FF9F04' }}>ATUA AGENCY</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of digital excellence through innovative AI-powered solutions and creative design strategies.
            </p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="animate-on-scroll">
                <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
                  Our
                  <span className="block" style={{ color: '#FF9F04' }}>Story</span>
                </h2>
              </div>
              
              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  ATUA AGENCY was born from a simple yet powerful vision: to bridge the gap between traditional business practices and cutting-edge digital innovation. Founded in the vibrant coastal city of Mangalore, Karnataka, we've grown from a passionate startup to a leading digital transformation partner.
                </p>
              </div>

              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our name "ATUA" represents our commitment to being authentic, transformative, unique, and ambitious in everything we do. We believe that every business has untapped potential waiting to be unleashed through the right digital strategies.
                </p>
              </div>

              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, we serve clients across India and internationally, specializing in AI automation, web development, digital marketing, and brand transformation. Our 98% client satisfaction rate speaks to our dedication to excellence and results-driven approach.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="animate-on-scroll bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#FF9F04' }}>25+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="animate-on-scroll bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#FF9F04' }}>98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="animate-on-scroll bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#FF9F04' }}>24/7</div>
                <div className="text-gray-600">AI Support</div>
              </div>
              <div className="animate-on-scroll bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2" style={{ color: '#FF9F04' }}>10+</div>
                <div className="text-gray-600">AI Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="animate-on-scroll">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 mr-4" style={{ color: '#FF9F04' }} />
                <h3 className="text-3xl font-bold font-space text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To revolutionize how businesses operate in the digital landscape by providing innovative AI-powered solutions, exceptional design, and strategic digital marketing that drives measurable growth and sustainable success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are committed to democratizing access to cutting-edge technology, ensuring that businesses of all sizes can leverage the power of AI and digital transformation to compete effectively in the modern marketplace.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission extends beyond just delivering services – we aim to be trusted partners who understand our clients' unique challenges and provide tailored solutions that exceed expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-on-scroll">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 mr-4" style={{ color: '#FF9F04' }} />
                <h3 className="text-3xl font-bold font-space text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To become the most trusted AI-first digital agency in India, setting new standards for innovation, creativity, and client success while expanding our impact globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We envision a future where artificial intelligence seamlessly integrates with human creativity to solve complex business challenges, create extraordinary user experiences, and drive unprecedented growth for our clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By 2030, we aim to have transformed over 1000 businesses through our innovative solutions, establishing ATUA AGENCY as synonymous with digital excellence and forward-thinking strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideation Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
                Our Ideation
                <span className="block" style={{ color: '#FF9F04' }}>Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From concept to execution, our systematic approach ensures every project delivers exceptional results
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ideationProcess.map((process, index) => (
              <div 
                key={index}
                className="animate-on-scroll relative p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                     style={{ backgroundColor: '#FF9F04' }}>
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-space text-gray-900 mt-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
                Meet Our
                <span className="block" style={{ color: '#FF9F04' }}>Expert Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Passionate professionals dedicated to delivering excellence and driving your success
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="animate-on-scroll flex items-start space-x-6 p-8 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white"
                       style={{ backgroundColor: '#FF9F04' }}>
                    {member.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold font-space text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="font-semibold mb-3" style={{ color: '#FF9F04' }}>
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
                Why Choose
                <span className="block" style={{ color: '#FF9F04' }}>ATUA AGENCY</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Client-First Approach",
                description: "Your success is our success. We prioritize your goals and work tirelessly to exceed expectations."
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovative Solutions",
                description: "We stay ahead of technology trends, implementing cutting-edge AI and digital solutions."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Excellence",
                description: "98% client satisfaction rate and 25+ successful projects speak to our commitment to quality."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Our diverse team brings together creativity, technical expertise, and strategic thinking."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4" style={{ color: '#FF9F04' }}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-space text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
