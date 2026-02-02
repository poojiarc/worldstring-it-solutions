import { motion } from "framer-motion";
import { Plane, AlertTriangle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const processSteps = [
  { step: "1", title: "Consultation", description: "Initial assessment of eligibility and requirements" },
  { step: "2", title: "Documentation", description: "Prepare and review all required documents" },
  { step: "3", title: "Filing", description: "Submit petition to USCIS" },
  { step: "4", title: "Processing", description: "Monitor case status and respond to RFEs" },
  { step: "5", title: "Approval", description: "Receive approval and begin employment" },
];

const H1BVisaPage = () => (
  <PageLayout>
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <PageHero
        title="H1B Visa Applications"
        subtitle="Immigration Services"
        description="Comprehensive H1B visa sponsorship and application support for skilled professionals."
        icon={Plane}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              H1B Application Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4 mb-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-5 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold mx-auto mb-3">
                  {step.step}
                </div>

                <h3 className="font-bold text-foreground mb-1">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground text-justify sm:text-center leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-3 text-muted-foreground">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />

              <p className="text-sm text-justify leading-relaxed">
                <strong className="text-foreground">Disclaimer:</strong> Immigration regulations change frequently. This information is for general guidance only. Please consult with qualified immigration attorneys for specific advice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Need H1B Sponsorship?"
        description="Contact us to discuss H1B opportunities with WorldString."
      />
    </div>
  </PageLayout>
);

export default H1BVisaPage;
