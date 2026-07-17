import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGlobeAmericas } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Courses', href: '#courses' },
  { name: 'Registration', href: '#registration' },
  { name: 'Course Fees', href: '#fees' },
  { name: 'Learn & Work Abroad', href: '#roadmap' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => scrollTo('#home')}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
              <FaGlobeAmericas className="text-2xl" />
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Remote Staffing<span className={isScrolled ? 'text-primary' : 'text-blue-200'}> Agency</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className={`text-sm font-medium transition-colors hover:text-secondary ${
                      isScrolled ? 'text-muted-foreground hover:text-primary' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => scrollTo('#registration')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                isScrolled 
                  ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg' 
                  : 'bg-white text-primary hover:bg-white/90'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 text-2xl ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-2 text-primary">
                  <FaGlobeAmericas className="text-2xl" />
                  <span className="text-xl font-bold">Remote Staffing Agency</span>
                </div>
                <button
                  className="p-2 text-2xl text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <ul className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-2xl font-semibold text-foreground hover:text-primary transition-colors block w-full text-left"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
