import { motion } from 'framer-motion';
import { FaClock, FaCertificate, FaCheck } from 'react-icons/fa';

const courses = [
  {
    title: "Microsoft Office Essentials",
    duration: "3 months",
    certificate: "Microsoft Office Essentials Certificate",
    outcomes: ["Word", "Excel", "PowerPoint", "Outlook productivity"]
  },
  {
    title: "Introduction to Canva Design",
    duration: "3 months",
    certificate: "Canva Design Certificate",
    outcomes: ["Graphic design basics", "Branded templates", "Social media visuals", "Presentation design"]
  },
  {
    title: "Social Media Basics",
    duration: "3 months",
    certificate: "Social Media Certificate",
    outcomes: ["Platform management", "Content creation", "Audience growth", "Basic analytics"]
  },
  {
    title: "Email Management and Communication",
    duration: "3 months",
    certificate: "Email Management Certificate",
    outcomes: ["Inbox organization", "Professional email writing", "Filtering & scheduling", "Business etiquette"]
  },
  {
    title: "CV Writing and Interview Preparation",
    duration: "3 months",
    certificate: "Career Readiness Certificate",
    outcomes: ["ATS-friendly CV writing", "Cover letters", "Mock interviews", "STAR method"]
  },
  {
    title: "Introduction to AI Tools",
    duration: "3 months",
    certificate: "AI Tools Certificate",
    outcomes: ["ChatGPT & AI assistants", "Prompt writing", "AI for productivity", "Automation basics"]
  },
  {
    title: "Basic Excel for Beginners",
    duration: "3 months",
    certificate: "Excel Essentials Certificate",
    outcomes: ["Formulas & functions", "Data entry & sorting", "Charts & tables", "Spreadsheet formatting"]
  },
  {
    title: "Freelancing Fundamentals",
    duration: "3 months",
    certificate: "Freelancing Certificate",
    outcomes: ["Upwork & Fiverr setup", "Writing proposals", "Client management", "Setting rates"]
  },
  {
    title: "Customer Service Essentials",
    duration: "3 months",
    certificate: "Customer Service Certificate",
    outcomes: ["CRM tools", "Live chat support", "Complaint resolution", "Professional tone"]
  },
  {
    title: "Personal Branding and Online Presence",
    duration: "3 months",
    certificate: "Personal Branding Certificate",
    outcomes: ["LinkedIn optimization", "Personal brand strategy", "Online portfolio", "Professional networking"]
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">In-Demand Digital Courses</h2>
            <p className="text-muted-foreground text-lg">
              Practical, project-based training designed to make you instantly hirable by international employers. All courses run for 3 months.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all overflow-hidden"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{course.title}</h3>

                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaClock className="text-primary/70" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FaCertificate className="text-primary/70 shrink-0" />
                    <span className="truncate">{course.certificate}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Key Outcomes:</p>
                  <ul className="space-y-2">
                    {course.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <FaCheck className="text-secondary mt-1 shrink-0 text-xs" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-gray-50 border-t border-gray-100 group-hover:bg-primary transition-colors">
                <a href="#registration" className="block text-center font-semibold text-primary group-hover:text-white transition-colors">
                  Enroll Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
