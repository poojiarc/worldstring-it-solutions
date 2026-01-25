import { motion } from "framer-motion";
import { Users, Code, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const itServicesCards = [
  {
    icon: Users,
    title: "IT Staffing",
    description: "Contract, permanent, and offshore staffing solutions to meet your workforce needs. We provide skilled professionals across all IT domains.",
    href: "/it-services/it-staffing",
    features: ["Contract Staffing", "Permanent Placement", "Offshore Teams", "Industry-Focused Hiring"],
  },
  {
    icon: Code,
    title: "IT Solutions",
    description: "Comprehensive technology solutions from application development to cloud migration and cybersecurity implementation.",
    href: "/it-services/it-solutions",
    features: ["Application Development", "Cloud Solutions", "Cyber Security", "Digital Transformation"],
  },
];

const ITServicesPage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHero
        title="IT Services"
        subtitle="Enterprise Solutions"
        description="Comprehensive IT staffing and solutions to power your digital transformation journey."
        icon={Code}
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {itServicesCards.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-border rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    navigate(service.href);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore {service.title}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need IT Talent or Solutions?"
        description="Let us help you find the right people and technology for your business."
      />
    </PageLayout>
  );
};

export default ITServicesPage;
