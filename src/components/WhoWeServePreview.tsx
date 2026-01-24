import { motion } from "framer-motion";
import { Building, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: Building,
    title: "Federal Government",
    description: "Comprehensive IT services for federal agencies with security-first approach and full compliance.",
    href: "/who-we-serve/federal",
  },
  {
    icon: GraduationCap,
    title: "State, Local & Education",
    description: "Tailored solutions for state agencies, local governments, and educational institutions.",
    href: "/who-we-serve/state-local-education",
  },
];

export const WhoWeServePreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 lg:py-28 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />

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
            Industries We Support
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Who We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From federal agencies to educational institutions, we deliver specialized IT solutions for the public sector.
          </p>
        </motion.div>

        {/* Sector Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              onClick={() => {
                navigate(sector.href);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <sector.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {sector.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {sector.description}
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              navigate("/who-we-serve");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border-border hover:bg-secondary"
          >
            View All Sectors
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
