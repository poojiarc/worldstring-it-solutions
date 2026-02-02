import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Users,
  Building2,
  FileText,
  Globe,
} from "lucide-react";

import { services } from "@/data/services";

/* 🔹 First 3 custom cards */
const topServices = [
  {
    title: "IT Staffing",
    shortDescription:
      "Flexible IT staffing solutions including contract, contract-to-hire, and full-time placements tailored to your business needs.",
    icon: Users,
    link: "/it-services/it-staffing",
  },
  {
    title: "Federal",
    shortDescription:
      "Technology solutions and staffing services designed specifically for U.S. federal agencies and government organizations.",
    icon: Building2,
    link: "/who-we-serve/federal",
  },
  {
    title: "GSA MAS",
    shortDescription:
      "Simplified procurement through GSA Multiple Award Schedule for federal and public sector customers.",
    icon: FileText,
    link: "/contracts/gsa-mas",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative bg-gradient-to-b from-secondary/30 via-background to-secondary/20 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-4 h-4" />
            What We Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-2 mb-6 tracking-tight">
            Our{" "}
            <span className="text-gradient">
              Services
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium text-justify sm:text-center">
            Comprehensive IT solutions designed to transform your business, 
            enhance security, and drive innovation across your enterprise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* First 3 replacement cards */}
          {topServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={service.link} className="block h-full group">
                <div className="glass-card h-full min-h-[320px] rounded-2xl p-8 transition-all duration-500 flex flex-col justify-between group-hover:border-primary/30">
                  
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl" />

                  {/* Icon */}
                  <div className="icon-badge mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:border-transparent transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-4 text-justify leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                    <Globe className="w-4 h-4" />
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Remaining services from services.ts */}
          {services.slice(0, 5).map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link to={`/services/${service.slug}`} className="block h-full group">
                <div className="glass-card h-full min-h-[320px] rounded-2xl p-8 transition-all duration-500 flex flex-col justify-between group-hover:border-primary/30 relative overflow-hidden">
                  
                  {/* Top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Icon */}
                  <div className="icon-badge mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:border-transparent transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-4 text-justify leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-primary text-sm font-bold group-hover:gap-3 transition-all">
                    <Globe className="w-4 h-4" />
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
