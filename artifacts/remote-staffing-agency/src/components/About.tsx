import { motion } from 'framer-motion';
import { FaUserTie, FaCheckCircle, FaLightbulb, FaAward, FaUsers, FaHeart } from 'react-icons/fa';

const values = [
  { icon: FaUserTie, title: "Professionalism", desc: "Highest standards in all we do." },
  { icon: FaCheckCircle, title: "Integrity", desc: "Honest, transparent processes." },
  { icon: FaLightbulb, title: "Innovation", desc: "Modern skills for modern jobs." },
  { icon: FaAward, title: "Excellence", desc: "Striving for the best outcomes." },
  { icon: FaUsers, title: "Teamwork", desc: "Collaborative learning environments." },
  { icon: FaHeart, title: "Customer Success", desc: "Your success is our mission." }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empowering the Next Generation of Global Workers.
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Remote Staffing Agency is committed to helping students and professionals gain practical digital skills and secure remote employment with companies worldwide.
            </p>
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <FaLightbulb className="text-secondary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To empower people with job-ready digital skills and connect them to global employment opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FaGlobeAmericas className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">To become Africa's leading remote staffing and digital skills training organization.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary text-lg" />
                  </div>
                  <h4 className="font-bold text-foreground mb-1">{val.title}</h4>
                  <p className="text-sm text-muted-foreground">{val.desc}</p>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Add FaGlobeAmericas import since it's used
import { FaGlobeAmericas } from 'react-icons/fa';