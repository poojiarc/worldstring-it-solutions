import { motion } from "framer-motion";

const customers = [
  { name: "Tech Corp", initials: "TC" },
  { name: "Global Systems", initials: "GS" },
  { name: "Digital First", initials: "DF" },
  { name: "Cloud Nine", initials: "C9" },
  { name: "Data Pro", initials: "DP" },
  { name: "Cyber Shield", initials: "CS" },
  { name: "Net Solutions", initials: "NS" },
  { name: "Smart Tech", initials: "ST" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const OurCustomers = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Customers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're proud to partner with leading organizations across industries to deliver
            transformative IT solutions.
          </p>
        </motion.div>

        {/* Customer Logo Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
        >
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-background border border-border rounded-2xl p-8 flex items-center justify-center transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="text-center">
                {/* Placeholder Logo */}
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <span className="text-xl font-bold text-primary">
                    {customer.initials}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {customer.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground text-sm">Enterprise Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground text-sm">Secure & Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
