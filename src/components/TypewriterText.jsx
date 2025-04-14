
import { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  className = '', 
  delay = 100,
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
      const completeTimeout = setTimeout(() => {
        onComplete?.();
      }, 300);
      
      return () => clearTimeout(completeTimeout);
    }
  }, [currentIndex, text, delay, onComplete]);

  return (
    <span 
      className={`typing-container relative ${className} ${isTyping ? 'after:animate-blink' : 'after:opacity-0'}`}
      style={{
        borderRight: isTyping ? '2px solid currentColor' : 'none',
        transition: 'border-color 0.3s ease'
      }}
    >
      {displayedText}
    </span>
  );
};

export default TypewriterText;
