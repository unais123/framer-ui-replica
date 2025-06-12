import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  isHomePage?: boolean;
}

const Portfolio = ({ isHomePage = false }: PortfolioProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

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
      additionalImages: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      fullDescription: "This comprehensive e-commerce platform revolutionizes online shopping with its intuitive design and powerful features. Built with modern technologies, it offers seamless user experience from product discovery to checkout.",
      features: [
        "Advanced product filtering and search",
        "Secure payment integration with Stripe",
        "Real-time inventory management",
        "Comprehensive admin dashboard",
        "Mobile-responsive design",
        "Multi-vendor support"
      ],
      duration: "6 months",
      teamSize: "5 developers",
      client: "TechMart Solutions",
      challenges: "Implementing real-time inventory sync across multiple vendors while maintaining optimal performance.",
      results: "40% increase in conversion rate and 60% reduction in cart abandonment.",
      liveUrl: "https://example-ecommerce.com",
      githubUrl: "https://github.com/example/ecommerce"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["React Native", "Firebase", "Node.js"],
      featured: true,
      fullDescription: "SecureBank Mobile revolutionizes mobile banking with cutting-edge security features and an intuitive user interface. Built for both iOS and Android platforms.",
      features: [
        "Biometric authentication (Face ID, Touch ID)",
        "Real-time transaction notifications",
        "Budget tracking and analytics",
        "Peer-to-peer payments",
        "Bill payment automation",
        "Investment portfolio management"
      ],
      duration: "8 months",
      teamSize: "7 developers",
      client: "SecureBank",
      challenges: "Implementing bank-grade security while maintaining a smooth user experience across different mobile platforms.",
      results: "App Store rating of 4.8/5 and 200% increase in mobile transaction volume.",
      liveUrl: "https://securebank-app.com",
      githubUrl: "https://github.com/example/banking-app"
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Development",
      description: "Comprehensive fitness app with workout tracking, nutrition planning, and social features.",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Swift", "Kotlin", "Firebase"],
      featured: true,
      fullDescription: "FitLife Pro empowers users to achieve their fitness goals through comprehensive tracking, personalized workouts, and community support.",
      features: [
        "Personalized workout plans",
        "Nutrition tracking and meal planning",
        "Progress photos and measurements",
        "Social challenges and leaderboards",
        "Wearable device integration",
        "AI-powered form analysis"
      ],
      duration: "10 months",
      teamSize: "6 developers",
      client: "FitLife Technologies",
      challenges: "Creating accurate fitness tracking algorithms while maintaining long battery life and smooth performance.",
      results: "500K+ downloads with 4.7/5 rating and 80% user retention rate.",
      liveUrl: "https://fitlife-pro.com",
      githubUrl: "https://github.com/example/fitness-app"
    },
    {
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity redesign for a tech startup including logo, guidelines, and marketing materials.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Illustrator", "Photoshop", "Figma"],
      featured: false,
      fullDescription: "A complete brand transformation for InnovateTech, a emerging AI startup. The project encompassed logo design, brand guidelines, marketing collateral, and digital presence.",
      features: [
        "Modern logo design with multiple variations",
        "Comprehensive brand guidelines",
        "Business card and letterhead design",
        "Social media templates",
        "Website mockups",
        "Brand voice and messaging"
      ],
      duration: "3 months",
      teamSize: "3 designers",
      client: "InnovateTech",
      challenges: "Creating a brand identity that conveys trust and innovation while remaining approachable to diverse audiences.",
      results: "Brand recognition increased by 85% and helped secure $2M in Series A funding.",
      liveUrl: "https://example-brand.com",
      githubUrl: null
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for SaaS companies with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      featured: false,
      fullDescription: "DataInsight Pro is a comprehensive analytics dashboard that helps SaaS companies track KPIs, user engagement, and business metrics in real-time.",
      features: [
        "Real-time data visualization",
        "Customizable dashboard layouts",
        "Advanced filtering and segmentation",
        "Automated report generation",
        "Multi-tenant architecture",
        "API integrations"
      ],
      duration: "4 months",
      teamSize: "4 developers",
      client: "MetricsCorp",
      challenges: "Processing and visualizing large datasets in real-time while maintaining responsive performance.",
      results: "Reduced reporting time by 75% and improved data-driven decision making.",
      liveUrl: "https://datainsight-pro.com",
      githubUrl: "https://github.com/example/saas-dashboard"
    },
    {
      title: "Restaurant Website",
      category: "Web Design",
      description: "Beautiful restaurant website with online ordering, reservation system, and menu management.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      additionalImages: [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      technologies: ["WordPress", "PHP", "MySQL"],
      featured: false,
      fullDescription: "Bella Vista Restaurant's digital transformation with a stunning website that captures the essence of fine dining while providing practical functionality.",
      features: [
        "Online table reservation system",
        "Digital menu with dietary filters",
        "Online ordering and delivery",
        "Event booking management",
        "Customer review integration",
        "Social media integration"
      ],
      duration: "2 months",
      teamSize: "2 developers",
      client: "Bella Vista Restaurant",
      challenges: "Creating an elegant design that works seamlessly across all devices while integrating with existing POS systems.",
      results: "Online reservations increased by 120% and takeout orders grew by 200%.",
      liveUrl: "https://bellavista-restaurant.com",
      githubUrl: null
    }
  ];

  const displayedProjects = isHomePage ? projects.slice(0, 3) : projects;

  const openProjectDialog = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const filters = ["All", "Web Development and Testing", "Digital Marketing", "Branding", "AI Automation", "Videography and Photography"];

  return (
    <>
      <section ref={sectionRef} id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="animate-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold font-space mb-6">
                Our
                <span className="text-yellow-gradient block">Portfolio</span>
              </h2>
            </div>
            <div className="animate-on-scroll">
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {isHomePage 
                  ? "Featured projects showcasing our expertise and creativity."
                  : "Explore our latest projects and see how we've helped businesses achieve their digital goals."
                }
              </p>
            </div>
          </div>

          {/* Filter Tabs - Only show on work page */}
          {!isHomePage && (
            <div className="animate-on-scroll mb-12">
              {/* Desktop Filter Tabs */}
              <div className="hidden md:flex justify-center">
                <div className="flex flex-wrap gap-4 bg-gray-100 p-2 rounded-full">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-6 py-2 rounded-full transition-all duration-200 ${
                        filter === activeFilter 
                          ? "bg-black text-white" 
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Filter Cards */}
              <div className="md:hidden">
                <div className="grid grid-cols-2 gap-2 px-4 max-w-md mx-auto">
                  {filters.map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`relative overflow-hidden rounded-lg p-3 text-center transition-all duration-300 transform hover:scale-105 ${
                        filter === activeFilter 
                          ? "bg-black text-white shadow-lg" 
                          : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:shadow-md"
                      }`}
                    >
                      <div className={`text-xs font-semibold mb-1 ${filter === activeFilter ? 'text-white' : 'text-gray-800'}`}>
                        {filter}
                      </div>
                      <div className={`text-xs ${filter === activeFilter ? 'text-gray-300' : 'text-gray-500'}`}>
                        {filter === "All" && "View Everything"}
                        {filter === "Web Development and Testing" && "Websites & QA"}
                        {filter === "Digital Marketing" && "Online Growth"}
                        {filter === "Branding" && "Visual Identity"}
                        {filter === "AI Automation" && "Smart Solutions"}
                        {filter === "Videography and Photography" && "Visual Content"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <div 
                key={index}
                onClick={() => openProjectDialog(project)}
                className={`animate-on-scroll group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  project.featured && !isHomePage ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="text-sm text-yellow-600 font-medium mb-2">
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

                  <div className="text-black font-medium group-hover:text-yellow-600 transition-colors duration-200">
                    View Project →
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold mb-4 font-space">
                {isHomePage ? "Want to see more?" : "Like what you see?"}
              </h3>
              <p className="text-gray-600 mb-8">
                {isHomePage 
                  ? "Check out our complete portfolio to see all our amazing projects."
                  : "Let's work together to create something amazing for your business."
                }
              </p>
              {isHomePage ? (
                <Link 
                  to="/work"
                  className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  View All Projects
                </Link>
              ) : (
                <Link 
                  to="/contact"
                  className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                >
                  Start Your Project
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-space mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-yellow-600 font-medium">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Project Images */}
                <div className="space-y-4">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  {/* Additional Images */}
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.additionalImages.map((image: string, imageIndex: number) => (
                      <img 
                        key={imageIndex}
                        src={image} 
                        alt={`${selectedProject.title} - Image ${imageIndex + 2}`}
                        className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                      />
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Project Overview */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Calendar className="mx-auto mb-1 text-yellow-600" size={20} />
                      <div className="text-sm font-medium">{selectedProject.duration}</div>
                      <div className="text-xs text-gray-500">Duration</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Users className="mx-auto mb-1 text-yellow-600" size={20} />
                      <div className="text-sm font-medium">{selectedProject.teamSize}</div>
                      <div className="text-xs text-gray-500">Team Size</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Award className="mx-auto mb-1 text-yellow-600" size={20} />
                      <div className="text-sm font-medium">{selectedProject.client}</div>
                      <div className="text-xs text-gray-500">Client</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, techIndex: number) => (
                        <span 
                          key={techIndex}
                          className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature: string, featureIndex: number) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Results */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Results</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.results}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Portfolio;
