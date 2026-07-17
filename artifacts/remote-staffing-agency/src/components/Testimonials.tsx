import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Amara Diallo",
    country: "Nigeria",
    role: "Virtual Assistant",
    company: "UK Startup",
    income: "$1,200/mo",
    text: "The Virtual Assistant training gave me exactly the skills I needed. Within 3 weeks of graduating, the agency matched me with a startup in London. My life has completely changed.",
    initials: "AD"
  },
  {
    name: "Fatima Al-Rashid",
    country: "Morocco",
    role: "Digital Marketer",
    company: "Canadian E-commerce",
    income: "",
    text: "I was struggling to find local jobs. The Digital Marketing course taught me practical skills that international clients actually want. Now I manage ads for a brand in Toronto.",
    initials: "FA"
  },
  {
    name: "James Ochieng",
    country: "Kenya",
    role: "Customer Support Lead",
    company: "US SaaS Company",
    income: "",
    text: "The interview prep and CV writing sessions are the real deal. They didn't just teach me how to use CRM tools, they taught me how to present myself to American employers.",
    initials: "JO"
  },
  {
    name: "Priya Nair",
    country: "Ghana",
    role: "Full-time Freelancer",
    company: "Fiverr/Upwork",
    income: "$3,000/mo",
    text: "I took the Freelancing Fundamentals course. The strategies for writing proposals and managing clients allowed me to scale my freelance business to $3,000 a month.",
    initials: "PN"
  },
  {
    name: "Emmanuel Mensah",
    country: "Cameroon",
    role: "Social Media Manager",
    company: "Australian Agency",
    income: "",
    text: "I never thought working from Cameroon for an Australian company was possible. Remote Staffing Agency made the connection. The training is intense but absolutely worth it.",
    initials: "EM"
  },
  {
    name: "Zainab Hassan",
    country: "Senegal",
    role: "Data Entry Specialist",
    company: "German Firm",
    income: "",
    text: "The ongoing support even after I got my job has been incredible. They truly care about your long-term success, not just getting you through the course.",
    initials: "ZH"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg">
            Hear from our graduates who have successfully launched their global remote careers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <FaQuoteLeft className="absolute top-8 right-8 text-4xl text-gray-100" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-foreground leading-tight">{t.name}</h4>
                  <p className="text-sm text-muted-foreground">{t.country}</p>
                </div>
              </div>

              <div className="flex gap-1 text-secondary mb-4 text-sm">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed italic relative z-10">
                "{t.text}"
              </p>

              <div className="pt-6 border-t border-gray-50">
                <p className="text-sm font-semibold text-foreground">{t.role}</p>
                <p className="text-xs text-muted-foreground">{t.company} {t.income && <span className="text-green-600 font-medium ml-1">• {t.income}</span>}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
