import { motion } from 'framer-motion';
import { FaCheck, FaStar } from 'react-icons/fa';

const features = [
  "Online Classes (live & recorded)",
  "Digital Certificate upon completion",
  "Practical Assignments & projects",
  "One-on-One Tutor Support",
  "Free Job Placement assistance",
  "Contract Work Opportunities",
  "Monthly Payment options available",
  "Bonuses for Outstanding Students"
];

const programs = [
  {
    name: "3-Month Program",
    price: "$30",
    priceLabel: "registration fee",
    duration: "3 months",
    highlight: "Short Course Track",
    description: "Perfect for focused skill-building. Master one or more in-demand digital skills and launch your remote career in just 3 months.",
    popular: false
  },
  {
    name: "6-Month Program",
    price: "$30",
    priceLabel: "registration fee",
    duration: "6 months",
    highlight: "Advanced Track",
    description: "Comprehensive training covering multiple disciplines. Ideal for students who want deeper expertise and the strongest path to international employment.",
    popular: true
  }
];

export default function Pricing() {
  return (
    <section id="fees" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Simple, Affordable Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Get started for just <span className="font-bold text-primary">$30 USD</span> registration fee. No hidden charges — everything below is included in your program.
          </p>
        </div>

        {/* What's Included */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8 md:p-10 max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Everything Included in Your Program</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Program Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {programs.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl bg-white p-8 flex flex-col ${
                pkg.popular
                  ? 'border-2 border-primary shadow-2xl'
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide flex items-center gap-1">
                  <FaStar className="text-xs" /> RECOMMENDED
                </div>
              )}

              <div className="mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary mb-2">{pkg.highlight}</span>
                <h3 className="text-2xl font-bold text-foreground mb-4">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                <div className="border-t pt-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-extrabold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground font-medium">USD</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.priceLabel} · {pkg.duration} training</p>
                </div>
              </div>

              <div className="mt-auto pt-4">
                <a
                  href="#registration"
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${
                    pkg.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 text-foreground hover:bg-gray-200'
                  }`}
                >
                  Register Now — {pkg.price}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Monthly payment options available. Contact us for details.
        </p>
      </div>
    </section>
  );
}
