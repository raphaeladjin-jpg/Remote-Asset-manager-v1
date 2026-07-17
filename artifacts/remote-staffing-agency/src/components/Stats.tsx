import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (ref: React.RefObject<Element>, options: IntersectionObserverInit = { threshold: 0.5 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(element);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options]);

  return isIntersecting;
};

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useIntersectionObserver(ref);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-white mb-2">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export default function Stats() {
  const stats = [
    { label: "Students Trained", value: 5000, suffix: "+" },
    { label: "Courses Available", value: 12, suffix: "" },
    { label: "Remote Jobs Secured", value: 1200, suffix: "+" },
    { label: "Countries Served", value: 40, suffix: "+" },
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-blue-200 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
