
import ScrollReveal from './ScrollReveal';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
  delay?: number;
}

const TimelineItem = ({ 
  year, 
  title, 
  description, 
  isLast = false,
  delay = 0
}: TimelineItemProps) => {
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-6 left-4 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <div className="relative flex items-start gap-x-6">
        {/* Timeline dot */}
        <ScrollReveal delay={delay} className="relative z-10" animation="fade-in">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-theme-purple">
            <div className="h-2.5 w-2.5 rounded-full bg-white animate-pulse-glow"></div>
          </div>
        </ScrollReveal>
        
        {/* Content */}
        <ScrollReveal delay={delay + 200} animation="fade-in-left">
          <div className="glass-card p-4 rounded-lg">
            <time className="block text-sm text-gray-500 dark:text-gray-400 mb-1">{year}</time>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TimelineItem;
