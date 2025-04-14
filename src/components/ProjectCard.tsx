
import { ElementType } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  githubLink,
  delay = 0
}: ProjectCardProps) => {
  return (
    <ScrollReveal delay={delay} animation="fade-in">
      <div className="project-card group h-72">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="project-card-content">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm mb-3">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {liveLink && (
              <a 
                href={liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-4 h-4 text-white" />
              </a>
            )}
            {githubLink && (
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="View GitHub repository"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProjectCard;
