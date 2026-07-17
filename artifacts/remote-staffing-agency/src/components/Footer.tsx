import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGlobeAmericas } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <FaGlobeAmericas className="text-2xl text-secondary" />
              <span className="text-xl font-bold tracking-tight">Remote Staffing Agency</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Africa's leading remote staffing and digital skills training organization. We empower people with job-ready skills and connect them to global employers.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollTo('#home')} className="hover:text-secondary transition-colors">Home</button></li>
              <li><button onClick={() => scrollTo('#about')} className="hover:text-secondary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo('#registration')} className="hover:text-secondary transition-colors">Registration</button></li>
              <li><button onClick={() => scrollTo('#fees')} className="hover:text-secondary transition-colors">Course Fees</button></li>
              <li><button onClick={() => scrollTo('#roadmap')} className="hover:text-secondary transition-colors">Learn & Work Abroad</button></li>
              <li><button onClick={() => scrollTo('#faq')} className="hover:text-secondary transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Popular Courses</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollTo('#courses')} className="hover:text-secondary transition-colors">Virtual Assistant</button></li>
              <li><button onClick={() => scrollTo('#courses')} className="hover:text-secondary transition-colors">Customer Support</button></li>
              <li><button onClick={() => scrollTo('#courses')} className="hover:text-secondary transition-colors">Digital Marketing</button></li>
              <li><button onClick={() => scrollTo('#courses')} className="hover:text-secondary transition-colors">Social Media Management</button></li>
              <li><button onClick={() => scrollTo('#courses')} className="hover:text-secondary transition-colors">Data Entry</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollTo('#services')} className="hover:text-secondary transition-colors">Remote Job Placement</button></li>
              <li><button onClick={() => scrollTo('#services')} className="hover:text-secondary transition-colors">CV & Resume Writing</button></li>
              <li><button onClick={() => scrollTo('#services')} className="hover:text-secondary transition-colors">Interview Preparation</button></li>
              <li><button onClick={() => scrollTo('#services')} className="hover:text-secondary transition-colors">Career Coaching</button></li>
              <li><button onClick={() => scrollTo('#services')} className="hover:text-secondary transition-colors">International Job Matching</button></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Remote Staffing Agency. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
