
import { ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    category: string;
    image: string;
    additionalImages: string[];
    fullDescription: string;
    duration: string;
    teamSize: string;
    client: string;
    technologies: string[];
    features: string[];
    challenges: string;
    results: string;
    liveUrl?: string;
    githubUrl?: string;
  } | null;
}

const ProjectDialog = ({ isOpen, onClose, project }: ProjectDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold font-space mb-2">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-yellow-600 font-medium">
            {project.category}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Project Images */}
          <div className="space-y-4">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            {/* Additional Images */}
            <div className="grid grid-cols-2 gap-3">
              {project.additionalImages.map((image: string, imageIndex: number) => (
                <img 
                  key={imageIndex}
                  src={image} 
                  alt={`${project.title} - Image ${imageIndex + 2}`}
                  className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
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
                {project.fullDescription}
              </p>
            </div>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Calendar className="mx-auto mb-1 text-yellow-600" size={20} />
                <div className="text-sm font-medium">{project.duration}</div>
                <div className="text-xs text-gray-500">Duration</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Users className="mx-auto mb-1 text-yellow-600" size={20} />
                <div className="text-sm font-medium">{project.teamSize}</div>
                <div className="text-xs text-gray-500">Team Size</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Award className="mx-auto mb-1 text-yellow-600" size={20} />
                <div className="text-sm font-medium">{project.client}</div>
                <div className="text-xs text-gray-500">Client</div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, techIndex: number) => (
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
            {project.features.map((feature: string, featureIndex: number) => (
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
              {project.challenges}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Results</h3>
            <p className="text-gray-600 leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;
