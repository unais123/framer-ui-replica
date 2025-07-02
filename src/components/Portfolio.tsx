
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './portfolio/ProjectCard';
import ProjectDialog from './portfolio/ProjectDialog';
import FilterTabs from './portfolio/FilterTabs';
import { projects } from './portfolio/projectsData';

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

  // For home page, only show the first 3 projects
  const homePageProjects = isHomePage ? projects.slice(0, 3) : projects;

  // Apply filter for work page
  const filteredProjects = isHomePage 
    ? homePageProjects 
    : activeFilter === "All" 
      ? projects 
      : projects.filter(project => project.category === activeFilter);

  const displayedProjects = filteredProjects;

  const openProjectDialog = (project: any) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const filters = ["All", "Web Development", "AI Automation", "Branding", "Digital Marketing"];

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
            <FilterTabs 
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => openProjectDialog(project)}
                isHomePage={isHomePage}
              />
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
      <ProjectDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default Portfolio;
