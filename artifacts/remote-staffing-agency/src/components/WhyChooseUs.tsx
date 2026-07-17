import { motion } from 'framer-motion';
import { 
  FaChalkboardTeacher, FaLaptop, FaTags, FaGlobe, 
  FaCompass, FaCogs, FaCertificate, FaUserFriends 
} from 'react-icons/fa';

const reasons = [
  { icon: FaChalkboardTeacher, title: "Experienced Instructors", desc: "Learn directly from active industry professionals with years of global experience." },
  { icon: FaLaptop, title: "Flexible Online Learning", desc: "Study from anywhere at your own pace with our accessible learning platform." },
  { icon: FaTags, title: "Affordable Fees", desc: "Premium education at competitive rates, designed to give you the highest ROI." },
  { icon: FaGlobe, title: "International Opportunities", desc: "Direct connections to remote jobs with companies across North America and Europe." },
  { icon: FaCompass, title: "Career Guidance", desc: "Personalized mentorship to help you navigate your career path successfully." },
  { icon: FaCogs, title: "Practical Projects", desc: "Build a robust portfolio through hands-on tasks that mimic real remote work." },
  { icon: FaCertificate, title: "Industry Certifications", desc: "Earn globally recognized certificates that make your resume stand out." },
  { icon: FaUserFriends, title: "Dedicated Student Support", desc: "A responsive team ready to assist you academically and technically at any time." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            The Remote Staffing Agency Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg">
            We don't just teach you skills; we give you the exact blueprint to start earning globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
