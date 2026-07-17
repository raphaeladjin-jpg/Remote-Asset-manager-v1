import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import heroImg from '@assets/generated_images/hero.jpg';

export default function Hero() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Professionals working remotely" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary-foreground text-sm font-semibold mb-6">
              Africa's Leading Remote Staffing Agency
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-secondary">Global Remote</span> Career Today
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            We train students with in-demand digital skills and help them secure remote jobs with international companies worldwide.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => scrollTo('#registration')}
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-white rounded-full font-bold text-lg transition-transform hover:scale-105 hover:bg-secondary/90 flex items-center justify-center gap-2"
            >
              Register Now <FaArrowRight />
            </button>
            <button 
              onClick={() => scrollTo('#courses')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg transition-colors hover:bg-white/10"
            >
              View Courses
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
