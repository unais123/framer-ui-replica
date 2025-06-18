
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Eye, Heart, Lightbulb, Award } from 'lucide-react';
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
      name: "Founder & CEO",
      role: "Strategic Leadership",
      description: "Leading the vision and strategic direction of ATUA AGENCY with expertise in digital transformation."
    },
    {
      name: "Creative Director",
      role: "Design & Branding",
      description: "Overseeing all creative projects with a focus on innovative design solutions and brand development."
    },
    {
      name: "Technical Lead",
      role: "Development & AI",
      description: "Spearheading web development and AI automation projects with cutting-edge technologies."
    },
    {
      name: "Marketing Specialist",
      role: "Digital Marketing",
      description: "Driving digital marketing strategies and campaigns that deliver measurable results for our clients."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric Approach",
      description: "We put our clients at the center of everything we do, ensuring their success is our success."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to stay ahead of the curve."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering quality that exceeds expectations."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and close collaboration with our clients."
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
              We are a passionate team of digital experts dedicated to transforming businesses through innovative design, development, and AI-powered solutions.
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
                  About Our
                  <span className="block" style={{ color: '#FF9F04' }}>Company</span>
                </h2>
              </div>
              
              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in Mangalore, Karnataka, ATUA AGENCY has grown from a small startup to a dynamic digital agency serving clients across India and beyond. We specialize in creating digital experiences that drive real business results.
                </p>
              </div>

              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our expertise spans web design and development, AI automation, branding, digital marketing, and content creation. We pride ourselves on staying ahead of industry trends and implementing cutting-edge solutions.
                </p>
              </div>

              <div className="animate-on-scroll">
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With a 98% client satisfaction rate and over 25 successful projects, we've built a reputation for excellence, innovation, and reliable service delivery.
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
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are committed to delivering exceptional results through creativity, technology, and strategic thinking while maintaining the highest standards of quality and service.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-on-scroll">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 mr-4" style={{ color: '#FF9F04' }} />
                <h3 className="text-3xl font-bold font-space text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the leading digital agency in India, recognized for transforming businesses through innovative AI-powered solutions and exceptional digital experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where every business, regardless of size, has access to cutting-edge digital tools and strategies that enable them to thrive in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Talented professionals passionate about delivering exceptional results
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold" 
                     style={{ backgroundColor: '#FF9F04' }}>
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold mb-2 font-space text-gray-900">
                  {member.name}
                </h3>
                <p className="font-medium mb-3" style={{ color: '#FF9F04' }}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
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
