
interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    featured: boolean;
  };
  onClick: () => void;
  isHomePage?: boolean;
}

const ProjectCard = ({ project, onClick, isHomePage = false }: ProjectCardProps) => {
  return (
    <div 
      onClick={onClick}
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
  );
};

export default ProjectCard;
