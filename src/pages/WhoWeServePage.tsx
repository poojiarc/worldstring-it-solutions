import { motion } from "framer-motion";
import { Building, GraduationCap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const sectors = [
  {
    icon: Building,
    title: "Federal Government",
    description: "Comprehensive IT services for federal agencies. We deliver secure, compliant solutions that meet the rigorous standards of federal operations.",
    href: "/who-we-serve/federal",
    features: [
      "FedRAMP Compliant Solutions",
      "Security-First Architecture",
      "Classified Environment Support",
      "Modernization Programs",
    ],
  },
  {
    icon: GraduationCap,
    title: "State, Local & Education",
    description: "Tailored solutions for state agencies, local governments, and educational institutions. We understand the unique challenges of the SLED sector.",
    href: "/who-we-serve/state-local-education",
    features: [
      "K-12 & Higher Education IT",
      "State Agency Modernization",
      "Municipal IT Solutions",
      "Cost-Effective Implementation",
    ],
  },
];

const WhoWeServePage = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <PageHero
        title="Who We Serve"
        subtitle="Industry Focus"
        description="Delivering specialized IT solutions across government and education sectors with deep domain expertise."
        icon={Building}
      />

      {/* Sectors */}
      <section className="py-16 lg:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <sector.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {sector.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {sector.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    navigate(sector.href);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Partner With Us"
        description="Discover how we can support your organization's IT needs with our specialized expertise."
      />
    </PageLayout>
  );
};

export default WhoWeServePage;
