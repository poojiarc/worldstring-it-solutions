import { motion } from "framer-motion";
import { Award, AlertTriangle, CheckCircle } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";

const stages = [
  { title: "PERM Labor Certification", description: "Department of Labor certification process ensuring no qualified U.S. workers are displaced" },
  { title: "I-140 Petition", description: "Immigrant worker petition filed with USCIS demonstrating qualifications and job requirements" },
  { title: "I-485 Adjustment", description: "Adjustment of status application to become a permanent resident of the United States" },
];

const GreenCardPage = () => (
  <PageLayout>
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <PageHero
        title="Green Card Applications"
        subtitle="Immigration Services"
        description="Employment-based green card sponsorship and permanent residency support."
        icon={Award}
      />

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Green Card Process Stages
            </h2>
          </motion.div>

          <div className="space-y-6 mb-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-muted-foreground text-justify leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-start gap-3 text-muted-foreground">
              <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />

              <p className="text-sm text-justify leading-relaxed">
                <strong className="text-foreground">Disclaimer:</strong> Green card processing times vary significantly based on country of birth and category. This is general information only. Consult qualified immigration attorneys for specific guidance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection
        title="Interested in Green Card Sponsorship?"
        description="Explore permanent residency opportunities with WorldString."
      />
    </div>
  </PageLayout>
);

export default GreenCardPage;
