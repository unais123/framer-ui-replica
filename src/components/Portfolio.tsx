
import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
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

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity redesign for a tech startup including logo, guidelines, and marketing materials.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Illustrator", "Photoshop", "Figma"],
      featured: false
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Node.js"],
      featured: true
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for SaaS companies with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      featured: false
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      description: "Beautiful restaurant website with online ordering, reservation system, and menu management.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["WordPress", "PHP", "MySQL"],
      featured: false
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Comprehensive fitness app with workout tracking, nutrition planning, and social features.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["Swift", "Kotlin", "Firebase"],
      featured: true
    }
  ];

  return (
    <section ref={sectionRef} id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
              Our
              <span className="text-gradient block">Portfolio</span>
            </h2>
          </div>
          <div className="animate-on-scroll">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="animate-on-scroll flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-full">
            {["All", "Web Development", "Mobile Development", "Branding", "Web Design"].map((filter) => (
              <button
                key={filter}
                className={`px-6 py-2 rounded-full transition-all duration-200 ${
                  filter === "All" 
                    ? "bg-black text-white" 
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`animate-on-scroll group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-3 font-space">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="text-black font-medium hover:text-blue-600 transition-colors duration-200 group-hover:underline">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4 font-space">
              Like what you see?
            </h3>
            <p className="text-gray-600 mb-8">
              Let's work together to create something amazing for your business.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
