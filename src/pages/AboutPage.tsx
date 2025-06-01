
import { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Award, Coffee } from 'lucide-react';

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

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Award className="w-8 h-8" /> },
    { number: "50+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Target className="w-8 h-8" /> },
    { number: "1000+", label: "Cups of Coffee", icon: <Coffee className="w-8 h-8" /> }
  ];

  const team = [
    {
      name: "John Smith",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "10+ years of experience in brand design and creative strategy."
    },
    {
      name: "Sarah Johnson",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Full-stack developer with expertise in modern web technologies."
    },
    {
      name: "Mike Chen",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Passionate about creating intuitive and beautiful user experiences."
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
              <span className="text-yellow-gradient block">Our Story</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a creative agency passionate about transforming ideas into exceptional digital experiences through thoughtful design and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold font-space mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe in the power of design and technology to transform businesses and create meaningful connections with audiences. Our mission is to help brands tell their stories through innovative digital solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every project we undertake is an opportunity to push boundaries, challenge conventions, and create something extraordinary that resonates with users and drives business growth.
              </p>
            </div>
            <div className="animate-on-scroll">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Our mission"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="animate-on-scroll text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold font-space mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "We constantly explore new technologies and creative approaches to solve complex challenges."
                },
                {
                  title: "Quality",
                  description: "We never compromise on quality, ensuring every detail meets our high standards."
                },
                {
                  title: "Collaboration",
                  description: "We work closely with our clients as partners to achieve shared goals and success."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 font-space">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-4xl font-bold font-space mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Talented individuals who bring creativity, expertise, and passion to every project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold mb-2 font-space">{member.name}</h3>
                  <p className="text-yellow-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
