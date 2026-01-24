import { motion } from "framer-motion";
import { Plane, FileCheck, Users, Clock, AlertTriangle } from "lucide-react";
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
    <PageHero title="H1B Visa Applications" subtitle="Immigration Services" description="Comprehensive H1B visa sponsorship and application support for skilled professionals." icon={Plane} />
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">H1B Application Process</h2>
        </motion.div>
        <div className="grid md:grid-cols-5 gap-4 mb-16">
          {processSteps.map((step, index) => (
            <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-xl p-4 text-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">{step.step}</div>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 text-muted-foreground">
            <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
            <p className="text-sm"><strong>Disclaimer:</strong> Immigration regulations change frequently. This information is for general guidance only. Please consult with qualified immigration attorneys for specific advice.</p>
          </div>
        </motion.div>
      </div>
    </section>
    <CTASection title="Need H1B Sponsorship?" description="Contact us to discuss H1B opportunities with WorldString." />
  </PageLayout>
);

export default H1BVisaPage;
