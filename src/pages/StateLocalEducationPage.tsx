import { motion } from "framer-motion";
import { GraduationCap, Building2, School, CheckCircle, Users, BookOpen } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const solutions = [
  {
    icon: Building2,
    title: "State Government",
    description: "IT modernization and digital services for state agencies.",
    features: ["Legacy Modernization", "Citizen Services Portals", "Data Analytics", "Cloud Migration"],
  },
  {
    icon: School,
    title: "Local Government",
    description: "Municipal IT solutions for cities and counties.",
    features: ["Smart City Initiatives", "Public Safety Systems", "GIS Solutions", "Network Infrastructure"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "K-12 and higher education IT services.",
    features: ["Learning Management Systems", "Campus Networks", "Student Information Systems", "EdTech Integration"],
  },
];

const benefits = [
  "Cost-effective solutions for budget-conscious organizations",
  "Experience with public sector procurement processes",
  "Compliance with education privacy regulations (FERPA)",
  "Scalable solutions for growing student populations",
  "24/7 support for critical education systems",
  "Training and change management services",
];

const supportModels = [
  { model: "Project-Based", description: "Defined scope implementations with clear deliverables" },
  { model: "Managed Services", description: "Ongoing IT operations and support" },
  { model: "Consulting", description: "Strategic advisory and technology planning" },
  { model: "Staff Augmentation", description: "Skilled resources to supplement your team" },
];

const StateLocalEducationPage = () => {
  return (
    <PageLayout>
      <PageHero
        title="State, Local & Education"
        subtitle="SLED Sector Excellence"
        description="Specialized IT solutions for state agencies, local governments, and educational institutions. We understand the unique challenges and requirements of the public sector."
        icon={GraduationCap}
      />

      {/* Solutions Overview */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sector-Specific Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tailored IT services for the unique needs of each SLED segment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Outcomes */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefits & Outcomes
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "100+", label: "SLED Clients" },
                  { value: "500K+", label: "Students Served" },
                  { value: "25+", label: "States Covered" },
                  { value: "15+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Models */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Support Models
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportModels.map((item, index) => (
              <motion.div
                key={item.model}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <h3 className="font-semibold text-foreground mb-2">{item.model}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss Your SLED IT Needs"
        description="Connect with us to explore solutions tailored for your organization."
      />
    </PageLayout>
  );
};

export default StateLocalEducationPage;
