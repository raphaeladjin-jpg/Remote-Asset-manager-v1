import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaChalkboardTeacher,
  FaChartLine,
  FaComments,
  FaFileInvoice,
  FaMicrophoneAlt,
  FaHandshake,
  FaBriefcase
} from 'react-icons/fa';

const steps = [
  { icon: FaGraduationCap, title: "Register & Enroll", desc: "Choose your 3-month or 6-month program and complete registration with a $30 USD fee." },
  { icon: FaChalkboardTeacher, title: "Online Training Begins", desc: "Attend live and recorded classes with expert instructors from day one." },
  { icon: FaChartLine, title: "Practical Assignments", desc: "Apply your learning through hands-on projects that build a real portfolio." },
  { icon: FaComments, title: "One-on-One Tutor Support", desc: "Get personalised guidance from your dedicated tutor throughout your program." },
  { icon: FaFileInvoice, title: "CV & Profile Building", desc: "Craft an ATS-optimised CV and polished LinkedIn profile ready for global employers." },
  { icon: FaMicrophoneAlt, title: "Interview Preparation", desc: "Practise mock interviews and build the confidence to impress international employers." },
  { icon: FaHandshake, title: "Career Guidance & Job Matching", desc: "After completing your 3-month or 6-month program, our team matches you with remote employers worldwide." },
  { icon: FaBriefcase, title: "Job Placement & Contract Work", desc: "Receive free job placement support and access contract work opportunities with ongoing career assistance." },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-semibold text-sm mb-4">
            The Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Learn &amp; Work Abroad Program</h2>
          <p className="text-muted-foreground text-lg">
            Students complete either a <strong className="text-foreground">3-month</strong> or <strong className="text-foreground">6-month</strong> training program — then receive dedicated career guidance and remote job placement support to connect with employers worldwide.
          </p>
        </div>

        {/* Program duration badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center gap-3 bg-primary/5 border border-primary/20 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">3M</div>
            <div>
              <p className="font-bold text-foreground text-sm">Short Course Track</p>
              <p className="text-xs text-muted-foreground">3-Month Training Program</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-secondary/5 border border-secondary/20 rounded-2xl px-6 py-4">
            <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm shrink-0">6M</div>
            <div>
              <p className="font-bold text-foreground text-sm">Advanced Track</p>
              <p className="text-xs text-muted-foreground">6-Month Training Program</p>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line row 1 */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-100 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.slice(0, 4).map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold shadow-lg mb-6 relative z-10 border-4 border-white">
                    {idx + 1}
                  </div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground px-2">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="h-12 hidden md:block" />

          {/* Connecting line row 2 */}
          <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-gray-100 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10 mt-8 md:mt-0">
            {steps.slice(4, 8).map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx + 4}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 4) * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className={`w-16 h-16 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg mb-6 relative z-10 border-4 border-white ${idx >= 2 ? 'bg-secondary' : 'bg-primary'}`}>
                    {idx + 5}
                  </div>
                  <h3 className="font-bold text-base mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground px-2">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-primary rounded-3xl p-8 md:p-12 max-w-3xl mx-auto text-white"
        >
          <h3 className="text-2xl font-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="text-white/80 mb-6">Join hundreds of graduates who have secured remote jobs with international companies. Your program — 3 months or 6 months — begins with a single step.</p>
          <a
            href="#registration"
            className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
          >
            Register Now — $30 USD
          </a>
        </motion.div>
      </div>
    </section>
  );
}
