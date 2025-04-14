
import { Building } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ExperienceItemProps {
  company: string;
  position: string;
  duration: string;
  description: string[];
  delay?: number;
}

const ExperienceItem = ({ 
  company, 
  position, 
  duration, 
  description,
  delay = 0 
}: ExperienceItemProps) => {
  return (
    <div className="relative p-6 glass-card rounded-xl hover:shadow-xl transition-all duration-500 border-l-4 border-theme-purple">
      <ScrollReveal delay={delay} animation="fade-in">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-theme-purple/20 flex items-center justify-center flex-shrink-0">
            <Building className="w-6 h-6 text-theme-purple animate-pulse" />
          </div>
          
          <div>
            <h3 className="text-xl font-bold">{company}</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-600 dark:text-gray-300">
              <span className="font-medium">{position}</span>
              <span className="hidden md:block">•</span>
              {/* <span>{duration}</span> */}
            </div>
          </div>
        </div>
        
        <div className="space-y-2 ml-0 md:ml-16">
          {description.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start animate-fade-in" 
              style={{ animationDelay: `${100 * index}ms` }}
            >
              <span className="w-4 h-4 rounded-full bg-theme-blue/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-blue"></span>
              </span>
              <p className="text-gray-700 dark:text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ExperienceItem;
