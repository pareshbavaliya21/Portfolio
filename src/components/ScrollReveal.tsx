
import { useRef, useEffect, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'fade-in-left' | 'fade-in-right';
}

const ScrollReveal = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  animation = 'fade-in',
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial opacity to 0
    element.style.opacity = '0';
    element.style.transform = animation === 'slide-up'
      ? 'translateY(40px)'
      : animation === 'fade-in-left'
      ? 'translateX(-40px)'
      : animation === 'fade-in-right'
      ? 'translateX(40px)'
      : 'translateY(20px)';
    element.style.transition = `opacity 0.8s ease-out, transform 0.8s ease-out`;
    element.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translate(0, 0)';
          }, delay);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, delay, animation]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
