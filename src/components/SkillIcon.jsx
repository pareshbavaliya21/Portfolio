
import { useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const SkillIcon = ({ name, icon: Icon, delay = 0 }) => {
  return (
    <ScrollReveal delay={delay} animation="slide-up">
      <div className="skill-icon glass-card group hover:scale-110 transition-transform duration-300 relative overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-r from-theme-purple to-theme-blue opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
        <div className="text-theme-purple mb-2 group-hover:text-theme-blue transition-colors duration-300 relative z-10">
          <Icon className="w-10 h-10 animate-float" />
        </div>
        <span className="font-medium text-sm relative z-10">{name}</span>
      </div>
    </ScrollReveal>
  );
};

export default SkillIcon;
