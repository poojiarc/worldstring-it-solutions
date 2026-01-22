import { motion } from "framer-motion";
import {
  Monitor,
  Code,
  Cloud,
  Shield,
  Users,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to align your IT infrastructure with business objectives and drive digital transformation.",
  },
  {
    icon: Code,
    title: "Web & Application Development",
    description:
      "Custom software solutions, web applications, and mobile apps built with cutting-edge technologies and best practices.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Solutions",
    description:
      "Scalable cloud architecture, migration services, and infrastructure management on AWS, Azure, and Google Cloud.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description:
      "Comprehensive security assessments, threat monitoring, and compliance solutions to protect your digital assets.",
  },
  {
    icon: Users,
    title: "IT Staffing & Augmentation",
    description:
      "Access top-tier IT talent through our staffing solutions, from developers to project managers and specialists.",
  },
  {
    icon: Headphones,
    title: "IT Support & Managed Services",
    description:
      "24/7 technical support, system monitoring, and managed IT services to keep your operations running smoothly.",
  },
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Customized IT solutions tailored to your business needs. We deliver
            excellence across every technology domain.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-glow-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
