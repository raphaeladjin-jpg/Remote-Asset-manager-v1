import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqs = [
  { q: "How do I register for a course?", a: "Fill the registration form online and select your preferred package." },
  { q: "How long does each course take?", a: "Courses range from 2 to 6 weeks depending on the program." },
  { q: "Do I get a certificate?", a: "Yes, all graduates receive an industry-recognized certificate." },
  { q: "What are the payment options?", a: "Bank transfer, mobile money, PayPal, and card payment accepted." },
  { q: "Can I get a remote job after graduating?", a: "Yes, we connect all graduates with international employers." },
  { q: "What is the Learn & Work Abroad program?", a: "A step-by-step program from training to international employment." },
  { q: "Do I need a computer?", a: "Yes, a laptop or desktop and stable internet are required." },
  { q: "Are classes live or recorded?", a: "Both live sessions and recorded lessons are available." },
  { q: "Can I study part-time?", a: "Yes, our flexible schedule allows part-time enrollment." },
  { q: "What if I fail an assessment?", a: "You may retake assessments at no additional cost." },
  { q: "Is English required?", a: "Basic English is needed; our Professional English course can help." },
  { q: "How do I contact support?", a: "Via email, WhatsApp, or the contact form on the website." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'border-primary shadow-md' : 'border-gray-200 hover:border-primary/50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white"
                >
                  <span className={`font-semibold text-lg transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                    {faq.q}
                  </span>
                  <FaChevronDown className={`shrink-0 transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-muted-foreground border-t border-gray-100 bg-gray-50/50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
