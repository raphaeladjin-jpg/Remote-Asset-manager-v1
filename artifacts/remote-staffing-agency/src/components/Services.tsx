import { motion } from 'framer-motion';
import { 
  FaBriefcase, FaHeadset, FaBullhorn, FaKeyboard, 
  FaShareAlt, FaFileAlt, FaUserTie, FaCompass, FaGlobe
} from 'react-icons/fa';
import { FaComputerMouse } from 'react-icons/fa6';

const services = [
  { icon: FaBriefcase, title: "Remote Job Placement", desc: "Connecting you with global companies hiring remote talent." },
  { icon: FaComputerMouse, title: "Virtual Assistant Training", desc: "Learn administrative, technical, and creative assistance." },
  { icon: FaHeadset, title: "Customer Support Training", desc: "Master communication and CRM tools for global support roles." },
  { icon: FaBullhorn, title: "Digital Marketing Training", desc: "SEO, content strategy, and paid ads to grow businesses." },
  { icon: FaKeyboard, title: "Data Entry Training", desc: "Speed, accuracy, and data management for remote tasks." },
  { icon: FaShareAlt, title: "Social Media Management", desc: "Build brands and engage audiences across platforms." },
  { icon: FaFileAlt, title: "CV & Resume Writing", desc: "Stand out with an optimized, ATS-friendly professional CV." },
  { icon: FaUserTie, title: "Interview Preparation", desc: "Mock interviews to build confidence and land the job." },
  { icon: FaCompass, title: "Career Coaching", desc: "Personalized guidance to navigate your remote career path." },
  { icon: FaGlobe, title: "International Job Matching", desc: "Direct pairing with companies looking for your specific skills." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            End-to-end support to transition you from a learner to a hired global remote professional.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon className="text-2xl" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
