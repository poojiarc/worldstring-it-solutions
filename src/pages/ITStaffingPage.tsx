import { motion } from "framer-motion";
import { Users, FileCheck, Globe, Building, Briefcase, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const staffingTypes = [
  {
    icon: FileCheck,
    title: "Contract Staffing",
    description: "Flexible contract-based professionals for project-specific needs. Scale your team up or down as requirements change.",
  },
  {
    icon: Briefcase,
    title: "Permanent Staffing",
    description: "Full-time placement services to build your core team with qualified, vetted IT professionals.",
  },
  {
    icon: Globe,
    title: "Offshore / Nearshore Staffing",
    description: "Cost-effective global talent solutions with dedicated offshore and nearshore development teams.",
  },
  {
    icon: Building,
    title: "Industry-Focused Hiring",
    description: "Specialized recruitment for healthcare IT, fintech, government, and enterprise sectors.",
  },
];

const processSteps = [
  { step: "01", title: "Requirement Analysis", description: "We understand your specific needs, skills, and timeline requirements." },
  { step: "02", title: "Talent Sourcing", description: "Our recruiters source and screen candidates from our extensive network." },
  { step: "03", title: "Interview & Selection", description: "We coordinate interviews and handle all selection processes." },
  { step: "04", title: "Onboarding Support", description: "Seamless onboarding with continuous support throughout the engagement." },
];

const industries = ["Healthcare IT", "Financial Services", "Government & Defense", "Technology & Software", "Retail & E-commerce", "Manufacturing"];

const ITStaffingPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="IT Staffing Solutions"
        subtitle="Talent Acquisition"
        description="Find the right IT talent faster with our comprehensive staffing services. From contract to permanent placement, we've got you covered."
        icon={Users}
      />

      {/* Staffing Types */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Staffing Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive workforce solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {staffingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <type.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Industries We Serve
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-card border border-border rounded-full text-foreground font-medium"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Staffing Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined approach to finding and placing top IT talent.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-8 -right-4 w-8 h-8 text-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Looking for IT Talent?"
        description="Tell us about your staffing needs and we'll find the perfect match for your team."
        buttonText="Discuss Your Needs"
      />
    </PageLayout>
  );
};

export default ITStaffingPage;
